import React from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { Button, Card, Space } from 'antd';
import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import BaseTable from '~/src/ui/shared/tables';
import useList from '~/src/hooks/useList';
import { columnTable } from '~/src/ui/modules/mobile-config-feature/components/table-view/props';
import BaseFilter from '~/src/ui/shared/forms/baseFilter';
import { formatNumber } from '~/src/utils';
import TableToolbar from '~/src/ui/shared/toolbar';
import ROUTE from '~/src/constant/routes';
import { AppType, ICON_TYPE_ID, PRODUCT_TYPE_ID } from '~/src/constant';
import useConfigFeatures from '~/src/adapters/appService/configFeatures.service';
import { ConfigFeature } from '~/src/domain/config-feature';
import { metaFilterConfigFeature } from './props';

function TableViewConfigFeatures() {
  const navigate = useNavigate();
  const { getConfigFeatures } = useConfigFeatures();

  const [list, { onPageChange, onAddItem, onEditItem, onFilterChange }] =
    useList({
      defaultFilters: {
        icon_type_id: ICON_TYPE_ID.ICON_ZONE_SHORTCUT,
      },
      fetchFn: (args) => {
        return getConfigFeatures({
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
      render: (_: any, record: ConfigFeature) => {
        return (
          <Space size="small">
            <Link
              to={`/admin${ROUTE.CONFIG_FEATURE.UPDATE}/${record.id}`}
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
        meta={metaFilterConfigFeature()}
        onFilter={onFilterChange}
      />

      <Card>
        <TableToolbar
          title={`Found ${formatNumber(
            list.items?.length || 0
          )} Config feature`}
        >
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => {
              navigate(`/admin${ROUTE.CONFIG_FEATURE.CREATE}`);
            }}
          >
            Tạo mới Config feature
          </Button>
        </TableToolbar>
        <BaseTable
          idKey="viewConfigFeature"
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

export default TableViewConfigFeatures;
