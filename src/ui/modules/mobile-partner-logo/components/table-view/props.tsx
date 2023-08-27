/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';

import { ColumnType } from 'antd/lib/table';
import { Link } from 'react-router-dom';
import { Tag } from 'antd';
import { IMetaFormBuilder } from '~/src/ui/shared/forms/FormBuilder/FormBuilder';
import { LOGO_TYPE, PRODUCT_TYPE_ID, StateStatus } from '~/src/constant';

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
      return <span>{value}</span>;
    },
  },
  {
    title: 'Redirect URL',
    dataIndex: 'redirect_url',
    width: 150,
    render: (value) => {
      return <Link to={value}>{value}</Link>;
    },
  },
  {
    title: 'Index',
    dataIndex: 'logo_index',
    width: 70,
  },
  {
    title: 'Audiences',
    dataIndex: 'allowed_audience_ids',
    width: 150,
    render: (tags: string[]) => (
      <>
        {tags &&
          tags.map((tag) => (
            <Tag color="blue" key={tag}>
              {tag}
            </Tag>
          ))}
      </>
    ),
  },
  // {
  //   title: 'Unallowed Audiences',
  //   dataIndex: 'unallowed_audience_ids',
  //   width: 200,
  //   ellipsis: true,
  //   render: (tags: string[]) => (
  //     <>
  //       {tags &&
  //         tags.map((tag) => (
  //           <Tag color="blue" key={tag}>
  //             {tag}
  //           </Tag>
  //         ))}
  //     </>
  //   ),
  // },
  {
    title: 'Trạng thái',
    dataIndex: 'state',
    width: 100,
    render: (value) => {
      return value === StateStatus.ACTIVE ? (
        <Tag color="processing">Active</Tag>
      ) : (
        <Tag color="warning">Inactive</Tag>
      );
    },
  },
  {
    title: 'Product type',
    dataIndex: 'product_type_id',
    width: 100,
    render: (value) => {
      return PRODUCT_TYPE_ID[value];
    },
  },
];

export const metaFilterPartnerLogo = () => {
  return {
    fields: [
      {
        key: 'logo_type',
        widget: 'select',
        options: Object.keys(LOGO_TYPE)
          // eslint-disable-next-line no-restricted-globals
          .filter((v) => isNaN(Number(v)))
          .map((key: any) => {
            return {
              label: key,
              value: LOGO_TYPE[key],
            };
          }),
        widgetProps: {
          placeholder: 'Enter keyword',
          allowClear: true,
          style: {
            minWidth: '310px',
          },
          defaultValue: LOGO_TYPE.CARD_CREDIT,
        },
      },
    ],
  } as IMetaFormBuilder;
};
