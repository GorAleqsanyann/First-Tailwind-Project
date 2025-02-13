import { useController } from "react-hook-form";

export default function Input({
  placeholder,
  type,
  className,
  required = true,
  name,
  control,
}) {
  const { field } = useController({ name, control });
  return (
    <input
      placeholder={placeholder}
      type={type}
      value={undefined}
      className={className}
      required={required}
      {...field}
    />
  );
}
