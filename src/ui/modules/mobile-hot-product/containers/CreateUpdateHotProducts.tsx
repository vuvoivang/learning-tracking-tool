import React from 'react';

import { PageHeader } from 'antd';
import { useParams } from 'react-router-dom';
import FormCreateUpdateHotProducts from '../components/FormCreateUpdateHotProducts/FormCreateUpdateHotProducts';

function CreateUpdateHotProducts() {
  const params = useParams();
  const { id, product_type_id: productTypeId } = params;
  const renderTitle = () => {
    const preTitle = id ? 'Cập nhật ' : 'Tạo mới ';
    return `${preTitle} hot product`;
  };
  return (
    <>
      <PageHeader className="site-page-header" title={renderTitle()} ghost />
      <FormCreateUpdateHotProducts id={id} type={productTypeId} />
    </>
  );
}

export default CreateUpdateHotProducts;
