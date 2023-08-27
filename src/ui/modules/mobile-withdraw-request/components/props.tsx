import { ColumnType } from 'antd/lib/table';
import { MAP_PRODUCT_TYPE_ID } from '~/src/constant';
import dayjs from 'dayjs';


export const columnTableWithdrawRequest: ColumnType<any>[] = [
  // {
  //   title: 'ID',
  //   dataIndex: 'id',
  //   width: 70,
  // },
  {
    title: 'Name',
    dataIndex: 'name',
    width: 120,
    // ellipsis: true,
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    width: 120,
    // ellipsis: true,
  },
  {
    title: 'User id',
    dataIndex: 'uid',
    width: 50,
    // ellipsis: true,
  },
  {
    title: 'Lead id',
    dataIndex: 'uuid',
    width: 200,
    // ellipsis: true,
  },
  {
    title: 'Partner',
    dataIndex: 'partner_name',
    width: 70,
    sorter: (a, b) => a.partner_name.localeCompare(b.partner_name),
  },
  {
    title: 'Product type',
    dataIndex: 'product_type_id',
    width: 30,
    render: (value: number) => {
      // @ts-ignore
      return <p>{MAP_PRODUCT_TYPE_ID?.[value] || ""}</p>;
    },
  },
  {
    title: 'Requested time',
    dataIndex: 'requested_withdraw_at',
    width: 120,
    sorter: (a, b) => a.requested_withdraw_at - b.requested_withdraw_at,
    render: (value) => {
      return <p>{dayjs(value).format('DD-MM-YYYY hh:mm:ss')}</p>;
    },
  },
  // {
  //   title: 'Product id',
  //   dataIndex: 'product_id',
  //   width: 100,
  // },
];
