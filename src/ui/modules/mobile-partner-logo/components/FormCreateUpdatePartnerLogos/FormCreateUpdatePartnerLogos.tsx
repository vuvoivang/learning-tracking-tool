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
import metaFormPartnerLogo from '~/src/ui/modules/mobile-partner-logo/components/FormCreateUpdatePartnerLogos/props';
import { useLoan } from '~/src/adapters/appService/loan.service';
import { useInsurance } from '~/src/adapters/appService/insurance.service';
import { AppType, PRODUCT_TYPE_ID, StateStatus } from '~/src/constant';
import usePartnerLogos from '~/src/adapters/appService/partnerLogos.service';
import { PartnerLogo } from '~/src/domain/partner-logo';
import { Partner } from '~/src/domain/partner';
import { usePartner } from '~/src/adapters/appService/partner.service';
import { useBank } from '~/src/adapters/appService/bank.service';

function FormCreateUpdatePartnerLogos({ id }: { id: number }) {
  const [form] = Form.useForm();
  const forceUpdate = FormBuilder.useForceUpdate();
  const navigate = useNavigate();
  const { getCards } = useCard();
  const { getLoans } = useLoan();
  const { getInsurance } = useInsurance();
  const { getAllPartner } = usePartner();
  const { getBanks } = useBank();
  const {
    getPartnerLogo,
    createPartnerLogo,
    updateHotProduct: updateBanner,
  } = usePartnerLogos();

  const [loading, setLoading] = useState<boolean>(true);

  const [partners, setPartners] = useState<Array<Partner>>([]);
  const [banks, setBanks] = useState<Array<Partner>>([]);

  const [products, setProducts] = useState<any>({});
  const [item, setItem] = useState<PartnerLogo>({} as PartnerLogo);

  const handleSubmitFail = (errMsg: any) => (err: any) => {
    console.log('Err submit', err);
    message.error(errMsg);
    setLoading(false);
  };

  const handleSubmitSuccess = (successMsg: any) => () => {
    message.success(successMsg);
    navigate(`/admin${ROUTE.PARTNER_LOGO.LIST}`);
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

        updateBanner(dataSubmit)
          .then(handleSubmitSuccess('Cập nhật thành công!'))
          .catch(handleSubmitFail('Cập nhật thất bại!'));
      } else {
        createPartnerLogo(dataSubmit)
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
        getAllPartner(),
        getBanks(),
      ]);

      const [fetchCards, fetchLoans, fetchInsurance, fetchPartner, fetchBanks] =
        initialData.map(getPromiseSettleResponseValue);

      setProducts({
        [PRODUCT_TYPE_ID.CARD]: fetchCards.data,
        [PRODUCT_TYPE_ID.LOAN]: fetchLoans.data,
        [PRODUCT_TYPE_ID.INSURANCE]: fetchInsurance.data,
      });

      setPartners(fetchPartner);
      setBanks(fetchBanks);
      if (id) {
        const detailPartnerLogo = await getPartnerLogo(id);
        // const selectedBank = fetchBanks.find((item) => item.id === id);
        form.setFieldsValue({
          ...detailPartnerLogo,
          state: detailPartnerLogo?.state === StateStatus.ACTIVE,
        });
        setItem(detailPartnerLogo);

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
              meta={metaFormPartnerLogo({
                form,
                products,
                partners,
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
}

export default FormCreateUpdatePartnerLogos;
