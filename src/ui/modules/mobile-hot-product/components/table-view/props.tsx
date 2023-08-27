/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';

import { Image, Tag } from 'antd';

import { ColumnType } from 'antd/lib/table';
import { Link } from 'react-router-dom';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { IMetaFormBuilder } from '~/src/ui/shared/forms/FormBuilder/FormBuilder';
import { PRODUCT_TYPE_ID, StateStatus } from '~/src/constant';

export const columnTable: ColumnType<any>[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 70,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    width: 100,
  },
  {
    title: 'Image',
    dataIndex: 'image_url',
    width: 120,
    ellipsis: true,
    render: (value) => {
      return <Image src={value} />;
    },
  },
  {
    title: 'Redirect URL',
    dataIndex: 'redirect_url',
    width: 100,
    render: (value) => {
      return <Link to={value}>{value}</Link>;
    },
  },
  {
    title: 'Index',
    dataIndex: 'hot_index',
    width: 70,
  },
  // {
  //   title: 'Allowed Audiences',
  //   dataIndex: 'allowed_audience_ids',
  //   width: 120,
  //   ellipsis: true,
  //   render: (tags: string[]) => (
  //     <>
  //       {tags &&
  //         tags.map((tag) => (
  //           <Tag color="blue" key={tag}>
  //             {tag}
  //           </Tag>
  //         ))}
  //     </>
  //   ),
  // },
  // {
  //   title: 'Unallowed Audiences',
  //   dataIndex: 'unallowed_audience_ids',
  //   width: 120,
  //   ellipsis: true,
  //   render: (tags: string[]) => (
  //     <>
  //       {tags &&
  //         tags.map((tag) => (
  //           <Tag color="blue" key={tag}>
  //             {tag}
  //           </Tag>
  //         ))}
  //     </>
  //   ),
  // },
  {
    title: 'Trạng thái',
    dataIndex: 'state',
    width: 50,
    render: (value) => {
      return value === StateStatus.ACTIVE ? (
        <Tag color="processing">Active</Tag>
      ) : (
        <Tag color="warning">Inactive</Tag>
      );
    },
  },
];

// export const metaFilterHotProduct = () => {
//   return {
//     fields: [
//       {
//         key: 'product_type_id',
//         widget: 'select',
//         options: Object.keys(PRODUCT_TYPE_ID)
//           // eslint-disable-next-line no-restricted-globals
//           .filter((v) => isNaN(Number(v)))
//           .map((key: any) => {
//             return {
//               label: key,
//               value: PRODUCT_TYPE_ID[key],
//             };
//           }),
//         widgetProps: {
//           placeholder: 'Enter keyword',
//           allowClear: true,
//           style: {
//             minWidth: '310px',
//           },
//           defaultValue: PRODUCT_TYPE_ID.CARD,
//         },
//       },
//     ],
//   } as IMetaFormBuilder;
// };
