import React from 'react';

import { MAP_STATE_STATUS, MAP_STATE_STATUS_LIST } from "~/src/constant";
import { API_UPLOAD_IMAGE } from '~/src/constant/api';
import Editor from '~/src/ui/shared/editor';
import UploadButton from '~/src/ui/shared/upload';



export const metaFormDescription = () => {
  return {
    formItemLayout: [2, 20],
    fields: [
      {
        key: 'description',
        message: 'Vui lòng nhập mô tả',
        widget: Editor,
        widgetProps: {
          readOnly: true,
          lockId: "ckeditor-description",
        },
      },
    ],
  };
};

export const metaFormAddProblem = () => {
  return {
    formItemLayout: [2, 20],
    fields: [
      // {
      //   key: 'description',
      //   label: 'Mô tả',
      //   message: 'Vui lòng nhập mô tả',
      //   widget: Editor,
      // },
      {
        key: 'solution',
        // label: 'Cách giải',
        widget: Editor,
      },
    ],
  };
};

