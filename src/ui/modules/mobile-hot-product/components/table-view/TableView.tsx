import React from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { Button, Card, Space } from 'antd';
import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import BaseTable from '~/src/ui/shared/tables';
import useList from '~/src/hooks/useList';
import { columnTable } from '~/src/ui/modules/mobile-hot-product/components/table-view/props';
import BaseFilter from '~/src/ui/shared/forms/baseFilter';
import { formatNumber } from '~/src/utils';
import TableToolbar from '~/src/ui/shared/toolbar';
import ROUTE from '~/src/constant/routes';
import { AppType, PRODUCT_TYPE_ID } from '~/src/constant';
import useHotProducts from '~/src/adapters/appService/hotProducts.service';
import { HotProduct } from '~/src/domain/hot-product';
// import { metaFilterHotProduct } from './props';

function TableViewHotProducts() {
  const navigate = useNavigate();
  const { getHotProducts } = useHotProducts();

  const [list, { onPageChange, onAddItem, onEditItem, onFilterChange }] =
    useList({
      fetchFn: (args) => {
        return getHotProducts({
          ...args,
        });
      },
    });

  const columnTableProps: any = [
    ...columnTable,
    {
      title: 'Actions',
      dataIndex: 'action',
      width: 100,
      render: (_: any, record: HotProduct) => {
        return (
          <Space size="small">
            <Link
              to={`/admin${ROUTE.HOT_PRODUCT.UPDATE}/${record.id}`}
            >
              <Button
                type="primary"
                ghost
                icon={<EditOutlined />}
                style={{ color: '#0050b3' }}
              />
            </Link>
          </Space>
        );
      },
    },
  ];

  return (
    <>
      {/* <BaseFilter
        loading={list.isLoading}
        meta={metaFilterHotProduct()}
        onFilter={onFilterChange}
      /> */}

      <Card>
        <TableToolbar
          title={`Found ${formatNumber(list.items?.length || 0)} Hot product`}
        >
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => {
              navigate(`/admin${ROUTE.HOT_PRODUCT.CREATE}`);
            }}
          >
            Tạo mới Hot product
          </Button>
        </TableToolbar>
        <BaseTable
          idKey="viewHotProduct"
          columns={columnTableProps}
          data={{ items: list?.items }}
          paginationProps={{
            defaultPageSize: 10,
            total: list?.items?.length,
            showSizeChanger: true,
            pageSizeOptions: ['5', '10', '20', '50'],
            position: ['bottomRight'],
          }}
        />
      </Card>
    </>
  );
}

export default TableViewHotProducts;
