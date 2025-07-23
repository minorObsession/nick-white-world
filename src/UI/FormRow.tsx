interface FormRowProps {
  label: string;
  id: string;
  name: string;
  value: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  isTextArea?: boolean;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
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
    "   w-[clamp(15rem,30vw,40rem)] self-center border-2 border-primary/30 rounded-lg text-white focus:border-primary focus:outline-none transition-all duration-300";
  const textareaClasses = `${inputClasses} min-h-[120px] resize-y`;

  return (
    <div className=" text-primary flex flex-col gap-2 lg:gap-5">
      <label
        htmlFor={id}
        className="text-accent text-lg md:text-xl lg:text-2xl font-medium"
      >
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
