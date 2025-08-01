interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder?: string;
  label: string;
  className?: string;
}

export default function Input(props: InputProps) {
  const { type, placeholder, label, className } = props;

  return (
    <div className="flex flex-col gap-2 w-full ">
      <label className="font-bold text-sm">{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          className={`${className} border border-zinc-400/80 rounded-md px-4 py-4  focus:outline-none focus:border-orange-500/80`}
        />
    </div>
  );
}
