import { TextField } from "@mui/material";
import { useField } from "formik";
import { Mail } from "lucide-react";

interface EmailProps {
  name: string;
}

export function Email({ name }: EmailProps) {
  const [field, meta] = useField(name);

  return (
    <TextField
      {...field}
      color="primary"
      label="Email"
      type="email"
      placeholder="Digite seu e-mail"
      variant="outlined"
      fullWidth
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
      slotProps={{
        input: {
          startAdornment:<Mail size={20} className="mr-2" />
        },
        inputLabel: {
          shrink: true
        }
      }}
    />
  )   
}