import React from 'react';

import { PageHeader } from 'antd';
import { useParams } from 'react-router-dom';
import FormCreateUpdateBanner from '~/src/ui/modules/mobile-banner/components/FormCreateUpdateBanner/FormCreateUpdateBanner';

const CreateJobPost = () => {
  const params = useParams();
  const { id, type } = params;
  console.log(params);
  const renderTitle = () => {
    const preTitle = id ? 'Cập nhật ' : 'Tạo mới ';
    return `${preTitle} banner`;
  };
  return (
    <>
      <PageHeader className="site-page-header" title={renderTitle()} ghost />
      <FormCreateUpdateBanner id={id} type={type} />
    </>
  );
};

export default CreateJobPost;
