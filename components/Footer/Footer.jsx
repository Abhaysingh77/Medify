import "./Footer.css";
import DownloadSection from "./Download";
const Footer = () => {
  return (
    <>
      <DownloadSection />
      <footer className="footer">
        <div className="footer-content">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className="footer-logo"></div>
            <div className="footer-social">
              <a href="#" className="fb"></a>
              <a href="#" className="X"></a>
              <a href="#" className="yt"></a>
              <a href="#" className="pinterest"></a>
            </div>
          </div>

          <div className="footer-links">
            <div>
              <a href="#">&gt; About Us</a>
              <a href="#">&gt; Our Pricing</a>
              <a href="#">&gt; Our Gallery</a>
              <a href="#">&gt; Appointment</a>
              <a href="#">&gt; Privacy Policy</a>
            </div>
            <div>
              <a href="#">&gt; Orthology</a>
              <a href="#">&gt; Neurology</a>
              <a href="#">&gt; Dental Care</a>
              <a href="#">&gt; Ophthalmology</a>
              <a href="#">&gt; Cardiology</a>
            </div>
            <div>
              <a href="#">&gt; About Us</a>
              <a href="#">&gt; Our Pricing</a>
              <a href="#">&gt; Our Gallery</a>
              <a href="#">&gt; Appointment</a>
              <a href="#">&gt; Privacy Policy</a>
            </div>
          </div>
        </div>
        <hr
          style={{
            width: "90%",
            border: "1px solid rgba(255,255,255,0.1)",
            margin: "auto",
          }}
        />

        <p style={{ textAlign: "left", marginLeft: "5vw" }}>
          &copy;2023 Surya Nursing Home.com. All Rights Reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
