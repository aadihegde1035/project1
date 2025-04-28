import React, { useRef, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface QuillEditorProps {
  value: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
}

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ list: 'ordered'}, { list: 'bullet' }],
    ['link'],
    ['clean']
  ],
};

const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike',
  'list', 'bullet',
  'link'
];

export default function QuillEditor({ value, onChange, readOnly = false }: QuillEditorProps) {
  const editorRef = useRef<ReactQuill>(null);

  useEffect(() => {
    if (editorRef.current) {
      const editor = editorRef.current.getEditor();
      editor.enable(!readOnly);
    }
  }, [readOnly]);

  return (
    <div className="h-full flex flex-col bg-white">
      <ReactQuill
        ref={editorRef}
        theme="snow"
        value={value || ''}
        onChange={onChange}
        modules={readOnly ? { toolbar: false } : modules}
        formats={formats}
        readOnly={readOnly}
        className="flex-1 flex flex-col"
      />
      <style>
        {`
          .quill {
            display: flex;
            flex-direction: column;
            height: 100%;
          }
          .ql-container {
            flex: 1;
            overflow: auto;
          }
          .ql-editor {
            min-height: 100%;
            height: 100%;
          }
          .ql-toolbar {
            border-top: none !important;
            border-left: none !important;
            border-right: none !important;
          }
          .ql-container {
            border: none !important;
          }
        `}
      </style>
    </div>
  );
}