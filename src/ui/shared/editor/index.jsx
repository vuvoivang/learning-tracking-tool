import React, { useEffect, useRef } from 'react';

import { CKEditor } from '@ckeditor/ckeditor5-react';

import { uploadAdapterPlugin } from './UploadAdapter';

import './style.less';
// eslint-disable-next-line import/order
import ClassicEditor from 'ckeditor5-custom-build';

const Editor = (props) => {
  const { value = '', lockId, readOnly = false, onChange } = props;
  const random = (Math.random() + 1).toString(36).substring(7);
  const _editor = useRef();

  return (
    <>
      <div id={`toolbar-container-${random}`} className="sticky-toolbar" />
      <CKEditor
        config={{
          mediaEmbed: {
            previewsInData: true,
          },
          allowedContent: true,
          extraAllowedContent: 'table(*)',
          image: {
            toolbar: [
              'imageStyle:inline',
              'imageStyle:wrapText',
              'imageStyle:breakText',
              '|',
              'toggleImageCaption',
              'imageTextAlternative',
            ],
          },
          autoParagraph: false,
          enterMode: CKEditor.ENTER_BR,
        }}
        editor={ClassicEditor}
        data={value}
        onReady={(editor) => {
          const toolbarElement = editor.ui.view.toolbar.element;
          if (readOnly) {
            editor.enableReadOnlyMode(lockId);
            toolbarElement.style.display = 'none';
          } else {
            toolbarElement.style.display = 'flex';
            const toolbarContainer = document.querySelector(
              `#toolbar-container-${random}`
            );
            toolbarContainer?.appendChild(toolbarElement);
            uploadAdapterPlugin(editor);
          }
          _editor.current = editor;
        }}
        onChange={(_, editor) => {
          const data = editor.getData();
          onChange(data);
        }}
        onError={(error, { willEditorRestart }) => {
          // If the editor is restarted, the toolbar element will be created once again.
          // The `onReady` callback will be called again and the new toolbar will be added.
          // This is why you need to remove the older toolbar.
          if (willEditorRestart) {
            _editor.ui.view.toolbar.element.remove();
          }
        }}
      />
    </>
  );
};

export default Editor;
