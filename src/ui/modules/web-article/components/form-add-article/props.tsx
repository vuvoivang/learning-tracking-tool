import React from 'react';

import { MAP_STATE_STATUS, MAP_STATE_STATUS_LIST } from "~/src/constant";
import { API_UPLOAD_IMAGE } from '~/src/constant/api';
import Editor from '~/src/ui/shared/editor';
import UploadButton from '~/src/ui/shared/upload';

export const metaFormAddProblem = () => {
  return {
    formItemLayout: [2, 20],
    fields: [
      {
        key: 'name',
        label: 'Tên bài toán',
        required: true,
        message: 'Vui lòng nhập tên bài toán',
      },
      {
        key: 'difficulty',
        label: 'Độ khó',
        message: 'Vui lòng nhập độ khó',
        required: true,
      },
      {
        key: 'price',
        label: 'Tiền thưởng',
        required: true,
        message: 'Vui lòng nhập tiền thưởng',
        widget: 'number',
        widgetProps: {
          style: {
            minWidth: '12rem',
          },
        },
      },
      {
        key: 'description',
        label: 'Mô tả',
        message: 'Vui lòng nhập mô tả',
        widget: Editor,
      },
      {
        key: 'solution',
        label: 'Cách giải',
        widget: Editor,
      },
    ],
  };
};
