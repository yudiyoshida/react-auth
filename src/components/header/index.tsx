import logo from '../../assets/svg/logo.svg';

export function Header() {
  return (
    <header>
      <div className='mb-3'>
        <img src={logo} alt="" className='cursor-pointer' />
      </div>
    </header>
  )
}