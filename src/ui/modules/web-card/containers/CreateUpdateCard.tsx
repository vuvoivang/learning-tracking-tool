import React from 'react';

import { PageHeader } from 'antd';
import { useParams } from 'react-router-dom';
import FormCreateUpdateCard from '~/src/ui/modules/web-card/components/FormCreateUpdateCard/FormCreateUpdateCard';

const CreateJobPost = () => {
  const params = useParams();
  const { id } = params;
  const renderTitle = () => {
    const preTitle = id ? 'Cập nhật ' : 'Tạo mới ';
    return `${preTitle} thẻ`;
  };
  return (
    <>
      <PageHeader className="site-page-header" title={renderTitle()} ghost />
      <FormCreateUpdateCard id={id} />
    </>
  );
};

export default CreateJobPost;
