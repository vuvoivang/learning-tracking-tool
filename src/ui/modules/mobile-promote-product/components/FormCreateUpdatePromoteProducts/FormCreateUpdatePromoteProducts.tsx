/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable camelcase */
import React, { useCallback, useEffect, useState } from 'react';

import { Button, Card, Form, message, Space } from 'antd';
import { useNavigate } from 'react-router-dom';

import { useCard } from '~/src/adapters/appService/card.service';
import FormBuilder from '~/src/ui/shared/forms';
import ROUTE from '~/src/constant/routes';
import { getPromiseSettleResponseValue } from '~/src/utils';
import Loading from '~/src/ui/shared/loading';
import { useLoan } from '~/src/adapters/appService/loan.service';
import { useInsurance } from '~/src/adapters/appService/insurance.service';
import { AppType, PRODUCT_TYPE_ID, StateStatus } from '~/src/constant';
import usePromoteProduct from '~/src/adapters/appService/promoteProduct.service';
import { PromoteProduct } from '~/src/domain/promote-product';
import metaFormPromoteProduct from './props';

function FormCreateUpdatePromoteProducts({ id }: { id: number }) {
  const [form] = Form.useForm();
  const forceUpdate = FormBuilder.useForceUpdate();
  const navigate = useNavigate();
  const { getCards } = useCard();
  const { getLoans } = useLoan();
  const { getInsurance } = useInsurance();
  const { getPromoteProduct, createPromoteProduct, updatePromoteProduct } =
    usePromoteProduct();

  const [loading, setLoading] = useState<boolean>(true);

  const [products, setProducts] = useState<any>({});
  const [item, setItem] = useState<PromoteProduct>({} as PromoteProduct);

  const handleSubmitFail = (errMsg: any) => (err: any) => {
    console.log('Err submit', err);
    message.error(errMsg);
    setLoading(false);
  };

  const handleSubmitSuccess = (successMsg: any) => () => {
    message.success(successMsg);
    navigate(`/admin${ROUTE.PROMOTE_PRODUCT.LIST}`);
  };

  const handleSubmit = useCallback(
    (values: any) => {
      // setLoading(true);
      let dataSubmit: any = {};
      dataSubmit = {
        ...values,
      };
      dataSubmit.app_type = AppType.MOBILE;
      dataSubmit.state = values?.state
        ? StateStatus.ACTIVE
        : StateStatus.INACTIVE;

      if (id) {
        dataSubmit.id = +id;

        updatePromoteProduct(dataSubmit)
          .then(handleSubmitSuccess('Cập nhật thành công!'))
          .catch(handleSubmitFail('Cập nhật thất bại!'));
      } else {
        createPromoteProduct(dataSubmit)
          .then(handleSubmitSuccess('Tạo mới thành công!'))
          .catch(handleSubmitFail('Tạo mới thất bại!'));
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [item]
  );

  useEffect(() => {
    const handleGetMetaData = async () => {
      const initialData = await Promise.allSettled([
        getCards(),
        getLoans(),
        getInsurance(),
      ]);

      const [fetchCards, fetchLoans, fetchInsurance] = initialData.map(
        getPromiseSettleResponseValue
      );

      setProducts({
        [PRODUCT_TYPE_ID.CARD]: fetchCards.data,
        [PRODUCT_TYPE_ID.LOAN]: fetchLoans.data,
        [PRODUCT_TYPE_ID.INSURANCE]: fetchInsurance.data,
      });
      if (id) {
        const detailPromoteProduct = await getPromoteProduct(id);
        // const selectedBank = fetchBanks.find((item) => item.id === id);
        form.setFieldsValue(detailPromoteProduct);
        setItem(detailPromoteProduct);

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
              meta={metaFormPromoteProduct({
                form,
                products,
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

export default FormCreateUpdatePromoteProducts;
