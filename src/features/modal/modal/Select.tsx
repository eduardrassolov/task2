import React from "react";
interface IOptions {
  key: string;
  value: string;
}

type SelectProps = {
  selected: string;
  options: Array<IOptions>;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  children?: React.ReactNode;
};

const Select = ({ selected, options, onChange, children }: SelectProps) => {
  return (
    <div className="flex flex-col mb-6">
      {children}
      <select
        name="category"
        className="border border-gray-400 text-base py-1 px-2 h-11 rounded-md"
        onChange={onChange}
        value={selected}
      >
        {options.map(({ key, value }) => (
          <option key={key} value={key}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
