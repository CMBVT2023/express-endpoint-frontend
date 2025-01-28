import { RefObject } from "react";

interface UserInputProps {
  inputRef: RefObject<HTMLInputElement | null>;
  labelName: string;
}

export default function UserInput({ inputRef, labelName }: UserInputProps) {
  return (
    <div className="flex gap-4">
      <label htmlFor={`${labelName}-input`}>{labelName}:</label>
      <input
        ref={inputRef}
        id={`${labelName}-input`}
        placeholder={labelName}
        type="text"
      />
    </div>
  );
}
