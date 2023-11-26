import React from 'react';

import { MAP_STATE_STATUS, MAP_STATE_STATUS_LIST } from "~/src/constant";
import { API_UPLOAD_IMAGE } from '~/src/constant/api';
import Editor from '~/src/ui/shared/editor';
import UploadButton from '~/src/ui/shared/upload';
import moment from 'moment';

const STATUS_PROBLEM = [
  { value: 0, label: "Chưa hoàn thành" },
  { value: 1, label: "Đã hoàn thành" },
  // { value: 2, label: "Đã xoá" },
  { value: 3, label: "Chưa xuất bản" }
]

export const metaFormAddProblem = ({ isEdit }) => {

  const metaEdited = isEdit ? [
    {
      key: 'createDate',
      label: 'Thời gian tạo',
      widget: 'date-picker',
      widgetProps: {
        showTime: true,
        format: date => date.utc().format("DD/MM/YYYY HH:mm:ss"),
      }
    },
    {
      key: 'finishedDate',
      label: 'Thời gian hoàn thành',
      widget: 'date-picker',
      widgetProps: {
        showTime: true,
        format: date => date.utc().format("DD/MM/YYYY HH:mm:ss"),
      }
    },
    
  ] : [];
  return {
    formItemLayout: [3, 20],
    fields: [
      {
        key: 'name',
        label: 'Tên',
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
        key: 'increase',
        label: 'Cộng tiền',
        widget: 'switch',
        defaultValue: true,
        widgetProps:{
          defaultChecked: true,
        }
      },
      ...metaEdited,
      {
        key: 'status',
        label: 'Trạng thái',
        options:
          STATUS_PROBLEM,
        widget: 'select',
        required: true,
        widgetProps: {
          style: {
            minWidth: '12rem',
          },
          placeholder: 'Chọn trạng thái',
        },
        initialValue: 0,
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
