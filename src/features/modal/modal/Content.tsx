import React from "react";

type ContentProps = {
  content: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};
export default function Content({ content, onChange }: ContentProps) {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor="content" className="w-1/3 mb-1">
        Content:
      </label>
      <textarea
        name="content"
        placeholder="Enter content"
        required
        cols={5}
        rows={5}
        className="border border-gray-400 py-1 px-2"
        value={content}
        onInput={onChange}
      />
    </div>
  );
}
