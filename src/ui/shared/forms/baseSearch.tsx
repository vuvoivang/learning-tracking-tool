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
  defaultValue?: string;
};

const BaseSearch: React.FC<BaseSearchProps> = (props) => {
  const { loading, onFilter, normalizeFn, defaultValue = '' } = props;
  const [value, setValue] = useState(defaultValue);
  const debouncedValue = useDebounce<string>(value, 500)


  const handleChange = (e) => {
    const currValue = e.target.value;
    setValue(currValue);
  }
  const formItemLayout = { wrapperCol: { span: 24 } }


  useEffect(() => {
    onFilter({
      searchTerm: debouncedValue,
    })
  }, [debouncedValue])

  return (
    <Form layout="inline" {...formItemLayout}>
      <Form.Item>
        <Input
          className='search-input'
          addonBefore={<SearchOutlined style={{ fontSize: '16px', color: '#ffff'}}/>}
          placeholder="Tìm theo tên"
          value={value}
          onChange={handleChange}
          style={{ width: 350 }}
          allowClear
          bordered
        />
      </Form.Item>
    </Form>

  );
};

export default BaseSearch;
