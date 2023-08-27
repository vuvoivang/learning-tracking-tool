import React from 'react';

import { PageHeader } from 'antd';
import { useParams } from 'react-router-dom';
import FormCreateUpdatePromoteProduct from '../components/FormCreateUpdatePromoteProducts/FormCreateUpdatePromoteProducts';

function CreateUpdatePromoteProduct() {
  const params = useParams();
  const { id } = params;
  const renderTitle = () => {
    const preTitle = id ? 'Cập nhật ' : 'Tạo mới ';
    return `${preTitle} promote product`;
  };
  return (
    <>
      <PageHeader className="site-page-header" title={renderTitle()} ghost />
      <FormCreateUpdatePromoteProduct id={id} />
    </>
  );
}

export default CreateUpdatePromoteProduct;
