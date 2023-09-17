import React, { useCallback, useEffect, useState } from 'react';

import { SearchOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';

import FormBuilder from './FormBuilder';
import logger from '~/src/utils/logger';
import { useDebounce } from '~/src/hooks/useDebounce';


type BaseSearchProps = {
  loading: boolean;
  onFilter: (...args) => void;
  normalizeFn?: (...args) => void;
};

const BaseSearch: React.FC<BaseSearchProps> = (props) => {
  const { loading, onFilter, normalizeFn } = props;
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce<string>(value, 500)


  const handleChange = (e) => {
    const currValue = e.target.value;
    setValue(currValue);
  }
  const formItemLayout = { wrapperCol: { span: 8 } }


  useEffect(() => {
    onFilter({
      searchTerm: debouncedValue,
    })
  }, [debouncedValue])

  return (
    <Form {...formItemLayout}>
      <Form.Item>
        <Input
          addonBefore={<SearchOutlined />}
          placeholder="Tìm theo tên"
          value={value}
          onChange={handleChange}
        />
      </Form.Item>
    </Form>

  );
};

export default BaseSearch;
