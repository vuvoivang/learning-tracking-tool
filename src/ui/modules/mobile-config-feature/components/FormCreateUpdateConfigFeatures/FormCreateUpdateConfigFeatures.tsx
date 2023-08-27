/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable camelcase */
import React, { useCallback, useEffect, useState } from 'react';

import { Button, Card, Form, message, Space } from 'antd';
import { useNavigate } from 'react-router-dom';

import FormBuilder from '~/src/ui/shared/forms';
import ROUTE from '~/src/constant/routes';
import Loading from '~/src/ui/shared/loading';
import metaFormConfigFeature from '~/src/ui/modules/mobile-config-feature/components/FormCreateUpdateConfigFeatures/props';
import { PRODUCT_TYPE_ID, StateStatus } from '~/src/constant';
import useConfigFeatures from '~/src/adapters/appService/configFeatures.service';
import { ConfigFeature } from '~/src/domain/config-feature';

function FormCreateUpdateConfigFeatures({
  id,
}: {
  id: number;
  type: PRODUCT_TYPE_ID;
}) {
  const [form] = Form.useForm();
  const forceUpdate = FormBuilder.useForceUpdate();
  const navigate = useNavigate();
  const { getConfigFeature, createConfigFeature, updateConfigFeature } =
    useConfigFeatures();

  const [loading, setLoading] = useState<boolean>(true);

  const [item, setItem] = useState<ConfigFeature>({} as ConfigFeature);

  const handleSubmitFail = (errMsg: any) => (err: any) => {
    console.log('Err submit', err);
    message.error(errMsg);
    setLoading(false);
  };

  const handleSubmitSuccess = (successMsg: any) => () => {
    message.success(successMsg);
    navigate(`/admin${ROUTE.CONFIG_FEATURE.LIST}`);
  };

  const handleSubmit = useCallback(
    (values: any) => {
      // setLoading(true);
      let dataSubmit: any = {};
      dataSubmit = {
        ...values,
      };

      dataSubmit.state = values?.state
        ? StateStatus.ACTIVE
        : StateStatus.INACTIVE;

      if (id) {
        dataSubmit.id = +id;

        updateConfigFeature(dataSubmit)
          .then(handleSubmitSuccess('Cập nhật thành công!'))
          .catch(handleSubmitFail('Cập nhật thất bại!'));
      } else {
        createConfigFeature(dataSubmit)
          .then(handleSubmitSuccess('Tạo mới thành công!'))
          .catch(handleSubmitFail('Tạo mới thất bại!'));
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [item]
  );

  useEffect(() => {
    const handleGetMetaData = async () => {
      if (id) {
        const detail = await getConfigFeature(id);
        // const selectedBank = fetchBanks.find((item) => item.id === id);
        form.setFieldsValue({
          ...detail,
          state: detail?.state === StateStatus.ACTIVE,
        });
        setItem(detail);

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
              meta={metaFormConfigFeature({
                form,
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
}

export default FormCreateUpdateConfigFeatures;
