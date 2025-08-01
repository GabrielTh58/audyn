interface InputRadioProps {
  label: string;
  name: string;
  value: string;
  checked?: boolean;
}

export default function InputRadio(props: InputRadioProps) {
  const { label, name, value, checked } = props;
  
  return (
    <label className="flex items-center gap-3 cursor-pointer">
      <input
        type="radio"
        name={name}
        value={value}
        className="accent-orange-500"
        defaultChecked={checked}  
      />
      <span className="text-zinc-700 font-medium">{label}</span>
    </label>
  );
}
