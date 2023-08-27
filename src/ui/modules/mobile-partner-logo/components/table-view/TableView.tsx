import React from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { Button, Card, Space } from 'antd';
import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import BaseTable from '~/src/ui/shared/tables';
import useList from '~/src/hooks/useList';
import { columnTable } from '~/src/ui/modules/mobile-partner-logo/components/table-view/props';
import BaseFilter from '~/src/ui/shared/forms/baseFilter';
import { formatNumber } from '~/src/utils';
import TableToolbar from '~/src/ui/shared/toolbar';
import ROUTE from '~/src/constant/routes';
import { AppType, LOGO_TYPE } from '~/src/constant';
import usePartnerLogos from '~/src/adapters/appService/partnerLogos.service';
import { PartnerLogo } from '~/src/domain/partner-logo';
import { metaFilterPartnerLogo } from './props';

function TableViewPartnerLogos() {
  const navigate = useNavigate();
  const { getPartnerLogos } = usePartnerLogos();

  const [list, { onPageChange, onAddItem, onEditItem, onFilterChange }] =
    useList({
      defaultFilters: {
        logo_type: LOGO_TYPE.CARD_CREDIT,
      },
      fetchFn: (args) => {
        return getPartnerLogos({
          ...args,
          app_type: AppType.MOBILE,
        });
      },
    });

  const columnTableProps: any = [
    ...columnTable,
    {
      title: 'Actions',
      dataIndex: 'action',
      width: 100,
      render: (_: any, record: PartnerLogo) => {
        return (
          <Space size="small">
            <Link to={`/admin${ROUTE.PARTNER_LOGO.UPDATE}/${record.id}`}>
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
        meta={metaFilterPartnerLogo()}
        onFilter={onFilterChange}
      />

      <Card>
        <TableToolbar
          title={`Found ${formatNumber(list.items?.length || 0)} Partner logo`}
        >
          <Link to={`/admin${ROUTE.PARTNER_LOGO.CREATE}`}>
            <Button type="primary" icon={<PlusOutlined />}>
              Tạo mới Partner logo
            </Button>
          </Link>
        </TableToolbar>
        <BaseTable
          idKey="viewPartnerLogo"
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

export default TableViewPartnerLogos;
