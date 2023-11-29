import React, { useState } from 'react';

import { InboxOutlined, LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Upload, message } from 'antd';
import { UploadChangeParam } from 'antd/lib/upload';

import { WidgetProps } from '~/src/ui/shared/forms/FormBuilder/FormBuilder';
import logger from '~/src/utils/logger';
import Video from '../video';
import { getCurrentToken } from '~/src/utils';

interface UploadButtonProps extends WidgetProps {
  api?: string;
}

const acceptedFileTypes = ['image/jpeg', 'image/png'];

const UploadButton: React.FC<UploadButtonProps> = (props) => {
  const { onChange, value = [], api, moreAcceptedFileTypes = [] } = props;
  const [loading, setLoading] = useState(false);

  const beforeUpload = (file: File) => {
    const isJpgOrPng = [...acceptedFileTypes, ...moreAcceptedFileTypes].includes(file.type);
    if (!isJpgOrPng) {
      message.error('Định dạng file upload không phù hợp');
    }
    return isJpgOrPng;
  };

  const handleChange = (info: UploadChangeParam) => {
    console.log(info.file)
    if (info.file.status === 'uploading') {
      setLoading(true);
      logger.debug('uploading!');
      return;
    }

    if (info.file.status === 'done') {
      setLoading(false);
      logger.debug('uploaded!', info.file);
      const urlFile: string = info.file.response?.url;
      if (urlFile) {
        const currentFile = info.fileList.find((file) => file.uid === info.file.uid);
        if (currentFile) currentFile.url = urlFile;
        logger.debug('urlFile | uploaded', urlFile);
        onChange(info.fileList);
      } else {
        message.error(
          `${info.file.name} file uploaded failed | error: ${info.file.response?.message || 'Không xác định'
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

    if (info.file.status === 'removed') {
      const removedFileUid: string = info.file.uid;
      if (removedFileUid) {
        onChange(info.fileList.filter((file) => file.uid !== removedFileUid));
      } else {
        message.error(
          `Xoá file thất bại`
        );
        return;
      }
    }
  };

  const headerConfig: any = {
    'Authorization': `Bearer ${getCurrentToken()}`
  };

  const handleUpload = async options => {
    const { onSuccess, onError, file } = options;

    const data = new FormData();
    data.append("ImageFile", file);
    const genericError = `Couldn't upload file: ${file.name}.`;

    // post image with fetch
    return fetch(api, {
      method: "POST",
      body: data,
      credentials: "same-origin",
      headers: {
        'Authorization': `Bearer ${getCurrentToken()}`
      }
      // headers: {
      //   "Content-Type": "application/json",
      // },
    })
      .then((response) => response.json())
      .then((res) => {
        onSuccess({
          ...file,
          url: res.imageUrl,
        });
      })
      .catch((error) => {
        console.log("error", error);
        Promise.reject(error?.message ?? genericError);
        onError({ message: error?.message });
      });
  }
  console.log(value)
  return (
    <Upload.Dragger
      accept="*"
      name="ImageFile"
      className="avatar-uploader"
      // action={api}
      // fileList={value}
      defaultFileList={value}
      customRequest={handleUpload}
      onChange={handleChange}
      withCredentials
      headers={headerConfig}
      method="post"
      multiple
      maxCount={20}
    >
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">Chọn hoặc kéo thả file</p>
      {loading && <LoadingOutlined />}

    </Upload.Dragger>
  );
};

export default UploadButton;
