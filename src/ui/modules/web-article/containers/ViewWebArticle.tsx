import React from 'react';

import { PlusCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

import TableViewArticles from '~/src/ui/modules/web-article/components/table-view-article/TableViewProblem';

function ViewArticleContainer() {

  return (
    <div style={{ display: 'flex', flexDirection: 'column'}}> 
      <TableViewArticles />
    </div>
  );
}

export default ViewArticleContainer;
