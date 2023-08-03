import React from "react";
import { categories } from "../../../config/noteCategories";

type SelectProps = {
  category: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function Select({ category, onChange }: SelectProps) {
  return (
    <div className="flex flex-col mb-6">
      <label htmlFor="category" className="w-1/3 mb-1">
        Category:
      </label>
      <select
        name="category"
        className="border border-gray-400 text-base py-1 px-2 h-11 rounded-md"
        onChange={onChange}
        value={category}
      >
        {categories.map(({ key, value }) => (
          <option key={key} value={key}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
}
