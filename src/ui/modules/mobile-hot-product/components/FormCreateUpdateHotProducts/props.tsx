import { IMetaFormBuilder } from '~/src/ui/shared/forms/FormBuilder/FormBuilder';

import UploadButton from '~/src/ui/shared/upload';
import { API_UPLOAD_IMAGE } from '~/src/constant/api';
import { PRODUCT_TYPE_ID } from '~/src/constant';
import InputArrayTag from '~/src/ui/shared/seo-tag';

const metaFormHotProduct = ({ form, products }: any) => {
  return {
    formItemLayout: [6, 20],
    fields: [
      {
        key: 'name',
        label: 'Name',
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
                  if (!value) {
                    reject('Mục này không được bỏ trống');
                  } else if (
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
        key: 'json_config',
        label: 'JSON config',
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
        initialValue: 0,
      },
      {
        key: 'hot_index',
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
        key: 'state',
        label: 'Trạng thái',
        widget: 'switch',
        defaultValue: false,
      },
    ],
  } as IMetaFormBuilder;
};
export default metaFormHotProduct;
