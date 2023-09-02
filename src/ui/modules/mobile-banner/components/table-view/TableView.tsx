import React from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { Button, Card, Space } from 'antd';
import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import BaseTable from '~/src/ui/shared/tables';
import useList from '~/src/hooks/useList';
import useBanner from '~/src/adapters/appService/banner.service';
import {
  columnTable,
  metaFilterBanner,
} from '~/src/ui/modules/mobile-banner/components/table-view/props';
import BaseFilter from '~/src/ui/shared/forms/baseFilter';
import { formatNumber } from '~/src/utils';
import TableToolbar from '~/src/ui/shared/toolbar';
import ROUTE from '~/src/constant/routes';
import { AppType } from '~/src/constant';
import { BannerType } from '~/src/constant/banner';

function TableViewCards() {
  const navigate = useNavigate();
  const { getBanners } = useBanner();

  const [list, { onPageChange, onAddItem, onEditItem, onFilterChange }] =
    useList({
      defaultFilters: {
        banner_app_type: AppType.MOBILE,
        banner_type: BannerType.GAME,
      },
      fetchFn: (args) => {
        return getBanners({
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
      render: (vallue, record, index) => {
        return (
          <Space size="small">
            <Link
              to={`${ROUTE.BANNER.UPDATE}/${record.id}/${list.filters.banner_type}`}
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
      <BaseFilter
        loading={list.isLoading}
        meta={metaFilterBanner()}
        onFilter={onFilterChange}
      />
      <Card>
        <TableToolbar
          title={`Found ${formatNumber(list.items?.length || 0)} banner`}
        >
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => {
              navigate(`/banners/create`);
            }}
          >
            Tạo mới Banner
          </Button>
        </TableToolbar>
        <BaseTable
          idKey="viewCard"
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

export default TableViewCards;
