import Tag from 'antd/lib/tag';
import { TweenOneGroup } from 'rc-tween-one';
import { PlusOutlined } from '@ant-design/icons';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Input from 'antd/lib/input';

// eslint-disable-next-line react/prop-types
export function InputArrayTag({ ...props }) {
  const [tags, setTags] = useState<string[]>([]);
  const [inputVisible, setInputVisible] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const [isVisibleAddNewTag, setIsVisibleAddNewTag] = useState<boolean>(true);

  const handleClose = (removedTag) => {
    const tempTags = tags.filter((tag) => tag !== removedTag);
    setTags(tempTags);
    props.onChange(tempTags);
  };

  const showInput = () => {
    setInputVisible(true);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const initialValue =
      props.initialValue && props.initialValue?.length > 0
        ? props.initialValue
        : [];
    const value =
      props.value && props.value?.length > 0 ? props.value : initialValue;
    setTags(value);
  }, [props.value, props.initialValue]);

  const handleInputConfirm = () => {
    if (inputValue && tags.indexOf(inputValue) === -1) {
      setTags([...tags, inputValue]);
      props.onChange([...tags, inputValue]);
    }
    setInputVisible(false);
    setInputValue('');
  };

  const forMap = (tag) => {
    const tagElem = (
      <Tag
        closable
        onClose={(e) => {
          e.preventDefault();
          console.log('voday');
          handleClose(tag);
        }}
      >
        {tag}
      </Tag>
    );
    return (
      <span key={tag} style={{ display: 'inline-block' }}>
        {tagElem}
      </span>
    );
  };
  const input = useRef<any>();
  useLayoutEffect(() => {
    inputVisible && input.current.focus();
  });

  return (
    <>
      {tags?.length > 0 && (
        <div style={{ marginBottom: '10px' }}>
          <TweenOneGroup
            enter={{
              scale: 0.8,
              opacity: 0,
              type: 'from',
              duration: 100,
            }}
            onEnd={(e: any) => {
              if (e.type === 'appear' || e.type === 'enter') {
                e.target.style = 'display: inline-block';
              }
            }}
            leave={{
              opacity: 0,
              width: 0,
              scale: 0,
              duration: 200,
            }}
            appear={false}
          >
            {tags.map(forMap)}
          </TweenOneGroup>
        </div>
      )}
      {isVisibleAddNewTag && (
        <div>
          {inputVisible && (
            <Input
              ref={input}
              type="text"
              size="small"
              style={{ width: 78 }}
              value={inputValue}
              onChange={handleInputChange}
              onBlur={handleInputConfirm}
              onPressEnter={handleInputConfirm}
            />
          )}
          {!inputVisible && (
            <Tag onClick={showInput} className="site-tag-plus">
              <PlusOutlined /> Thêm giá trị
            </Tag>
          )}
        </div>
      )}
    </>
  );
}

export default InputArrayTag;
