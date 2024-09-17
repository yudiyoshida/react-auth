import { Form, Formik } from "formik";
import { Email } from "./components/email";
import { Password } from "./components/password";
import { Button } from "@mui/material";
import { CheckboxInput } from "./components/checkbox";

interface FormFields {
  email: string;
  password: string;
  rememberSession: boolean;
}

export function LoginForm() {
  function handleLogin(values: FormFields) {
    console.log(values);
  }

  return (
    <section>
      <Formik
        initialValues={{ email: '', password: '', rememberSession: false }}
        onSubmit={handleLogin}
      >
        <>
          <Form className="space-y-3">
            <section className="space-y-7">
              <Email name="email" />
              <Password name="password" />
            </section>

            <section className="flex flex-col sm:flex-row justify-between items-center">
              <CheckboxInput name="rememberSession" label="Lembrar sessão" />
              <p className="font-bold text-main-yellow cursor-pointer">Esqueci minha senha</p>
            </section>

            <Button type="button" variant="contained" color="primary" fullWidth>Entrar</Button>
            <p className="text-center text-main-yellow text-sm">Não tem uma conta? <span className="font-bold cursor-pointer">Registre-se</span></p>
          </Form>
        </>
      </Formik>
    </section>
  )
}