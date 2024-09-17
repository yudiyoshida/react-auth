import { TextField } from "@mui/material";
import { useField } from "formik";
import { Eye, EyeOff, Lock } from "lucide-react";
import { useState } from "react";

interface PasswordProps {
  name: string;
}

export function Password({ name }: PasswordProps) {
  const [field, meta] = useField(name);
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    setShowPassword(!showPassword);
  }

  return (
    <TextField
      {...field}
      color="primary"
      label="Senha"
      type={showPassword ? 'text' : 'password'}
      placeholder="Digite sua senha"
      variant="outlined"
      fullWidth
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
      slotProps={{
        input: {
          startAdornment: <Lock size={20} className="mr-2" />,
          endAdornment: (
            showPassword
              ? <Eye size={20} className="mr-2" onClick={handleClick} />
              : <EyeOff size={20} className="mr-2" onClick={handleClick} />
          )
        },
        inputLabel: {
          shrink: true
        }
      }}
    />
  )   
}