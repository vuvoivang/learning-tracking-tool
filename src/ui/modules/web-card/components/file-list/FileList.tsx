// FileList.js
import React, { useRef } from 'react';
import { FaFile, FaFileImage, FaFilePdf, FaFileWord, FaFileExcel, FaDownload } from 'react-icons/fa';
import { useHover } from '~/src/hooks/useHover';

const FileList = ({ files }) => {
  return (
    <ul className="file-list">
      {files.map((file) => {
        const hoverRef = useRef(null);
        const isHover = useHover(hoverRef);
        return <li key={file.url} ref={hoverRef} className="file-item" onClick={() => window.open(file.url, '_blank')
      }>
          {getFileIcon(file)}
          <div>{file.name}</div>
          {isHover && <div className='download'>
            <FaDownload size={16} color='#1890ff' />
          </div>}
        </li>;
      })}
    </ul>
  );
};

const getFileIcon = (file) => {
  const fileExtension = file.name.split('.').pop().toLowerCase();

  // Add more file type icons as needed
  if (fileExtension === 'pdf') {
    return <FaFilePdf />;
  } else if (['jpg', 'jpeg', 'png', 'gif'].includes(fileExtension)) {
    return <FaFileImage />;
  } else if (['doc', 'docx'].includes(fileExtension)) {
    return <FaFileWord />;
  } else if (['xls', 'xlsx'].includes(fileExtension)) {
    return <FaFileExcel />;
  } else {
    return <FaFile />;
  }
};

export default FileList;
