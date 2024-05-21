import "./Download.css";

function DownloadSection() {
  return (
    <div className="download-section">
      <div className="app-preview">
        <img src="../assets/images/app_preview.png" alt="App Preview" />
      </div>

      <div className="app-links">
        <h1 style={{ color: "#1B3C74" }}>
          Download the <br />
          <span style={{ color: "#2AA7FF" }}>Medify </span>App
        </h1>
        <img
          src="../assets/images/Vector.svg"
          alt="arrow"
          width="50px"
          height="100px"
          className="arrow"
        />
        <p style={{position:'relative', top:'-55px', left:'10px'}}>Get the link to download the app</p>
        <div style={{display:'flex', justifyContent:'space-between', position:'relative', top:'-45px'}}>
          <div className="contact">
            <span className="span">+91</span>
            <input type="text" name="" id="number" placeholder="Enter phone number" />
          </div>{" "}
          <input type="button" value="Send SMS" className="send" />
        </div>
        <div style={{ display: "flex", position:'relative', top:'-45px' }}>
          <a href="https://play.google.com/store" target="_blank">
            <img src="../assets/images/google_play.png.png" alt="Google Play" />
          </a>
          <a href="https://www.apple.com/app-store/" target="_blank">
            <img src="../assets/images/apple_store.png.png" alt="App Store" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default DownloadSection;
