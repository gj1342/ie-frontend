import { Label } from "~/components/ui/label";
import { Text } from "~/components/ui/text";

interface FormFieldProps {
  label: string;
  children: React.ReactNode;
  required?: boolean;
  error?: string;
  className?: string;
}

export function FormField({ 
  label, 
  children, 
  required = false, 
  error,
  className = "" 
}: FormFieldProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      <Label className="text-sm font-medium">
        {label}
        {required && <span className="text-destructive ml-1">*</span>}
      </Label>
      {children}
      {error && (
        <Text variant="caption" className="text-destructive">
          {error}
        </Text>
      )}
    </div>
  );
}
