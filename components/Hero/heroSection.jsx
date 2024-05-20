import Style from "./heroSection.module.css";
import Navbar from "../navbar/navbar";
import Search from "../SearchBar/Search";

export default function HeroSection() {
  return (
    <section className={Style.heroWrapper}>
      <div className={Style.navBar}>
        <Navbar />
      </div>
      <div className={Style.heroSection}>
        <div>
          <div className={Style.heroText}>
            <p style={{ color: "#102851", fontSize: "1.7vmax" }}>
              Skip the Travel! Find Online
            </p>
            <h1 style={{ fontSize: "3vmax" }}>
              Medical <span style={{ color: "#2AA7FF" }}>Centers</span>
            </h1>
            <p style={{ color: "#5C6169" }}>
              Connect instantly with a 24x7 specialist or choose to video visit
              a particular doctor.
            </p>
            <button className={Style.find}>Find Ceters</button>
          </div>
          <div className={Style.heroImage}>
            {/* image from css comes here */}
          </div>
        </div>
      </div>
      <div className={Style.locate}>
        <Search text="hero" />

        <h3 style={{ marginTop: "3%" }}>You may be looking for</h3>
        <div className={Style.cards}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="44"
              height="44"
              fill="none"
              stroke="#2AA7FF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="7" r="4"></circle>
              <path d="M5.5 22a4.5 4.5 0 0 1 13 0"></path>
            </svg>
            <p>Doctors</p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="44"
              height="44"
              fill="none"
              stroke="#2AA7FF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16v2H4z"></path>
              <path d="M10 4v8h4V4"></path>
              <path d="M7 16v4h10v-4"></path>
            </svg>

            <p>Labs</p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="44"
              height="44"
              fill="none"
              stroke="#2AA7FF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 21V8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v13"></path>
              <path d="M9 21v-6h6v6"></path>
              <path d="M9 3h6"></path>
              <path d="M12 3v6"></path>
              <path d="M12 21v-6"></path>
            </svg>

            <p>Hospitals</p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="44"
              height="44"
              fill="none"
              stroke="#2AA7FF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="1" width="18" height="22" rx="2" ry="2"></rect>
              <path d="M8 13h8"></path>
              <path d="M12 9v8"></path>
            </svg>

            <p>Medical stores</p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="44"
              height="44"
              fill="none"
              stroke="#2AA7FF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="7" width="20" height="10" rx="2" ry="2"></rect>
              <path d="M6 22h0"></path>
              <path d="M6 17a5 5 0 0 0 10 0"></path>
              <path d="M16 22h0"></path>
              <path d="M16 17h5"></path>
              <path d="M16 11v-2h-4v2h-2v-2H8v2"></path>
            </svg>

            <p>Ambulance</p>
          </div>
        </div>
      </div>
    </section>
  );
}
