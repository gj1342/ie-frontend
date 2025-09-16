import { ChevronDownIcon } from "lucide-react";
import { Button } from "~/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "~/components/ui/dropdown-menu";
import { FormField } from "./form-field";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectFieldProps {
  label: string;
  value: string;
  options: ReadonlyArray<SelectOption>;
  onValueChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
  className?: string;
}

export function SelectField({
  label,
  value,
  options,
  onValueChange,
  placeholder = "Select an option",
  required = false,
  error,
  className = ""
}: SelectFieldProps) {
  const selectedOption = options.find(option => option.value === value);

  return (
    <FormField 
      label={label} 
      required={required} 
      error={error}
      className={className}
    >
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            className="w-full justify-between overflow-hidden"
          >
            <span className="truncate text-left">
              {selectedOption ? selectedOption.label : placeholder}
            </span>
            <ChevronDownIcon className="h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)] max-h-60 overflow-y-auto">
          {options.map((option) => (
            <DropdownMenuItem
              key={option.value}
              onClick={() => onValueChange(option.value)}
              className="cursor-pointer"
            >
              <span className="whitespace-normal break-words">
                {option.label}
              </span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </FormField>
  );
}