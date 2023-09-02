import React from 'react';

import { EditOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { createSearchParams, useNavigate } from 'react-router-dom';

import BaseTable from '~/src/ui/shared/tables';
import { useCard } from '~/src/adapters/appService/card.service';
import useList from '~/src/hooks/useList';
import { columnTable } from '~/src/ui/modules/web-card/components/table-view-card/props';

function TableViewCards() {
  const navigate = useNavigate();
  const { getCards } = useCard();

  const [list, { onPageChange, onAddItem, onEditItem, onFilterChange }] =
    useList({
      fetchFn: (args) => getCards(args),
      // fetchFn: (args) => Promise.resolve([]),
    });

  const columnTableProps: any = [
    ...columnTable,
    // {
    //   title: 'Actions',
    //   dataIndex: 'action',
    //   width: 100,
    //   render: (_, record, index) => {
    //     return (
    //       <Space size="small">
    //         <Button
    //           type="primary"
    //           ghost
    //           icon={<EditOutlined />}
    //           style={{ color: '#0050b3' }}
    //           onClick={() =>
    //             navigate(
    //               `/problem/update?${createSearchParams({
    //                 id: record.id,
    //               }).toString()}`
    //             )
    //           }
    //         />
    //       </Space>
    //     );
    //   },
    // },
  ];

  return (
    <>
      <h6 className="cms-layout-title-medium mt-4">
        Tìm thấy {list?.items.length} kết quả
      </h6>
      {/* eslint-disable-next-line react/jsx-no-undef */}
      <BaseTable
        idKey="viewCard"
        columns={columnTableProps}
        data={{ items : list?.items}}
        paginationProps={{
          defaultPageSize: 10,
          total: list?.items?.length,
          showSizeChanger: true,
          pageSizeOptions: ['5', '10', '20', '50'],
          position: ['bottomRight'],
        }}
      />
    </>
  );
}

export default TableViewCards;
