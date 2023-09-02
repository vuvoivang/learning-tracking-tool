import React from 'react';

import { ColumnType } from 'antd/lib/table';
import ROUTE from '~/src/constant/routes';
import { Link } from 'react-router-dom';

export const columnTable: ColumnType<any>[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 70,
  },
  {
    title: 'Tên thẻ',
    dataIndex: 'name',
    width: 280,
    ellipsis: true,
    render: (value, record) => {
      return (
        <Link
          to={`${ROUTE.CARD.UPDATE}/${record.id}?app_type=website`}
          relative="path"
        >
          {value}
        </Link>
      );
    },
  },
  // {
  //   title: 'Category',
  //   dataIndex: 'category_name',
  //   width: 140,
  //   ellipsis: true,
  // },
  // {
  //   title: 'Index',
  //   dataIndex: 'index',
  //   width: 70,
  // },
  // {
  //   title: 'State',
  //   dataIndex: 'state',
  //   width: 100,
    // render: (value) => {
    //   return <p>{value === StateStatus.ACTIVE ? 'Active' : 'Inactive'}</p>;
    // },
  // },
  // {
  //   title: 'Created At',
  //   dataIndex: 'created_at',
  //   width: 160,
  //   render: (value) => {
  //     return <p>{dayjs(value).format('DD-MM-YYYY hh:mm:ss')}</p>;
  //   },
  // },
  // {
  //   title: 'Updated At',
  //   dataIndex: 'updated_at',
  //   width: 160,
    // render: (value) => {
    //   return <p>{dayjs(value).format('DD-MM-YYYY hh:mm:ss')}</p>;
    // },
  // },
];
