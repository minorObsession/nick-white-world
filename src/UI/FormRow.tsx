interface FormRowProps {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
  isTextArea?: boolean;
}

function FormRow({
  label,
  id,
  name,
  value,
  onChange,
  type = "text",
  required = true,
  placeholder,
  isTextArea = false,
}: FormRowProps) {
  // todo: focused border color to be 20% brighter than primary color
  const inputClasses =
    "self-center px-4 py-3 border-2 border-primary/30 rounded-lg text-white focus:border-primary focus:outline-none transition-all duration-300";
  const textareaClasses = `${inputClasses} min-h-[150px] resize-y`;

  return (
    <div className=" text-primary flex flex-col gap-2">
      <label htmlFor={id} className="text-accent text-lg font-medium">
        {label}
      </label>
      {isTextArea ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={textareaClasses}
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={inputClasses}
          placeholder={placeholder}
        />
      )}
    </div>
  );
}

export default FormRow;
