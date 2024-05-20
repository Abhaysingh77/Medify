import Style from "./heroSection.module.css";
import Navbar from "../navbar/navbar";
export default function HeroSection() {
  return (
    <section className={Style.heroWrapper}>
      <div className={Style.navBar}>
        <Navbar />
      </div>
      <div className={Style.heroSection}>
        <div>
            <div className={Style.heroText}>
                <p style={{color:'#102851', fontSize:'1.7rem'}}>Skip the Travel! Find Online</p>
                <h1 style={{ fontSize:'2.8rem'}}>Medical <span style={{color:'#2AA7FF'}}>Centers</span></h1>
                <p style={{color:'#5C6169'}}>Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.</p>
                <button className={Style.find}>Find Ceters</button>
            </div>
            <div className={Style.heroImage}>

            </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}

