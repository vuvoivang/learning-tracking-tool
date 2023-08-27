import { ExclamationCircleOutlined } from '@ant-design/icons';
import React from 'react';

export const metaDownloadReportInsurance = ({ form, partners }) => {
  return {
    formItemLayout: [4, 16],
    fields: [
      {
        label: 'From - To',
        rules: [
          // This is equivalent with "required: true"
          {
            required: true,
            message: 'Vui lòng chọn khoảng thời gian',
          },
        ],
        key: 'rangeTime',
        widget: 'range-picker',
        widgetProps: {
          autoSize: { maxRows: 20, minRows: 3 },
          showCount: true,
          maxLength: 300,
          placeholder: ['Từ ngày', 'Đến ngày'],
          format: 'DD-MM-YYYY',
        },
      },
      {
        key: 'partnerId',
        label: 'Partner',
        rules: [
          // This is equivalent with "required: true"
          {
            required: true,
            message: 'Vui lòng chọn đối tác',
          },
        ],
        widget: 'select',
        options:
          partners?.length > 0
            ? partners.map((item) => [item.id, item.name])
            : [],
        onChange: (partnerId: any) => form.setFieldsValue({ partnerId }),
      },
    ],
  };
};
