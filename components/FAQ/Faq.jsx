import './FAQSection.css';
function FAQSection() {
  return (
    <div className="faq-section">
      <p>Get your answers</p>
      <h1>Frequently Asked Questions</h1>
      <div className="faq-content">
      <div className='widget'></div>
        <img src="../assets/images/doctor-patient.png" alt="Doctor with patient" />
       
        <div className='shape'></div>
        <div className="faq-questions">
          <p>Why choose our medical for your family? &#43;</p>
          <br />
          <p>Why are we different from others? &#43;</p>
          <br />
          <p>Trusted & experienced senior care & love &#43;</p>
          <br />
          <p>How to get an appointment for emergency cases? &#43;</p>
        </div>
      </div>
    </div>
  );
}

export default FAQSection;
