import { IMetaFormBuilder } from '~/src/ui/shared/forms/FormBuilder/FormBuilder';

import UploadButton from '~/src/ui/shared/upload';
import { API_UPLOAD_IMAGE } from '~/src/constant/api';
import { PRODUCT_TYPE_ID } from '~/src/constant';
import InputArrayTag from '~/src/ui/shared/seo-tag';
import { BannerType } from '~/src/constant/banner';

export const metaFormBanner = ({ form, products, partners }) => {
  return {
    formItemLayout: [6, 20],
    fields: [
      {
        key: 'banner_type',
        label: 'Type',
        widget: 'select',
        options: Object.keys(BannerType)
          // eslint-disable-next-line no-restricted-globals
          .filter((v) => isNaN(Number(v)))
          .map((key: any) => {
            return {
              label: key,
              value: BannerType[key],
            };
          }),
      },
      {
        key: 'title',
        label: 'Tiêu đề',
        initialValue: '',
      },
      {
        key: 'description',
        label: 'Mô tả',
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
          moreAcceptedFileTypes: ['image/gif', 'video/mp4'],
          videoProps: {
            width: "100%",
            height: 140,
          }
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
        key: 'product_id',
        label: 'Sản phẩm',
        options: form.getFieldValue('product_type_id')
          ? products[form.getFieldValue('product_type_id')]?.map((item) => {
            return { value: item.id, label: item.name };
          })
          : [],
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
        key: 'banner_index',
        label: 'Thứ tự hiển thị',
        widget: 'number',
        rules: [
          {
            required: true,
            message: 'Mục này không được bỏ trống',
          },
        ],
        initialValue: 0,
      },
      {
        key: 'show_by_audiences',
        label: 'Audiences',
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
