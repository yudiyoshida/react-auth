import { LogOut } from "lucide-react";

export function Title() {
  return (
    <section>
      <div className='mb-6'>
        <div className='flex justify-start items-center gap-2 mb-1'>
          <LogOut className='text-main-yellow' />
          <h1 className='text-2xl font-bold'>Faça seu login</h1>
        </div>
        <h2>Entre com suas informações de cadastro.</h2>
      </div>
    </section>
  )
}