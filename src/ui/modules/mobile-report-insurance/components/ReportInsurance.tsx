import React, { useCallback, useEffect, useState } from 'react';
import { Button, Form, message } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { useMobileReport } from '~/src/adapters/appService/mobileReport.service';
import { metaDownloadReportInsurance } from '~/src/ui/modules/mobile-report-insurance/components/props';
import FormBuilder from '~/src/ui/shared/forms/FormBuilder';
import Loading from '~/src/ui/shared/loading';
import { usePartner } from '~/src/adapters/appService/partner.service';

function ReportInsurance() {
  const [partners, setPartners] = useState([]);

  const [form] = Form.useForm();
  const { getReportInsurance } = useMobileReport();
  const { getAllPartner } = usePartner();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getAllPartner().then((data) => {
      setPartners(data);
    });
  }, []);

  const handleSubmit = useCallback((values: any) => {
    setLoading(true);
    const { rangeTime, partnerId } = values;
    const dataSubmit = {
      from: new Date(rangeTime?.[0]).getTime(),
      to: new Date(rangeTime?.[1]).getTime(),
      partner_id: partnerId,
    };
    getReportInsurance(dataSubmit).then((res) => {
      message.success('Download report thành công!');
      const a = document.createElement('a');
      a.href = URL.createObjectURL(res);
      a.download = `report ${Date.now().toString()}.xlsx`;
      a.click();
      setLoading(false);
    });
  }, []);
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {loading ? (
        <Loading />
      ) : (
        <Form form={form} onFinish={handleSubmit}>
          <FormBuilder
            meta={metaDownloadReportInsurance({
              form,
              partners,
            })}
          />
          <Form.Item wrapperCol={{ offset: 4, span: 18 }}>
            <Button
              type="primary"
              icon={<DownloadOutlined />}
              htmlType="submit"
            >
              Download report
            </Button>
          </Form.Item>
        </Form>
      )}
    </>
  );
}

export default ReportInsurance;
