import Link from 'next/link'
import User  from './User'

const Navigation: React.FC = () => {
  return (
    <nav className='flex items-center justify-between text-white p-2.5 w-full h-16'>
      <h1 className='text-radiusOrange no-underline font-francoisOne font-bold text-2xl ml-4'>
        <span>Trip</span>
        <span>Planner</span>
      </h1>
      <ul className='flex justify-center items-center list-none mr-4 text-offBlack font-bold'>
        <li className='m-4'>
          <Link href='/'>Log in</Link>
        </li>
        <li>
          <Link href='/radius'>Sign Up</Link>
        </li>
      </ul>
      {/* <User />  */}
    </nav>
  );
}

export default Navigation