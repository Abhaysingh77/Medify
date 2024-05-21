import Style from './navbar.module.css';
export default function Navbar() {
  return (
    <nav className={Style.navbar}>
      <img src="../assets/images/logo.png" alt="logo" className={Style.logo} />
        <ul className={Style.navItems}>
          <li>Find Doctors</li>
          <li>Hospitals</li>
          <li>Medicines</li>
          <li>Surgeries</li>
          <li>Software for Provider</li>
          <li>Facilities</li>
          <li className={Style.booking} style={{height:'3.5vmax'}}>My Bookings</li>
        </ul>
    </nav>
  );
}
