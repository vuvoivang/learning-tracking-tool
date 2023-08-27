import { IMetaFormBuilder } from '~/src/ui/shared/forms/FormBuilder/FormBuilder';

import { LOGO_TYPE, PRODUCT_TYPE_ID } from '~/src/constant';
import InputArrayTag from '~/src/ui/shared/seo-tag';
import UploadButton from '~/src/ui/shared/upload';
import { API_UPLOAD_IMAGE } from '~/src/constant/api';

const metaFormPartnerLogo = ({ form, products, partners, banks }: any) => {
  return {
    formItemLayout: [6, 20],
    fields: [
      {
        key: 'name',
        label: 'Name',
        initialValue: '',
      },
      {
        key: 'description',
        label: 'Description',
        initialValue: '',
      },
      {
        key: 'image_url',
        label: 'Image URL',
        required: true,
        rules: [
          {
            required: true,
            message: 'Mục này không được bỏ trống',
          },
        ],
        widget: UploadButton,
        widgetProps: {
          api: API_UPLOAD_IMAGE,
        },
      },
      {
        key: 'redirect_url',
        label: 'Redirect URL',
        rules: [
          {
            validator: (rule, value) => {
              return new Promise((resolve, reject) => {
                setTimeout(() => {
                  if (
                    value &&
                    !value.match(
                      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
                    )
                  ) {
                    reject('URL không đúng định dạng');
                  } else {
                    resolve();
                  }
                });
              });
            },
          },
        ],
      },
      {
        key: 'partner_id',
        label: 'Đối tác',
        options:
          partners?.length > 0
            ? partners?.map((item) => {
                return { value: item.id, label: item.name };
              })
            : [],
        widget: 'select',
        widgetProps: {
          style: {
            minWidth: '12rem',
          },
          placeholder: 'Chọn đối tác',
          allowClear: true,
        },
        initialValue: 0,
      },
      {
        key: 'bank_id',
        label: 'Ngân hàng',
        options:
          banks?.length > 0
            ? banks?.map((item) => {
                return { value: item.id, label: item.name };
              })
            : [],
        widget: 'select',
        widgetProps: {
          style: {
            minWidth: '12rem',
          },
          placeholder: 'Chọn ngân hàng',
          allowClear: true,
        },
        initialValue: 0,
      },
      {
        key: 'product_type_id',
        label: 'Loại sản phẩm',
        options: Object.keys(PRODUCT_TYPE_ID)
          // eslint-disable-next-line no-restricted-globals
          .filter((v) => isNaN(Number(v)))
          .map((key: any) => {
            return {
              label: key,
              value: PRODUCT_TYPE_ID[key],
            };
          }),
        widget: 'select',
        widgetProps: {
          style: {
            minWidth: '12rem',
          },
          placeholder: 'Chọn Trạng thái',
          allowClear: true,
        },
        initialValue: PRODUCT_TYPE_ID.CARD,
      },
      {
        key: 'logo_type',
        label: 'Logo Type',
        options: Object.keys(LOGO_TYPE)
          // eslint-disable-next-line no-restricted-globals
          .filter((v) => isNaN(Number(v)))
          .map((key: any) => {
            return {
              label: key,
              value: LOGO_TYPE[key],
            };
          }),
        widget: 'select',
        widgetProps: {
          style: {
            minWidth: '12rem',
          },
          placeholder: 'Chọn Logo Type',
          allowClear: true,
        },
        initialValue: LOGO_TYPE.CARD_CREDIT,
      },
      {
        key: 'product_id',
        label: 'Sản phẩm',
        options: form.getFieldValue('product_type_id')
          ? products[form.getFieldValue('product_type_id')]?.map((item) => {
              return { value: item.id, label: item.name };
            })
          : products[PRODUCT_TYPE_ID.CARD]?.map((item) => {
              return { value: item.id, label: item.name };
            }),
        widget: 'select',
        widgetProps: {
          style: {
            minWidth: '12rem',
          },
          placeholder: 'Chọn Trạng thái',
          allowClear: true,
          filterOption: (input, option) => {
            return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
          },
          showSearch: true,
          defaultValue: null,
        },
        initialValue: 0,
      },
      {
        key: 'logo_index',
        label: 'Index',
        widget: 'number',
        rules: [
          {
            required: true,
            message: 'This field is required',
          },
        ],
      },
      {
        key: 'allowed_audience_ids',
        label: 'Allowed Audiences',
        forwardRef: true,
        widget: InputArrayTag,
        initialValue: [],
      },
      {
        key: 'unallowed_audience_ids',
        label: 'Unallowed Audiences',
        forwardRef: true,
        widget: InputArrayTag,
        initialValue: [],
      },
      {
        key: 'state',
        label: 'Trạng thái',
        widget: 'switch',
        defaultValue: false,
      },
    ],
  } as IMetaFormBuilder;
};
export default metaFormPartnerLogo;
