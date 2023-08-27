import React from 'react';

import { PageHeader } from 'antd';
import { useParams } from 'react-router-dom';
import FormCreateUpdatePartnerLogos from '../components/FormCreateUpdatePartnerLogos/FormCreateUpdatePartnerLogos';

function CreateUpdatePartnerLogos() {
  const params = useParams();
  const { id } = params;
  const renderTitle = () => {
    const preTitle = id ? 'Cập nhật ' : 'Tạo mới ';
    return `${preTitle} partner logo`;
  };
  return (
    <>
      <PageHeader className="site-page-header" title={renderTitle()} ghost />
      <FormCreateUpdatePartnerLogos id={id} />
    </>
  );
}

export default CreateUpdatePartnerLogos;
