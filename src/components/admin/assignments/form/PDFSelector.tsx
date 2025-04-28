import React from 'react';
import FormField from './FormField';

interface PDFSelectorProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export default function PDFSelector({ value, onChange, error }: PDFSelectorProps) {
  return (
    <FormField label="PDF URL" error={error}>
      <input
        type="url"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter the URL of the PDF file"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
        required
      />
      <p className="mt-1 text-sm text-gray-500">
        Enter a publicly accessible URL for the PDF file
      </p>
    </FormField>
  );
}
