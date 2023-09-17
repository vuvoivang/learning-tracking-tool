import React, { useState } from 'react';

import { PaginationProps, Table } from 'antd';
import { TableProps } from 'antd/lib/table';
import { Container, Draggable } from 'react-smooth-dnd';

import SkeletonTable from './skeleton';
import { TablePaginationConfig } from 'antd/es/table';
import type { FilterValue, SorterResult } from 'antd/es/table/interface';

type DragContainerProps = {
  children?: any;
  handleOnDrop: (...args) => void;
  className: string;
};
const DragContainer: React.FC<DragContainerProps> = (props) => {
  const { handleOnDrop, children, className } = props;
  return (
    <Container
      onDrop={handleOnDrop}
      dragClass="row-ghost"
      dropClass="row-ghost-drop"
      render={(ref) => {
        return (
          <tbody ref={ref} className={className}>
            {children}
          </tbody>
        );
      }}
    />
  );
};

function DragableBodyRow(props) {
  return (
    <Draggable
      render={() => {
        return <tr style={{ cursor: 'move' }} {...props} />;
      }}
    />
  );
}

export interface BaseTableDataClientPaging<T> {
  itemsClient: T[];
  isLoadingClient?: boolean;
  isFilterChangedClient?: boolean;
}

export interface BaseTableData<T> {
  items: T[];
  total?: number;
  currentPage?: number;
  isFetched?: boolean;
  pageSize?: any;
  isLoading?: boolean;
  isFilterChanged?: boolean;
}

export interface BaseTableProps<T> extends TableProps<T> {
  idKey: string | string[];
  data?: BaseTableData<T>;
  enableID?: boolean;
  compact?: boolean;
  enableSort?: boolean;
  onPageChange?: (page: PaginationProps) => void;
  onSortChange?: (sortParams: any) => void;

  handleOnDrop?: (...args) => void;
  disablePagination?: boolean;
  paginationProps?: any;
  clientPaging?: boolean;
  customPageSize?: number;
  minHeight?: 240 | 400 | 460 | 500 | 640 | '65vh' | '70vh' | null;
}

function BaseTable<T extends object>(props: BaseTableProps<T>) {
  const {
    data: {
      items,
      total,
      currentPage,
      pageSize = 20,
      isLoading,
      isFetched = true,
      isFilterChanged,
    } = {},
    idKey = 'id',
    columns,
    compact,
    enableSort = false,
    enableID = false,
    onPageChange,
    onSortChange,
    minHeight,
    className = '',
    handleOnDrop,
    disablePagination,
    paginationProps = {},
    ...rest
  } = props;

  const [pagination, setPagination] = useState({
    defaultCurrent: 1,
    defaultPageSize: pageSize,
    showSizeChanger: false,
  });

  const [sort, setSort] = useState({
    sortField: '',
    sortOrder: false,
  });

  const onTableChange = (pageParams: TablePaginationConfig,
    filters: Record<string, FilterValue>,
    sorter: SorterResult<any>,) => {
    console.log(pageParams, filters, sorter);
    setPagination(pageParams);
    onPageChange && onPageChange(pageParams);
    const { field, order } = sorter;
    const sortParams = {
      sortField: field as string,
      sortOrder: order === 'ascend' ? true : false,
    };
    if(sort.sortField !== sortParams.sortField || sort.sortOrder !== sortParams.sortOrder) {
      setSort(sortParams);
      onSortChange && onSortChange(sortParams);
    }
    

    // `dataSource` is useless since `pageSize` changed
    // if (pageParams.pageSize !== pagination?.pageSize) {
    //   setData([]);
    // }
  };

  if (!disablePagination) {
    rest.pagination = {
      ...pagination,
      ...paginationProps,
      current: currentPage,
      position: ['bottomCenter'],
      // showSizeChanger: true,
      // showTotal: (total, range) => `${range[0]}-${range[1]} trên ${total} mục`,
      total,
    };
  } else {
    rest.pagination = false;
  }


  if (enableID && !columns?.find((i) => i.title === 'STT')) {
    columns?.unshift({
      title: 'STT',
      dataIndex: 'id',
      align: 'center',
      render: (_text: any, _record: any, index: number) => index + 1,
      width: 64,
    });
  }

  if (enableSort) {
    rest.components = {
      body: {
        wrapper: (props) => (
          <DragContainer handleOnDrop={handleOnDrop} {...props} />
        ),
        row: DragableBodyRow,
      },
    };
  }

  if (isLoading && !isFetched)
    return <SkeletonTable {...rest} rowCount={10} columns={columns} />;
  return (
    <Table
      {...rest}
      className={`${className} ${minHeight ? `min_height_${minHeight}` : ''}`}
      // locale={{
      //     emptyText: args => <EmptyContent {...args} isFilterChanged={isFilterChanged} />,
      // }}
      size={compact ? 'small' : undefined}
      columns={columns}
      onChange={onTableChange}
      dataSource={items}
      loading={isLoading}
      rowKey={(record) =>
        Array.isArray(idKey)
          ? idKey.reduce((acc, current) => `${acc}-${record[current]}`, '')
          : record[idKey]
      }
    />
  );
}

export default BaseTable;
