import React, { useState, useEffect } from 'react';

import { EditOutlined, PlusCircleOutlined, EyeOutlined } from '@ant-design/icons';
import { Button, Card, Space } from 'antd';
import { createSearchParams, useNavigate } from 'react-router-dom';

import { useProblem } from '~/src/adapters/appService/problem.service';
import { useWebCategory } from '~/src/adapters/appService/webCategory.service';
import { Problem } from '~/src/domain/webArticle';
import { ProblemType, columnTableArticle, metaFilterProblem } from '~/src/ui/modules/web-article/components/table-view-article/props';
import Loading from '~/src/ui/shared/loading';
import BaseTable from '~/src/ui/shared/tables';
import useList from '~/src/hooks/useList';
import BaseFilter from '~/src/ui/shared/forms/baseFilter';
import { formatNumber } from '~/src/utils';
import TableToolbar from '~/src/ui/shared/toolbar';
import { useSelector } from 'react-redux';
import { authSelector } from '~/src/adapters/redux/selectors/auth';
import { ActivityType } from '~/src/constant/new';
function TableViewArticles() {
  const navigate = useNavigate();
  const { getAllProblems } = useProblem();
  const isAdmin = localStorage.getItem('isAdmin') == "true";


  const [list, { onPageChange, onAddItem, onEditItem, onFilterChange }] =
    useList({
      defaultFilters: {
        type: ProblemType.AVAILABLE,
      },
      fetchFn: (args) => getAllProblems(args),
      // fetchFn: (args) => Promise.resolve([]),
    });

  const columnTableArticleProps: any = [
    ...columnTableArticle,
    {
      title: 'Xem',
      dataIndex: 'action',
      width: 100,
      render: (_, record, index) => {
        if (record.type !== ActivityType.PROBLEM) return <></>;
        return (
          <Space size="small">
            <Button
              type="primary"
              ghost
              icon={<EyeOutlined />}
              style={{ color: '#0050b3' }}
              onClick={() =>
                navigate(
                  `/problem/detail-problem?${createSearchParams({
                    id: record.activityId,
                  }).toString()}`
                )
              }
            />
          </Space>
        );
      },
    },
    {
      title: 'Cập nhật',
      dataIndex: 'action',
      width: 100,
      render: (_, record, index) => {
        if (record.type === ActivityType.PENALTY) return <></>;
        return (
          <Space size="small">
            <Button
              type="primary"
              ghost
              icon={<EditOutlined />}
              style={{ color: '#0050b3' }}
              onClick={() =>
                navigate(
                  `/problem/update?${createSearchParams({
                    id: record.activityId,
                  }).toString()}`
                )
              }
            />
          </Space>
        );
      },
    },
  ];
  if (!isAdmin) {
    columnTableArticleProps.pop();
  }

  return (
    <>
      <BaseFilter
        loading={list.isLoading}
        meta={metaFilterProblem()}
        onFilter={onFilterChange}
      />
      <Card>
        <TableToolbar
          title={`Tìm thấy ${formatNumber(list.total || 0)} kết quả`}
        >
          {isAdmin && <Button
            type="primary"
            icon={<PlusCircleOutlined />}
            onClick={() => {
              navigate(`/problem/create`);
            }}
            style={{ width: 'fit-content', alignSelf: 'flex-end' }}
          >
            Tạo bài mới
          </Button>}
        </TableToolbar>
        <BaseTable
          idKey="viewProblems"
          columns={columnTableArticleProps}
          data={{ items: list.items, total: list?.total, pageSize: list.pageSize }}
          paginationProps={{
            pageSize: list.pageSize,
            showSizeChanger: true,
            pageSizeOptions: ['10', '20', '50'],
            position: ['bottomRight'],
            // hideOnSinglePage: true,
            showQuickJumper: true,
          }}
          onChange={onPageChange}
        />
      </Card>
    </>
  );
}

export default TableViewArticles;