import React from 'react';

import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

import TableViewCards from '~/src/ui/modules/web-card/components/table-view-card/TableViewCard';

function ViewListCardContainer() {
  const navigate = useNavigate();

  return (
    <div>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={() => {
          navigate(`/admin/web-cards/create`);
        }}
      >
        Tạo mới Card
      </Button>
      <TableViewCards />
    </div>
  );
}

export default ViewListCardContainer;
