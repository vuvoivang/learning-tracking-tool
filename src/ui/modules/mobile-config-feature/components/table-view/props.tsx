/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';

import { Image, Tag } from 'antd';

import { ColumnType } from 'antd/lib/table';
import { Link } from 'react-router-dom';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { IMetaFormBuilder } from '~/src/ui/shared/forms/FormBuilder/FormBuilder';
import { ICON_TYPE_ID, PRODUCT_TYPE_ID, StateStatus } from "~/src/constant";

export const columnTable: ColumnType<any>[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 50,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    width: 100,
  },
  {
    title: 'Image',
    dataIndex: 'image_url',
    width: 120,
    ellipsis: true,
    render: (value) => {
      return <Image src={value} />;
    },
  },
  {
    title: 'Redirect URL',
    dataIndex: 'redirect_url',
    width: 100,
    render: (value) => {
      return <Link to={value}>{value}</Link>;
    },
  },
  {
    title: 'Index',
    dataIndex: 'feature_index',
    width: 70,
  },
  {
    title: 'Type',
    dataIndex: 'icon_type',
    width: 70,
  },
  {
    title: 'Trạng thái',
    dataIndex: 'state',
    width: 50,
    render: (value) => {
      return value === StateStatus.ACTIVE ? (
        <Tag color="processing">Active</Tag>
      ) : (
        <Tag color="warning">Inactive</Tag>
      );
    },
  },
];

export const metaFilterConfigFeature = () => {
  return {
    fields: [
      {
        key: 'icon_type_id',
        widget: 'select',
        options: Object.keys(ICON_TYPE_ID)
          // eslint-disable-next-line no-restricted-globals
          .filter((v) => isNaN(Number(v)))
          .map((key: any) => {
            return {
              label: key,
              value: ICON_TYPE_ID[key],
            };
          }),
        widgetProps: {
          placeholder: 'Enter keyword',
          allowClear: true,
          style: {
            minWidth: '310px',
          },
          defaultValue: ICON_TYPE_ID.ICON_ZONE_SHORTCUT,
        },
      },
    ],
  } as IMetaFormBuilder;
};
