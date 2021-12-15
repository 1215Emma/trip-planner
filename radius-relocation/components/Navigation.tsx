import navigationStyles from '../styles/Navigation.module.css'
import Link from 'next/link'
import User  from './User'


const Navigation: React.FC = () => {
  return (
    <nav className={navigationStyles.nav}>
      <h1 className={navigationStyles.title}>
        <span>Radius</span> <span>Relocation</span>
      </h1>
      <ul>
        <li>
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