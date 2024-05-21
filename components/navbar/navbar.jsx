import Style from './navbar.module.css';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className={Style.navbar}>
      <Link to="/"><img src="../assets/images/logo.png" alt="logo" className={Style.logo} /></Link>
        <ul className={Style.navItems}>
          <li><Link to="/doctors">Find Doctors</Link></li>
          <li>Hospitals</li>
          <li>Medicines</li>
          <li>Surgeries</li>
          <li>Software for Provider</li>
          <li>Facilities</li>
          <li className={Style.booking} style={{height:'3.5vmax'}}><Link to="/bookings">My Bookings</Link></li>
        </ul>
    </nav>
  );
}
