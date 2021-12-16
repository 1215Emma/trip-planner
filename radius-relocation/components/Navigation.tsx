import Link from 'next/link'
import User  from './User'

const Navigation: React.FC = () => {
  return (
    <nav className="absolute z-10 flex items-center justify-start bg-navBarColor text-white p-2.5 w-screen h-16">
      <h1 className="text-radiusGreen no-underline">
        <span>Radius</span> <span className="text-radiusOrange stroke-radiusGreen stroke-0.25">Relocation</span>
      </h1>
      <ul className="flex justify-center items-center list-none m-2">
        <li className="m-4">
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/radius">Explore</Link>
        </li>
      </ul>
        <User /> 
    </nav>
  );
}

export default Navigation