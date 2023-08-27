import React from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { Button, Card, Space } from 'antd';
import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import BaseTable from '~/src/ui/shared/tables';
import useList from '~/src/hooks/useList';
import BaseFilter from '~/src/ui/shared/forms/baseFilter';
import { formatNumber } from '~/src/utils';
import TableToolbar from '~/src/ui/shared/toolbar';
import ROUTE from '~/src/constant/routes';
import { AppType, PRODUCT_TYPE_ID } from '~/src/constant';
import usePromoteProducts from '~/src/adapters/appService/promoteProduct.service';
import { PromoteProduct } from '~/src/domain/promote-product';
import { columnTable, metaFilterPromoteProduct } from './props';

function TableViewPromoteProducts() {
  const navigate = useNavigate();
  const { getPromoteProducts } = usePromoteProducts();

  const [list, { onPageChange, onAddItem, onEditItem, onFilterChange }] =
    useList({
      defaultFilters: {
        app_type: AppType.MOBILE,
        product_type_id: PRODUCT_TYPE_ID.CARD,
      },
      fetchFn: (args) => {
        return getPromoteProducts({
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
      render: (_: any, record: PromoteProduct) => {
        return (
          <Space size="small">
            <Link to={`/admin${ROUTE.PROMOTE_PRODUCT.UPDATE}/${record.id}`}>
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
        meta={metaFilterPromoteProduct()}
        onFilter={onFilterChange}
      /> */}

      <Card>
        <TableToolbar
          title={`Found ${formatNumber(
            list.items?.length || 0
          )} Promote product`}
        >
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => {
              navigate(`/admin${ROUTE.PROMOTE_PRODUCT.CREATE}`);
            }}
          >
            Tạo mới Promote product
          </Button>
        </TableToolbar>
        <BaseTable
          idKey="viewPromoteProduct"
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

export default TableViewPromoteProducts;
