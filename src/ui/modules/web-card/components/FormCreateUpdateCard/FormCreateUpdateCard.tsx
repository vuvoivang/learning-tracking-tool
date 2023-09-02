/* eslint-disable camelcase */
import React, { useCallback, useEffect, useState } from 'react';

import { Button, Card, Form, message, Space } from 'antd';
import { useNavigate } from 'react-router-dom';

import { useCard } from '~/src/adapters/appService/card.service';
import { useBank } from '~/src/adapters/appService/bank.service';
import FormBuilder from '~/src/ui/shared/forms';
import ROUTE from '~/src/constant/routes';
import { getPromiseSettleResponseValue } from '~/src/utils';
import { metaCard } from '~/src/ui/modules/web-card/components/FormCreateUpdateCard/props';
import Loading from '~/src/ui/shared/loading';
import { CardProduct } from '~/src/domain/cardProduct';

const FormCreateUpdateCard = ({ id }) => {
  const [form] = Form.useForm();
  const forceUpdate = FormBuilder.useForceUpdate();
  const navigate = useNavigate();
  const { getCard, createCard, updateCard } = useCard();
  const { getBanks } = useBank();

  const [loading, setLoading] = useState<boolean>(true);

  const [banks, setBanks] = useState<Array<any>>([]);
  const [card, setCard] = useState<Array<CardProduct>>({});

  const handleSubmitFail = (errMsg) => (err) => {
    console.log('err submit', err);
    message.error(errMsg);
    setLoading(false);
  };

  const handleSubmitSuccess = (successMsg) => () => {
    message.success(successMsg);
    navigate(`${ROUTE.CARD.LIST}`);
  };

  const handleSubmit = useCallback(
    (values) => {
      // setLoading(true);
      let dataSubmit: any = {};
      if (id) {
        dataSubmit = {
          ...card,
          ...values,
        };

        dataSubmit.id = +id;
        // TODO: remove hardcode deadline
        dataSubmit.deadline_at = 0;

        updateCard(dataSubmit)
          .then(handleSubmitSuccess('Cập nhật thành công!'))
          .catch(handleSubmitFail('Cập nhật thất bại!'));
      } else {
        dataSubmit = {
          ...values,
          card_preference_description: '',
          image_url: '',
          detailed_requirement: '',
          brief_requirement: '',
          detailed_promotion: '',
          brief_promotion: '',
          detailed_info: '',
          brief_info: '',
          allowed_audience_ids: '',
        };

        createCard(dataSubmit)
          .then(handleSubmitSuccess('Tạo mới thành công!'))
          .catch(handleSubmitFail('Tạo mới thất bại!'));
      }
    },
    [card]
  );

  useEffect(() => {
    const handleGetMetaData = async () => {
      const initialData = await Promise.allSettled([getBanks()]);

      const [fetchBanks] = initialData.map(getPromiseSettleResponseValue);

      setBanks(fetchBanks.data);
      if (id) {
        const detailCard = await getCard(id);
        // const selectedBank = fetchBanks.find((item) => item.id === id);
        form.setFieldsValue(detailCard);
        // @ts-ignore
        setCard(detailCard);

        setLoading(false);
      } else {
        setLoading(false);
      }
    };
    handleGetMetaData();
  }, [id]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Card>
          <Form
            form={form}
            onFinish={handleSubmit}
            onValuesChange={forceUpdate}
            validateTrigger={['onChange', 'onBlur']}
            className="site-page-content"
          >
            <FormBuilder
              meta={metaCard({
                form,
                banks,
              })}
            />
            <Form.Item wrapperCol={{ offset: 2, span: 18 }}>
              <Space>
                <Button type="primary" htmlType="submit" size="large">
                  Lưu thông tin
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </Card>
      )}
    </>
  );
};

export default FormCreateUpdateCard;
