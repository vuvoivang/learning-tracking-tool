import React from 'react';

import { PageHeader } from 'antd';

import useQuery from '~/src/hooks/useQuery';
import FormAddArticle from '~/src/ui/modules/web-article/components/form-add-article/FormAddProblem';

function CreateArticle() {
  const query = useQuery();
  const id: any = query.get('id');
  const renderTitle = () => {
    const preTitle = id ? 'Cập nhật ' : 'Tạo mới ';
    return `${preTitle}bài toán`;
  };
  return (
    <>
      <PageHeader className="" title={renderTitle()} ghost />
      <FormAddArticle id={id} />
    </>
  );
}

export default CreateArticle;
