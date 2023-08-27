import React from 'react';

import { Image, Tag } from 'antd';

import { ColumnType } from 'antd/lib/table';
import { IMetaFormBuilder } from '~/src/ui/shared/forms/FormBuilder/FormBuilder';
import { BannerType } from '~/src/constant/banner';
import { Link } from 'react-router-dom';
import { StateStatus } from '~/src/constant';
import Video from '~/src/ui/shared/video';

export const columnTable: ColumnType<any>[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 70,
  },
  {
    title: 'Image',
    dataIndex: 'image_url',
    width: 280,
    ellipsis: true,
    render: (value) => {
      const extension = value.split('.').pop();
      if(extension === "mp4") return <Video src={value} height={180} width="100%" />;
      else return <Image src={value} />; 
    },
  },
  {
    title: 'Redirect URL',
    dataIndex: 'redirect_url',
    width: 140,
    ellipsis: true,
    render: (value) => {
      return <Link to={value}>{value}</Link>;
    },
  },
  {
    title: 'Index',
    dataIndex: 'banner_index',
    width: 50,
    ellipsis: true,
  },
  {
    title: 'Audiences',
    dataIndex: 'show_by_audiences',
    width: 200,
    ellipsis: true,
    render: (tags: string[]) => (
      <>
        {tags &&
          tags.map((tag) => (
            <Tag color="blue" key={tag}>
              {tag}
            </Tag>
          ))}
      </>
    ),
  },
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

export const metaFilterBanner = () => {
  return {
    fields: [
      {
        key: 'banner_type',
        widget: 'select',
        options: Object.keys(BannerType)
          // eslint-disable-next-line no-restricted-globals
          .filter((v) => isNaN(Number(v)))
          .map((key: any) => {
            return {
              label: key,
              value: BannerType[key],
            };
          }),
        widgetProps: {
          placeholder: 'Enter keyword',
          allowClear: true,
          style: {
            minWidth: '310px',
          },
          defaultValue: BannerType.GAME,
        },
      },
    ],
  } as IMetaFormBuilder;
};
