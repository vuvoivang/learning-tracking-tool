import React from 'react';

import { ColumnType } from 'antd/lib/table';
import { formatNumber } from '~/src/utils';
import Question from '~/src/ui/assets/icons/question.svg';
import Penalty from '~/src/ui/assets/icons/penalty.svg';
import Transaction from '~/src/ui/assets/icons/transaction.svg';

import { ActivityType } from '~/src/constant/new';

const AcTypeData = {
  [ActivityType.PROBLEM]: {
    icon: Question,
    color: 'blue',
  },
  [ActivityType.PENALTY]: {
    icon: Penalty,
    color: 'red',
  },
  [ActivityType.TRANSACTION]: {
    icon: Transaction,
    color: 'green',
  }
}

export const columnTableArticle: ColumnType<any>[] = [
  {
    title: 'Tên',
    dataIndex: ['activityName', 'type'],
    width: 280,
    ellipsis: true,
    render: (value, record) => {
      return <div className='name-zone'>
        <img width="20" height="20" src={AcTypeData[record.type as ActivityType]?.icon} className={AcTypeData[record.type as ActivityType]?.color} />
        <p>{record.activityName}</p>
      </div>;
    },
  },
  {
    title: 'Giá tiền',
    dataIndex: 'price',
    width: 180,
    render: (value) => {
      return <p>{formatNumber(value)}đ</p>;
    },
  },
  {
    title: 'Ngày',
    dataIndex: 'date',
    width: 120,
  },
];

export enum ProblemType {
  FINISHED,
  AVAILABLE,
  LEARNING
}

const mappingProblemType = {
  [ProblemType.FINISHED]: "Bài đã giải",
  [ProblemType.AVAILABLE]: "Bài chưa giải",
  [ProblemType.LEARNING]: "Lịch sử học tập"
}

export const metaFilterProblem = () => {
  return {
    fields: [
      {
        key: 'type',
        widget: 'select',
        options: Object.keys(ProblemType)
          // eslint-disable-next-line no-restricted-globals
          .filter((v) => !isNaN(Number(v)))
          .map((key: any) => {
            return {
              label: mappingProblemType[key],
              value: key,
            };
          }),
        widgetProps: {
          placeholder: 'Enter type problem',
          allowClear: false,
          style: {
            minWidth: '310px',
          },
          defaultValue: mappingProblemType[ProblemType.AVAILABLE],
        },
      },
    ],
  };
};
