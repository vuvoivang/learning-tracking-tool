import React from 'react';

import { PageHeader } from 'antd';
import { useParams } from 'react-router-dom';
import FormCreateUpdateConfigFeatures from '../components/FormCreateUpdateConfigFeatures/FormCreateUpdateConfigFeatures';

function CreateUpdateConfigFeatures() {
  const params = useParams();
  const { id, product_type_id: productTypeId } = params;
  const renderTitle = () => {
    const preTitle = id ? 'Cập nhật ' : 'Tạo mới ';
    return `${preTitle} config feature`;
  };
  return (
    <>
      <PageHeader className="site-page-header" title={renderTitle()} ghost />
      <FormCreateUpdateConfigFeatures id={id} type={productTypeId} />
    </>
  );
}

export default CreateUpdateConfigFeatures;
