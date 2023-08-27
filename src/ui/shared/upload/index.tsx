import React, { useState } from 'react';

import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Upload, message } from 'antd';
import { UploadChangeParam } from 'antd/lib/upload';

import { WidgetProps } from '~/src/ui/shared/forms/FormBuilder/FormBuilder';
import logger from '~/src/utils/logger';
import Video from '../video';

interface UploadButtonProps extends WidgetProps {
  api?: string;
}

const acceptedFileTypes = ['image/jpeg', 'image/png'];

const UploadButton: React.FC<UploadButtonProps> = (props) => {
  const { onChange, value, api, moreAcceptedFileTypes = [], videoProps = {} } = props;
  const [loading, setLoading] = useState(false);

  const beforeUpload = (file: File) => {
    const isJpgOrPng = [...acceptedFileTypes, ...moreAcceptedFileTypes].includes(file.type);
    if (!isJpgOrPng) {
      message.error('Định dạng file upload không phù hợp');
    }
    return isJpgOrPng;
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const handleChange = (info: UploadChangeParam) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      logger.debug('uploading!');
      return;
    }

    if (info.file.status === 'done') {
      setLoading(false);
      logger.debug('uploaded!', info.file);

      const urlFile: string = info.file.response?.data?.url;

      if (urlFile) {
        logger.debug('urlFile | uploaded', urlFile);
        onChange(urlFile);
      } else {
        message.error(
          `${info.file.name} file uploaded failed | error: ${info.file.response?.data?.detail || 'Không xác định'
          }`
        );
        return;
      }
    }

    if (info.file.status === 'error') {
      logger.debug('error', info.file);
      setLoading(false);
      message.error(`${info.file.name} file upload failed`);
    }
  };

  const headerConfig: any = {};

  const fileExtension = value?.split('.')?.pop();
  return (
    <Upload
      accept="image/*, video/*"
      name="file"
      listType="picture-card"
      className="avatar-uploader"
      showUploadList={false}
      action={api}
      beforeUpload={beforeUpload}
      onChange={handleChange}
      withCredentials
      headers={headerConfig}
      method="post"
    >
      {value ?
        fileExtension === "mp4" ?
          (
            <Video src={value} height={videoProps.height} width={videoProps.width} />
          ) : (
            <img src={value} alt="avatar" style={{ width: '100%' }} />
          ) : (
          uploadButton
        )}
    </Upload>
  );
};

export default UploadButton;
