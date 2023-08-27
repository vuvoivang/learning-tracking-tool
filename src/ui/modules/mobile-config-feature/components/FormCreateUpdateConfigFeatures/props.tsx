import { IMetaFormBuilder } from '~/src/ui/shared/forms/FormBuilder/FormBuilder';

import UploadButton from '~/src/ui/shared/upload';
import { API_UPLOAD_IMAGE } from '~/src/constant/api';
import { ICON_TYPE_ID } from '~/src/constant';

const metaFormConfigFeature = ({ form }: any) => {
  return {
    formItemLayout: [6, 20],
    fields: [
      {
        key: 'name',
        label: 'Name',
      },
      {
        key: 'image_url',
        label: 'Logo URL',
        required: true,
        rules: [
          {
            required: true,
            message: 'This field is required',
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
        key: 'feature_index',
        label: 'Index',
        widget: 'number',
        rules: [
          {
            required: true,
            message: 'This field is required',
          },
        ],
        initialValue: 0,
      },
      {
        key: 'icon_type',
        label: 'Icon Type',
        options: Object.keys(ICON_TYPE_ID)
          // eslint-disable-next-line no-restricted-globals
          .filter((v) => isNaN(Number(v)))
          .map((key: any) => {
            return {
              label: key,
              value: ICON_TYPE_ID[key],
            };
          }),
        widget: 'select',
        widgetProps: {
          style: {
            minWidth: '12rem',
          },
          placeholder: 'Chọn Icon Type',
          allowClear: true,
        },
        initialValue: ICON_TYPE_ID.ICON_ZONE_SHORTCUT,
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
export default metaFormConfigFeature;
