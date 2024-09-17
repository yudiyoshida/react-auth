import { LoginFormCard } from '../../components/card';
import { Header } from '../../components/header';
import sideImage from '../../assets/images/side-image.png';

export function LoginPage() {
  return (
    <main className='min-h-screen bg-background'>
      <section className='lg:grid lg:grid-cols-2'>
        <div className='p-4'>
          <Header />
          <LoginFormCard />
        </div>
        <img src={sideImage} alt="" className='h-screen object-cover w-full hidden lg:block' />
      </section>
    </main>
  )
}