/* eslint-disable camelcase */
import React, { useCallback, useEffect, useState } from 'react';

import { Button, Card, Form, message, Space } from 'antd';
import { useNavigate } from 'react-router-dom';

import { useCard } from '~/src/adapters/appService/card.service';
import FormBuilder from '~/src/ui/shared/forms';
import ROUTE from '~/src/constant/routes';
import { getPromiseSettleResponseValue } from '~/src/utils';
import Loading from '~/src/ui/shared/loading';
import { metaFormBanner } from '~/src/ui/modules/mobile-banner/components/FormCreateUpdateBanner/props';
import { useLoan } from '~/src/adapters/appService/loan.service';
import { useInsurance } from '~/src/adapters/appService/insurance.service';
import useBanner from '~/src/adapters/appService/banner.service';
import { Banner } from '~/src/domain/banner';
import { AppType, PRODUCT_TYPE_ID, StateStatus } from '~/src/constant';
import { Partner } from '~/src/domain/partner';
import { usePartner } from '~/src/adapters/appService/partner.service';

const FormCreateUpdateBanner = ({ id, type }) => {
  const [form] = Form.useForm();
  const forceUpdate = FormBuilder.useForceUpdate();
  const navigate = useNavigate();
  const { getCards } = useCard();
  const { getLoans } = useLoan();
  const { getInsurance } = useInsurance();
  const { getBanner, createBanner, updateBanner } = useBanner();
  const { getAllPartner } = usePartner();

  const [loading, setLoading] = useState<boolean>(true);

  const [partners, setPartners] = useState<Array<Partner>>([]);
  const [products, setProducts] = useState<any>({});
  const [item, setItem] = useState<Array<Banner>>([]);

  const handleSubmitFail = (errMsg) => (err) => {
    console.log('err submit', err);
    message.error(errMsg);
    setLoading(false);
  };

  const handleSubmitSuccess = (successMsg) => () => {
    message.success(successMsg);
    navigate(`/admin${ROUTE.BANNER.LIST}`);
  };

  const handleSubmit = useCallback(
    (values) => {
      // setLoading(true);
      let dataSubmit: any = {};

      dataSubmit = {
        ...values,
      };

      // dataSubmit.banner_type = +type;
      dataSubmit.app_type = AppType.MOBILE;
      dataSubmit.state = values?.state
        ? StateStatus.ACTIVE
        : StateStatus.INACTIVE;

      if (id) {
        dataSubmit.id = +id;

        updateBanner(dataSubmit)
          .then(handleSubmitSuccess('Cập nhật thành công!'))
          .catch(handleSubmitFail('Cập nhật thất bại!'));
      } else {
        createBanner(dataSubmit)
          .then(handleSubmitSuccess('Tạo mới thành công!'))
          .catch(handleSubmitFail('Tạo mới thất bại!'));
      }
    },
    [item]
  );

  useEffect(() => {
    const handleGetMetaData = async () => {
      const initialData = await Promise.allSettled([
        getCards(),
        getLoans(),
        getInsurance(),
        getAllPartner(),
      ]);

      const [fetchCards, fetchLoans, fetchInsurance, fetchPartner] =
        initialData.map(getPromiseSettleResponseValue);

      setProducts({
        [PRODUCT_TYPE_ID.CARD]: fetchCards.data,
        [PRODUCT_TYPE_ID.LOAN]: fetchLoans.data,
        [PRODUCT_TYPE_ID.INSURANCE]: fetchInsurance.data,
      });

      setPartners(fetchPartner);

      if (id) {
        const detailBanner = await getBanner(id);
        // const selectedBank = fetchBanks.find((item) => item.id === id);
        form.setFieldsValue({
          ...detailBanner,
          state: detailBanner?.state === StateStatus.ACTIVE,
        });
        // @ts-ignore
        setItem(detailBanner);

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
              meta={metaFormBanner({
                form,
                products,
                partners,
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

export default FormCreateUpdateBanner;
