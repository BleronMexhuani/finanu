import React from 'react'
import { useState } from 'react'
function Faq() {

  const [showFaq, setShowFaq] = useState(0)
  const toggleFaqState = (e) => {
    if (showFaq === e) {
      setShowFaq(0)
    }
    else {
      setShowFaq(e)

    }
  }
  return (
    <div>
      <div className="pt-5 mt-5 bodyCounterPadding">
        <div className='container-xl px-4 px-xl-5 mt-4'>
          <div className="hausratBlueDiv px-4 px-md-5 pt-4 pt-md-5 pb-4 mb-0">
            <div className="whiteBgRecht p-3 absoluteDivRecht">
              <span style={{ color: "#50B8E7" }} className='fw-700 firstBlueTitle'>FAQ</span>
            </div>
            <div className="pt-5 text-start whiteBorderParent">
              <div className='whiteBorderBottomRecht pb-2 mb-4' onClick={() => { toggleFaqState(1) }}>
                <div className="row g-0">
                  <div className="col-auto my-auto me-2">
                    <svg width="14" viewBox="0 0 17 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.4832 13.4904L3.27089 4.76543C2.37911 4.00345 1.47719 3.25213 0.603673 2.4727C0.440533 2.35448 0.304641 2.20542 0.20446 2.0348C0.104279 1.86417 0.0419632 1.67565 0.0214018 1.48099C0.000840489 1.28634 0.0224716 1.08972 0.0849497 0.903407C0.147428 0.717094 0.249403 0.54508 0.38453 0.398095C0.524976 0.266283 0.69198 0.163104 0.875404 0.0948042C1.05883 0.0265048 1.25486 -0.0054865 1.45161 0.000768236C1.64836 0.00702297 1.84172 0.051396 2.01999 0.131194C2.19826 0.210991 2.35772 0.324546 2.48868 0.464987C7.07844 4.37765 11.6635 8.29581 16.2438 12.2195C16.4759 12.3532 16.6676 12.5422 16.8002 12.7681C16.9328 12.994 17.0016 13.2489 17 13.5079C16.9983 13.7669 16.9263 14.021 16.7909 14.2453C16.6554 14.4697 16.4613 14.6565 16.2275 14.7875C11.6506 18.715 7.06424 22.6319 2.46839 26.5381C2.33845 26.6796 2.17915 26.7936 2.0006 26.8731C1.82204 26.9526 1.62813 26.9957 1.4312 26.9997C1.23428 27.0037 1.03864 26.9685 0.856704 26.8964C0.674767 26.8243 0.510519 26.7168 0.37439 26.5808C0.236865 26.4345 0.133202 26.2621 0.0701967 26.0749C0.00719177 25.8877 -0.0137353 25.6899 0.00876968 25.4944C0.0312747 25.299 0.0967169 25.1103 0.200806 24.9406C0.304896 24.771 0.445288 24.6243 0.612807 24.5101C4.16909 21.4518 7.73383 18.4029 11.307 15.3634C12.0152 14.7594 12.7213 14.1487 13.4832 13.4904Z" fill="white" />
                    </svg>
                  </div>
                  <div className="col my-auto">
                    <div>
                      <span >Was ist eine Rechtschutzversicherung?</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={` ${(showFaq === 1) ? "faqOpen3" : "faqClosed"}`}>
                <span className='fw-400'>Eine Rechtsschutzversicherung ist ein privatrechtlicher Versicherungsvertrag, welcher den Versicherten vor den finanziellen Folgen aus Rechtsstreitigkeiten schützen soll. Der Deckungsumfang reicht von Beratung über rechtlichen Beistand bis hin zur Übernahme von Prozess- sowie Anwaltskosten. Dabei werden zwei Sparten unterteilt: die Verkehrs- und die Privatrechtsschutzversicherung.</span>
              </div>
              <div className='whiteBorderBottomRecht pb-2 mb-4' onClick={() => { toggleFaqState(2) }}>
                <div className="row g-0">
                  <div className="col-auto my-auto me-2">
                    <svg width="14" viewBox="0 0 17 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.4832 13.4904L3.27089 4.76543C2.37911 4.00345 1.47719 3.25213 0.603673 2.4727C0.440533 2.35448 0.304641 2.20542 0.20446 2.0348C0.104279 1.86417 0.0419632 1.67565 0.0214018 1.48099C0.000840489 1.28634 0.0224716 1.08972 0.0849497 0.903407C0.147428 0.717094 0.249403 0.54508 0.38453 0.398095C0.524976 0.266283 0.69198 0.163104 0.875404 0.0948042C1.05883 0.0265048 1.25486 -0.0054865 1.45161 0.000768236C1.64836 0.00702297 1.84172 0.051396 2.01999 0.131194C2.19826 0.210991 2.35772 0.324546 2.48868 0.464987C7.07844 4.37765 11.6635 8.29581 16.2438 12.2195C16.4759 12.3532 16.6676 12.5422 16.8002 12.7681C16.9328 12.994 17.0016 13.2489 17 13.5079C16.9983 13.7669 16.9263 14.021 16.7909 14.2453C16.6554 14.4697 16.4613 14.6565 16.2275 14.7875C11.6506 18.715 7.06424 22.6319 2.46839 26.5381C2.33845 26.6796 2.17915 26.7936 2.0006 26.8731C1.82204 26.9526 1.62813 26.9957 1.4312 26.9997C1.23428 27.0037 1.03864 26.9685 0.856704 26.8964C0.674767 26.8243 0.510519 26.7168 0.37439 26.5808C0.236865 26.4345 0.133202 26.2621 0.0701967 26.0749C0.00719177 25.8877 -0.0137353 25.6899 0.00876968 25.4944C0.0312747 25.299 0.0967169 25.1103 0.200806 24.9406C0.304896 24.771 0.445288 24.6243 0.612807 24.5101C4.16909 21.4518 7.73383 18.4029 11.307 15.3634C12.0152 14.7594 12.7213 14.1487 13.4832 13.4904Z" fill="white" />
                    </svg>
                  </div>
                  <div className="col my-auto">
                    <div>
                      <span >Welchen Rechtschutz braucht man?</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={` ${(showFaq === 2) ? "faqOpen2" : "faqClosed"}`}>
                <span className='fw-400'>
                  Entscheidend: Der richtige Versicherungsumfang. Dabei muss man Leistungen, Selbstbehalte, Mindest- oder Maximalstreitwerte, Laufzeiten und Kündigungsmöglichkeiten im Blick haben.<br></br>
                  a. Was bedeutet Verkehrsrechtsschutz?<br></br>
                  b. Was bedeutuet Privatrechtsschutz?
                </span>
              </div>
              <div className='whiteBorderBottomRecht pb-2 mb-4' onClick={() => { toggleFaqState(3) }}>
                <div className="row g-0">
                  <div className="col-auto my-auto me-2">
                    <svg width="14" viewBox="0 0 17 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.4832 13.4904L3.27089 4.76543C2.37911 4.00345 1.47719 3.25213 0.603673 2.4727C0.440533 2.35448 0.304641 2.20542 0.20446 2.0348C0.104279 1.86417 0.0419632 1.67565 0.0214018 1.48099C0.000840489 1.28634 0.0224716 1.08972 0.0849497 0.903407C0.147428 0.717094 0.249403 0.54508 0.38453 0.398095C0.524976 0.266283 0.69198 0.163104 0.875404 0.0948042C1.05883 0.0265048 1.25486 -0.0054865 1.45161 0.000768236C1.64836 0.00702297 1.84172 0.051396 2.01999 0.131194C2.19826 0.210991 2.35772 0.324546 2.48868 0.464987C7.07844 4.37765 11.6635 8.29581 16.2438 12.2195C16.4759 12.3532 16.6676 12.5422 16.8002 12.7681C16.9328 12.994 17.0016 13.2489 17 13.5079C16.9983 13.7669 16.9263 14.021 16.7909 14.2453C16.6554 14.4697 16.4613 14.6565 16.2275 14.7875C11.6506 18.715 7.06424 22.6319 2.46839 26.5381C2.33845 26.6796 2.17915 26.7936 2.0006 26.8731C1.82204 26.9526 1.62813 26.9957 1.4312 26.9997C1.23428 27.0037 1.03864 26.9685 0.856704 26.8964C0.674767 26.8243 0.510519 26.7168 0.37439 26.5808C0.236865 26.4345 0.133202 26.2621 0.0701967 26.0749C0.00719177 25.8877 -0.0137353 25.6899 0.00876968 25.4944C0.0312747 25.299 0.0967169 25.1103 0.200806 24.9406C0.304896 24.771 0.445288 24.6243 0.612807 24.5101C4.16909 21.4518 7.73383 18.4029 11.307 15.3634C12.0152 14.7594 12.7213 14.1487 13.4832 13.4904Z" fill="white" />
                    </svg>
                  </div>
                  <div className="col my-auto">
                    <div>
                      <span >Welche Leistungen erhalten Sie?</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={` ${(showFaq === 3) ? "faqOpen1" : "faqClosed"}`}>
                <span className='fw-400'>
                  • Schnelle, kompetennte Hilfe von erfahrenen Juristen und Anwälten<br></br>
                  • Übernahme von Anwalts-, Gerichts-, Expertise-, Mediations- und Verfahrenskosten<br></br>
                  • Prozessentschädigung an die Gegenpartei<br></br>
                  • Vorschuss von Strafkaution zur Vermeidung von Untersuchungshaft<br></br>
                  • Reisekosten bei Reisen zu Gerichtsverhandlungen im Ausland<br></br>
                  • Übersetzungskosten für Gerichtsverfahren im Ausland<br></br>
                  • Kostenlose telefonische Rechtsauskunft<br></br>
                </span>
              </div>
              <div className='whiteBorderBottomRecht pb-2 mb-4' onClick={() => { toggleFaqState(4) }}>
                <div className="row g-0">
                  <div className="col-auto my-auto me-2">
                    <svg width="14" viewBox="0 0 17 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.4832 13.4904L3.27089 4.76543C2.37911 4.00345 1.47719 3.25213 0.603673 2.4727C0.440533 2.35448 0.304641 2.20542 0.20446 2.0348C0.104279 1.86417 0.0419632 1.67565 0.0214018 1.48099C0.000840489 1.28634 0.0224716 1.08972 0.0849497 0.903407C0.147428 0.717094 0.249403 0.54508 0.38453 0.398095C0.524976 0.266283 0.69198 0.163104 0.875404 0.0948042C1.05883 0.0265048 1.25486 -0.0054865 1.45161 0.000768236C1.64836 0.00702297 1.84172 0.051396 2.01999 0.131194C2.19826 0.210991 2.35772 0.324546 2.48868 0.464987C7.07844 4.37765 11.6635 8.29581 16.2438 12.2195C16.4759 12.3532 16.6676 12.5422 16.8002 12.7681C16.9328 12.994 17.0016 13.2489 17 13.5079C16.9983 13.7669 16.9263 14.021 16.7909 14.2453C16.6554 14.4697 16.4613 14.6565 16.2275 14.7875C11.6506 18.715 7.06424 22.6319 2.46839 26.5381C2.33845 26.6796 2.17915 26.7936 2.0006 26.8731C1.82204 26.9526 1.62813 26.9957 1.4312 26.9997C1.23428 27.0037 1.03864 26.9685 0.856704 26.8964C0.674767 26.8243 0.510519 26.7168 0.37439 26.5808C0.236865 26.4345 0.133202 26.2621 0.0701967 26.0749C0.00719177 25.8877 -0.0137353 25.6899 0.00876968 25.4944C0.0312747 25.299 0.0967169 25.1103 0.200806 24.9406C0.304896 24.771 0.445288 24.6243 0.612807 24.5101C4.16909 21.4518 7.73383 18.4029 11.307 15.3634C12.0152 14.7594 12.7213 14.1487 13.4832 13.4904Z" fill="white" />
                    </svg>
                  </div>
                  <div className="col my-auto">
                    <div>
                      <span >Ab Wann und wo gilt der Versicherungsschutz?</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={` ${(showFaq === 4) ? "faqOpen2" : "faqClosed"}`}>
                <span className='fw-400'>
                  Der Versicherungsschutz ab dem in der Police aufgeführten Datum, ohne Wartefrist. Für Fälle, die bereits vorher bestanden oder ihren Ursprung vor Beginn des Versicherungsvertrags haben, besteht kein Schutz. Der Versicherungsschutz der Rechtsschutzversicherung gilt je nach Gesellschaft für die Schweiz und die übrige Welt.
                </span>
              </div>
              <div className='whiteBorderBottomRecht pb-2 mb-4' onClick={() => { toggleFaqState(5) }}>
                <div className="row g-0">
                  <div className="col-auto my-auto me-2">
                    <svg width="14" viewBox="0 0 17 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.4832 13.4904L3.27089 4.76543C2.37911 4.00345 1.47719 3.25213 0.603673 2.4727C0.440533 2.35448 0.304641 2.20542 0.20446 2.0348C0.104279 1.86417 0.0419632 1.67565 0.0214018 1.48099C0.000840489 1.28634 0.0224716 1.08972 0.0849497 0.903407C0.147428 0.717094 0.249403 0.54508 0.38453 0.398095C0.524976 0.266283 0.69198 0.163104 0.875404 0.0948042C1.05883 0.0265048 1.25486 -0.0054865 1.45161 0.000768236C1.64836 0.00702297 1.84172 0.051396 2.01999 0.131194C2.19826 0.210991 2.35772 0.324546 2.48868 0.464987C7.07844 4.37765 11.6635 8.29581 16.2438 12.2195C16.4759 12.3532 16.6676 12.5422 16.8002 12.7681C16.9328 12.994 17.0016 13.2489 17 13.5079C16.9983 13.7669 16.9263 14.021 16.7909 14.2453C16.6554 14.4697 16.4613 14.6565 16.2275 14.7875C11.6506 18.715 7.06424 22.6319 2.46839 26.5381C2.33845 26.6796 2.17915 26.7936 2.0006 26.8731C1.82204 26.9526 1.62813 26.9957 1.4312 26.9997C1.23428 27.0037 1.03864 26.9685 0.856704 26.8964C0.674767 26.8243 0.510519 26.7168 0.37439 26.5808C0.236865 26.4345 0.133202 26.2621 0.0701967 26.0749C0.00719177 25.8877 -0.0137353 25.6899 0.00876968 25.4944C0.0312747 25.299 0.0967169 25.1103 0.200806 24.9406C0.304896 24.771 0.445288 24.6243 0.612807 24.5101C4.16909 21.4518 7.73383 18.4029 11.307 15.3634C12.0152 14.7594 12.7213 14.1487 13.4832 13.4904Z" fill="white" />
                    </svg>
                  </div>
                  <div className="col my-auto">
                    <div>
                      <span >Benötige ich Rechtschutz, wenn ichbereits eine Haftpflichtversicherung habe?</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={` ${(showFaq === 5) ? "faqOpen" : "faqClosed"}`}>
                <span className='fw-400'>
                  Ja, wenn Sie möchten, dass Ihre Rechte vertreten und Ihre Ansprüche durchgesetzt werden. Ihre Haftpflichtversicherung kümmert sich nur um die gegnerischen Ansprüche. Eine Rechtsschutzversicherung verteidigt jedoch Ihre Reche unt kümmert sich somit um Ihre Ansprüche.
                </span>
              </div>
              <div className='whiteBorderBottomRecht pb-2 mb-4' onClick={() => { toggleFaqState(6) }}>
                <div className="row g-0">
                  <div className="col-auto my-auto me-2">
                    <svg width="14" viewBox="0 0 17 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.4832 13.4904L3.27089 4.76543C2.37911 4.00345 1.47719 3.25213 0.603673 2.4727C0.440533 2.35448 0.304641 2.20542 0.20446 2.0348C0.104279 1.86417 0.0419632 1.67565 0.0214018 1.48099C0.000840489 1.28634 0.0224716 1.08972 0.0849497 0.903407C0.147428 0.717094 0.249403 0.54508 0.38453 0.398095C0.524976 0.266283 0.69198 0.163104 0.875404 0.0948042C1.05883 0.0265048 1.25486 -0.0054865 1.45161 0.000768236C1.64836 0.00702297 1.84172 0.051396 2.01999 0.131194C2.19826 0.210991 2.35772 0.324546 2.48868 0.464987C7.07844 4.37765 11.6635 8.29581 16.2438 12.2195C16.4759 12.3532 16.6676 12.5422 16.8002 12.7681C16.9328 12.994 17.0016 13.2489 17 13.5079C16.9983 13.7669 16.9263 14.021 16.7909 14.2453C16.6554 14.4697 16.4613 14.6565 16.2275 14.7875C11.6506 18.715 7.06424 22.6319 2.46839 26.5381C2.33845 26.6796 2.17915 26.7936 2.0006 26.8731C1.82204 26.9526 1.62813 26.9957 1.4312 26.9997C1.23428 27.0037 1.03864 26.9685 0.856704 26.8964C0.674767 26.8243 0.510519 26.7168 0.37439 26.5808C0.236865 26.4345 0.133202 26.2621 0.0701967 26.0749C0.00719177 25.8877 -0.0137353 25.6899 0.00876968 25.4944C0.0312747 25.299 0.0967169 25.1103 0.200806 24.9406C0.304896 24.771 0.445288 24.6243 0.612807 24.5101C4.16909 21.4518 7.73383 18.4029 11.307 15.3634C12.0152 14.7594 12.7213 14.1487 13.4832 13.4904Z" fill="white" />
                    </svg>
                  </div>
                  <div className="col my-auto">
                    <div>
                      <span >Was ist eine Rechtschutzversicherung?</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={` ${(showFaq === 6) ? "faqOpen" : "faqClosed"}`}>
                <span className='fw-400'>
                  Die Kosten für einen Rechtsstreit werden von vielen stark unterschätzt. Eine Studie beweist das ganze 77 Prozent der Befragten die Kosten eines Rechtsstreites enorm unterschätzen. Zudem würden 46 Prozent der Teilnehmer auf eine Klage verzichten wegen der Kosten.
                </span>
              </div>
              <div className='whiteBorderBottomRecht pb-2 mb-4' onClick={() => { toggleFaqState(7) }}>
                <div className="row g-0">
                  <div className="col-auto my-auto me-2">
                    <svg width="14" viewBox="0 0 17 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.4832 13.4904L3.27089 4.76543C2.37911 4.00345 1.47719 3.25213 0.603673 2.4727C0.440533 2.35448 0.304641 2.20542 0.20446 2.0348C0.104279 1.86417 0.0419632 1.67565 0.0214018 1.48099C0.000840489 1.28634 0.0224716 1.08972 0.0849497 0.903407C0.147428 0.717094 0.249403 0.54508 0.38453 0.398095C0.524976 0.266283 0.69198 0.163104 0.875404 0.0948042C1.05883 0.0265048 1.25486 -0.0054865 1.45161 0.000768236C1.64836 0.00702297 1.84172 0.051396 2.01999 0.131194C2.19826 0.210991 2.35772 0.324546 2.48868 0.464987C7.07844 4.37765 11.6635 8.29581 16.2438 12.2195C16.4759 12.3532 16.6676 12.5422 16.8002 12.7681C16.9328 12.994 17.0016 13.2489 17 13.5079C16.9983 13.7669 16.9263 14.021 16.7909 14.2453C16.6554 14.4697 16.4613 14.6565 16.2275 14.7875C11.6506 18.715 7.06424 22.6319 2.46839 26.5381C2.33845 26.6796 2.17915 26.7936 2.0006 26.8731C1.82204 26.9526 1.62813 26.9957 1.4312 26.9997C1.23428 27.0037 1.03864 26.9685 0.856704 26.8964C0.674767 26.8243 0.510519 26.7168 0.37439 26.5808C0.236865 26.4345 0.133202 26.2621 0.0701967 26.0749C0.00719177 25.8877 -0.0137353 25.6899 0.00876968 25.4944C0.0312747 25.299 0.0967169 25.1103 0.200806 24.9406C0.304896 24.771 0.445288 24.6243 0.612807 24.5101C4.16909 21.4518 7.73383 18.4029 11.307 15.3634C12.0152 14.7594 12.7213 14.1487 13.4832 13.4904Z" fill="white" />
                    </svg>
                  </div>
                  <div className="col my-auto">
                    <div>
                      <span >Ist die Rechtsschutzversicherung in der Schweiz obligatorisch?</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={` ${(showFaq === 7) ? "faqOpen" : "faqClosed"}`}>
                <span className='fw-400'>Nein, eine Rechtschutzversicherung ist nicht obligatorisch, jedoch sehr empfehlenswert. Im Alltag kann es unerwartet zu Rechtsstreitigkeiten kommen. Sei es als Arbeitsnehmer, Mieter, Verkehrsteilnehmer oder Patientin. Mit einer Rechtsschutzversicherung sind Sie umfassend gedeckt.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq