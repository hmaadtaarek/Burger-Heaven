import React from "react";

export default function Input({
  type,
  name,
  id,
  label,
  placeholder,
  onChange,
  value,
  className,
  ...props
}) {
  return (
    <div className="flex flex-col gap-1 mb-4">
      <label className="text-lg font-inter text-[#e9e3dc]">{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className={`p-2 ${className} rounded-lg w-80 bg-[#e9e3dc]/30 font-inter text-[#1e1e1e] focus:border-transparent focus:outline-none focus:bg-[#e9e3dc]/60`}
        onChange={onChange}
        value={value}
        {...props}
      />
    </div>
  );
}
