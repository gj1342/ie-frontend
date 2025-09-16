import { Textarea } from "~/components/ui/textarea";
import { FormField } from "./form-field";

interface TextAreaFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
  className?: string;
  rows?: number;
}

export function TextAreaField({
  label,
  value,
  onChange,
  placeholder,
  required = false,
  error,
  className = "",
  rows = 3
}: TextAreaFieldProps) {
  return (
    <FormField 
      label={label} 
      required={required} 
      error={error}
      className={className}
    >
      <Textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="resize-none"
      />
    </FormField>
  );
}
