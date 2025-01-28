interface UserInputProps {
  labelName: string;
  value: string;
  alter: (e: string) => void;
}

export default function UserInput({ labelName, value, alter }: UserInputProps) {
  return (
    <div className="flex gap-4">
      <label htmlFor={`${labelName}-input`}>{labelName}:</label>
      <input
        id={`${labelName}-input`}
        placeholder={labelName}
        value={value}
        onChange={(e) => alter(e.target.value)}
        type="text"
      />
    </div>
  );
}
