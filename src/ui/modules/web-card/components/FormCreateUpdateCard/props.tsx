import { IMetaFormBuilder } from '~/src/ui/shared/forms/FormBuilder/FormBuilder';
import {
  cardPreferences,
  jobs, locations,
  paymentTypes,
  salaryTypes
} from "~/src/constant/card";

import Editor from '~/src/ui/shared/editor';
import UploadButton from '~/src/ui/shared/upload';
import { API_UPLOAD_IMAGE, API_UPLOAD_IMAGE_THUMB } from '~/src/constant/api';

export const metaCard = ({ form, banks = [], cities = [] }) => {
  return {
    formItemLayout: [6, 16],
    fields: [
      {
        key: 'name',
        label: 'Tên thẻ',
        rules: [
          {
            validator: (rule, value) => {
              return new Promise((resolve, reject) => {
                setTimeout(() => {
                  if (!value) {
                    reject('Mục này không được bỏ trống');
                  } else {
                    resolve();
                  }
                });
              });
            },
          },
        ],
        validateTrigger: ['onChange', 'onBlur'],
      },
      {
        key: 'card_type_id',
        label: 'Loại thẻ',
        widget: 'select',
        rules: [
          {
            required: true,
            message: 'Mục này không được bỏ trống',
          },
        ],
        initialValue: null,
        options: [
          [1, 'Credit'],
          [2, 'Debit'],
        ],
      },
      {
        key: 'bank_id',
        label: 'Ngân hàng',
        widget: 'select',
        rules: [
          {
            required: true,
            message: 'Mục này không được bỏ trống',
          },
        ],
        initialValue: null,
        options:
          banks?.length > 0
            ? banks.map((option) => ({
                label: option.name,
                value: option.id,
              }))
            : [],
      },
      {
        key: 'card_scheme_id',
        label: 'Card Scheme',
        widget: 'select',
        rules: [
          {
            required: true,
            message: 'Mục này không được bỏ trống',
          },
        ],
        initialValue: null,
        options: [
          {
            value: 1,
            label: 'Visa',
          },
          {
            value: 2,
            label: 'MasterCard',
          },
          {
            value: 3,
            label: 'JCB',
          },
          {
            value: 4,
            label: 'UnionPay',
          },
          {
            value: 5,
            label: 'American Express',
          },
          {
            value: 6,
            label: 'Discover',
          },
          {
            value: 7,
            label: 'Napas',
          },
        ],
      },
      // {
      //   key: 'age_requirement_label',
      //   render() {
      //     return (
      //       <div className="ant-form-item mb-0 w-100">
      //         <div
      //           data-label="Yêu cầu độ tuổi"
      //           className="ant-row ant-form-item-row"
      //         >
      //           <div className="ant-col ant-col-10 ant-form-item-label">
      //             <label
      //               htmlFor="salary_type"
      //               className="ant-form-item-required"
      //               title="Yêu cầu độ tuổi"
      //             >
      //               Yêu cầu độ tuổi
      //             </label>
      //           </div>
      //         </div>
      //       </div>
      //     );
      //   },
      // },
      {
        key: 'min_age',
        label: 'Min age',
        widget: 'number',
        rules: [
          {
            required: true,
            message: 'Mục này không được bỏ trống',
          },
        ],
        fieldProps: {
          className: 'w-50',
        },
      },
      {
        key: 'max_age',
        label: 'Max age',
        widget: 'number',
        rules: [
          {
            required: true,
            message: 'Mục này không được bỏ trống',
          },
        ],
        fieldProps: {
          className: 'w-50',
        },
      },
      {
        key: 'zalo_rating',
        label: 'Zalo rating',
        widget: 'number',
        rules: [
          {
            required: true,
            message: 'Mục này không được bỏ trống',
          },
        ],
      },
      {
        key: 'annual_fee',
        label: 'Phí thường niên cho thẻ chính',
        widget: 'number',
        rules: [
          {
            required: true,
            message: 'Mục này không được bỏ trống',
          },
        ],
      },
      {
        key: 'annual_fee_sub',
        label: 'Phí thường niên cho thẻ phụ',
        widget: 'number',
        rules: [
          {
            required: true,
            message: 'Mục này không được bỏ trống',
          },
        ],
      },
      {
        key: 'cash_advance_fee',
        label: 'Cash advance fee',
      },
      {
        key: 'setup_fee',
        label: 'Setup fee',
      },
      {
        key: 'late_payment_fee',
        label: 'Late payment fee',
      },
      {
        key: 'dcc_payment_fee',
        label: 'Dcc payment fee',
      },
      {
        key: 'oversea_transfer_fee',
        label: 'Oversea transfer fee',
      },
      {
        key: 'replacement_fee',
        label: 'Replacement fee',
      },
      {
        key: 'interest_rate',
        label: 'Lãi suất',
        widget: 'number',
        rules: [
          {
            required: true,
            message: 'Mục này không được bỏ trống',
          },
        ],
      },
      {
        key: 'allowed_location_ids',
        label: 'Tỉnh/Thành phố',
        options: locations,
        widget: 'select',
        required: true,
        message: 'Vui lòng nhập Tỉnh/Thành phố',
        widgetProps: {
          mode: 'multiple',
        },
      },
      {
        key: 'allowed_social_insurance_ids',
        label: 'Allowed Social Insurance Ids ',
        options: [
          { value: 1, label: 'Đã có' },
          { value: 2, label: 'Chưa có' },
        ],
        widget: 'select',
        widgetProps: {
          mode: 'multiple',
        },
      },
      {
        key: 'allowed_have_credit_card_before',
        label: 'Allowed Have Credit Card Before',
        options: [
          { value: 1, label: 'Có' },
          { value: 2, label: 'Không' },
        ],
        widget: 'select',
        widgetProps: {
          mode: 'multiple',
        },
      },
      {
        key: 'allowed_insurance_income_level_ids',
        label: 'Allowed Insurance Income Level Ids',
        options: salaryTypes,
        widget: 'select',
      },
      {
        key: 'allowed_received_income_level_ids',
        label: 'Allowed Received Income Level Ids',
        options: salaryTypes,
        widget: 'select',
      },
      {
        key: 'min_income',
        label: 'Thu nhập tối thiểu',
        widget: 'number',
        rules: [
          {
            required: true,
            message: 'Mục này không được bỏ trống',
          },
        ],
      },
      {
        key: 'allowed_salary_level_ids',
        label: 'Salary Type',
        options: salaryTypes,
        widget: 'select',
        widgetProps: {
          mode: 'multiple',
        },
        rules: [
          {
            required: true,
            message: 'Mục này không được bỏ trống',
          },
        ],
        defaultValue: [10, 11],
      },
      {
        key: 'payment_type_id',
        label: 'Cách nhận lương',
        options: paymentTypes,
        widget: 'select',
        rules: [
          {
            required: true,
            message: 'Mục này không được bỏ trống',
          },
        ],
      },
      {
        key: 'card_preference_ids',
        label: 'Ưu đãi',
        options: cardPreferences,
        widget: 'select',
        widgetProps: {
          mode: 'multiple',
        },
        rules: [
          {
            required: true,
            message: 'Mục này không được bỏ trống',
          },
        ],
      },
      {
        key: 'website_card_preference_description',
        label: 'Mô tả ưu đãi thẻ',
      },
      {
        key: 'allowed_job_ids',
        label: 'Ưu đãi',
        options: jobs,
        widget: 'select',
        widgetProps: {
          mode: 'multiple',
        },
        rules: [
          {
            required: true,
            message: 'Mục này không được bỏ trống',
          },
        ],
      },
      {
        key: 'hotline',
        label: 'Hotline',
      },
      {
        key: 'income_proof_labor_contract',
        label: 'Income proof labor contract',
        widget: 'switch',
        defaultValue: false,
      },
      {
        key: 'income_proof_utility_bill',
        label: 'Income proof utility bill',
        widget: 'switch',
        defaultValue: false,
      },
      {
        key: 'income_proof_insurance_contract',
        label: 'Income proof insurance contract',
        widget: 'switch',
        defaultValue: false,
      },
      {
        key: 'income_proof_mrc',
        label: 'Income proof mrc',
        widget: 'switch',
        defaultValue: false,
      },
      {
        key: 'income_proof_bank_statement',
        label: 'Income proof bank statement',
        widget: 'switch',
        defaultValue: false,
      },
      {
        key: 'state',
        label: 'State',
        widget: 'number',
        rules: [
          {
            required: true,
            message: 'Mục này không được bỏ trống',
          },
        ],
        defaultValue: 1,
      },
      {
        key: 'thumb_url',
        label: 'Featured Image URL',
        widget: UploadButton,
        widgetProps: {
          api: API_UPLOAD_IMAGE_THUMB,
        },
      },
      {
        key: 'website_image_url',
        label: 'Image URL',
        widget: UploadButton,
        widgetProps: {
          api: API_UPLOAD_IMAGE,
        },
      },
      {
        key: 'promotion_image_url',
        label: 'Promotion Image URL',
        widget: UploadButton,
        widgetProps: {
          api: API_UPLOAD_IMAGE,
        },
      },
      {
        key: 'website_detailed_requirement',
        label: 'Chi tiết điều kiện',
        required: true,
        message: 'Vui lòng hoàn thành thông tin Chi tiết điều kiện',
        widget: Editor,
        defaultValue: '123018273',
      },
      {
        key: 'website_brief_requirement',
        label: 'Tóm tắt điều kiện',
        required: true,
        message: 'Vui lòng hoàn thành thông tin Tóm tắt điều kiện',
        widget: Editor,
        defaultValue: '123018273',
      },
      {
        key: 'website_detailed_promotion',
        label: 'Chi tiết ưu đãi',
        required: true,
        message: 'Vui lòng hoàn thành thông tin Chi tiết ưu đãi',
        widget: Editor,
        defaultValue: '123018273',
      },
      {
        key: 'website_brief_promotion',
        label: 'Tóm tắt ưu đãi',
        required: true,
        message: 'Vui lòng hoàn thành thông tin Tóm tắt ưu đãi',
        widget: Editor,
        defaultValue: '123018273',
      },
      {
        key: 'website_detailed_info',
        label: 'Chi tiết ưu đãi',
        required: true,
        message: 'Vui lòng hoàn thành thông tin Chi tiết thông tin',
        widget: Editor,
        defaultValue: '123018273',
      },
      {
        key: 'website_brief_info',
        label: 'Tóm tắt thông tin',
        required: true,
        message: 'Vui lòng hoàn thành thông tin Tóm tắt thông tin',
        widget: Editor,
        defaultValue: '123018273',
      },
      {
        key: 'website_allowed_audience_ids',
        label: 'Apply audience ids',
      },
      {
        key: 'vib_product_group',
        label: 'Vib product group',
      },
      {
        key: 'form_image_url',
        label: 'Attraction Zone',
        widget: UploadButton,
        widgetProps: {
          api: API_UPLOAD_IMAGE,
        },
      },
      {
        key: 'website_qr_image_url',
        label: 'Ảnh QR',
        widget: UploadButton,
        widgetProps: {
          api: API_UPLOAD_IMAGE,
        },
      },
      {
        key: 'website_qr_content',
        label: 'Nội dung Trang QR',
        widget: Editor,
      },
    ],
  } as IMetaFormBuilder;
};
