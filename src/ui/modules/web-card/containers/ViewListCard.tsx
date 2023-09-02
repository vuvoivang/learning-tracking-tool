import React from 'react';

import { PlusCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

import DetailProblem from '../components/detail-problem/DetailProblem';
import useQuery from '~/src/hooks/useQuery';

function ViewArticleContainer() {
  const query = useQuery();

  const id: any = query.get('id');
  return (
    <div style={{ display: 'flex', flexDirection: 'column'}}> 
      <DetailProblem id={id}/>
    </div>
  );
}

export default ViewArticleContainer;
