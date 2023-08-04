import React from "react";

type InputProps = {
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({ name, onChange }: InputProps) {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor="name" className="w-1/3 mb-1">
        Name:
      </label>
      <input
        name="name"
        id="name"
        autoFocus
        placeholder="Enter name"
        required
        className="text-base py-1 px-2 rounded-md border h-11 border-gray-400"
        value={name}
        onInput={onChange}
      />
    </div>
  );
}
