import { LoginForm } from "../form";
import { Title } from "../title";

export function LoginFormCard() {
  return (
    <section className="max-w-2xl mx-auto lg:bg-[#24221F] lg:px-24 lg:py-12">
      <Title />
      <LoginForm />
    </section>
  );
}