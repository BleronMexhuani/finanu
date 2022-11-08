import React from "react";
import "../../components/wettbewerbe/WLinks.css";

function WLinks(props) {
  const checkChild = (e) => {
    if (e.target.value === "3" || e.target.value === "4") {
      props.setChild(true);
    } else {
      props.setChild(false);
    }
    props.changeHousehold(e.target.value);
  };
  return (
    <div className="">
      <div className="wrapDiv  container-xl px-4 px-xl-0">
        <div className="">
          <img
            className="img"
            src={props.Photo}
            alt=""
            style={{ width: "100%", borderRadius: "20px 20px" }}
          />
        </div>
      </div>
      <div className="mt-5 formbg">
        <div className="wrapDiv  container-xl px-4 px-xl-0">
          <div className="row gx-0">
            <div className="col-12 col-lg-6 " style={{zIndex: '999'}}>
              <div className="mx-auto formcontact">
                <div className="mt-3">
                  <h2 className="titleform ms-3">
                    Städtetrip in die UNESCO- <br /> Weltkulturerbestätte Bern
                    für 2 Personen
                  </h2>
                  <p className="subtitleform ms-3">
                    Tage Deine Angaben ein und nimm Wettbewerb teil. Viel Gluck!
                  </p>
                  <form action="">
                    <select
                      onChange={checkChild}
                      defaultValue={props.setHouseholdValue}
                      name="household "
                      id=""
                      className="form-select stepsFormInputs formwett"
                    >
                      <option value="1">Frrau</option>
                      <option value="2">Herr</option>
                    </select>
                    <input
                      type="text"
                      name="name"
                      placeholder="Vorname"
                      className="hausratFormInputs stepsFormInputs formwett mt-2"
                    />
                    <input
                      type="text"
                      name="name"
                      placeholder="Nachname"
                      className="hausratFormInputs stepsFormInputs formwett mt-2"
                    />
                    <input
                      type="date"
                      id="birthday"
                      name="birthday"
                      className="hausratFormInputs stepsFormInputs formwett mt-2"
                    />
                    <input
                      type="number"
                      id="tentacles"
                      name="tentacles"
                      placeholder="Anzahl Personen im Haushalt"
                      min="1"
                      max="9"
                      className="hausratFormInputs stepsFormInputs formwett mt-2"
                    />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      className="hausratFormInputs stepsFormInputs formwett mt-2"
                    />
                    <input
                      type="phone"
                      id="phone"
                      name="phone"
                      placeholder="Handynumber"
                      className="hausratFormInputs stepsFormInputs formwett mt-2"
                    />
                    <input
                      type="text"
                      name="name"
                      placeholder="Strasse"
                      className="hausratFormInputs stepsFormInputs formwett mt-2"
                    />
                    <select
                      onChange={checkChild}
                      defaultValue={props.setHouseholdValue}
                      name="household "
                      id=""
                      className="form-select stepsFormInputs formwett mt-2"
                    >
                      <option value="1">---</option>
                      <option value="2">---</option>
                      <option value="3">---</option>
                      <option value="4">---</option>
                      <option value="5">---</option>
                      <option value="6">---</option>
                      <option value="7">---</option>
                      <option value="8">---</option>
                    </select>
                    <select
                      onChange={checkChild}
                      defaultValue={props.setHouseholdValue}
                      id=""
                      className="form-select stepsFormInputs formwett mt-2"
                    >
                      <option value="1">CSS</option>
                      <option value="2">---</option>
                      <option value="3">---</option>
                      <option value="4">---</option>
                      <option value="5">---</option>
                      <option value="6">---</option>
                      <option value="7">---</option>
                      <option value="8">---</option>
                    </select>
                    <input
                      type="number"
                      id="tentacles"
                      name="tentacles"
                      placeholder="Franchise"
                      min="1"
                      max="10000"
                      className="hausratFormInputs stepsFormInputs formwett mt-2"
                    />
                    <select
                      onChange={checkChild}
                      defaultValue={props.setHouseholdValue}
                      id=""
                      className="form-select stepsFormInputs formwett mt-2"
                    >
                      <option value="1">---</option>
                      <option value="2">1</option>
                      <option value="3">2</option>
                      <option value="4">3</option>
                      <option value="5">4</option>
                      <option value="6">5</option>
                    </select>
                    <select
                      onChange={checkChild}
                      defaultValue={props.setHouseholdValue}
                      id=""
                      className="form-select stepsFormInputs formwett mt-2"
                    >
                      <option value="1">---</option>
                      <option value="Tiefe Kosten">Tiefe Kosten</option>
                      <option value="Viele Leistungen">Viele Leistungen</option>
                      <option value="Starker Kundendienst">
                        Starker Kundendienst
                      </option>
                    </select>
                    <label className="mt-4">
                      <input type="checkbox" name="checkbox" value="value" />
                      <span className="ms-1">
                        {" "}
                        Ich habe die Teilnahme-, Nutzungs- und <br />{" "}
                        Datenschutzbedingungen gelesen und bin damit <br />{" "}
                        einverstanden.*{" "}
                      </span>
                    </label>
                  </form>
                  <button className="firstSectionBlueBtn1 mt-2">
                    Jetzt konstenlos teilnehmen
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-5 d-flex align-items-center ms-4">
              <div className="text-start" style={{ color: "white" }}>
                <h2>Was ist alles im Angebot inbegriffen?</h2>
                <div className="mt-3">
                  <h5 style={{ fontSize: "16px" }}>
                    2 Nächte im Hotel Schweizerhof Bern{" "}
                  </h5>
                </div>
                <div className="mt-3">
                  <h5 style={{ fontSize: "16px" }}> UNESCO Altstadtführung </h5>
                </div>
                <div className="mt-3">
                  <h5 style={{ fontSize: "16px" }}>
                    Kulinarische Verwöhnung hoch über der Stadt{" "}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" wrapDiv  container-xl px-4 px-xl-0 mt-5 py-5">
        <div className="mt-5 py-5 text-start normalTextToWhite " >
            <h2 style={{fontSize:"24px", fontWeight:"600"}}>
            Wie kann bei gewinne-einfach.ch teilgenommen werden?
            </h2>
            <div className="mt-3">
        <h5 style={{fontSize:"16px", lineHeight: '1.6'}}>
         Suche deinen Preis aus, fülle das Formular aus und du hast erfolgreich an der Verlosung teilgenommen.						
        </h5>
        </div>
        <div className="mt-4">
        <h2 style={{fontSize:"24px", fontWeight:"600"}}>
        Wer darf bei gewinne-einfach.ch teilnehmen?
            </h2>
            </div>
            <div className="mt-3">
        <h5 style={{fontSize:"16px", lineHeight: '1.6'}}>
        Teilnahmeberechtigt sind alle Personen, welche Ihren Wohnsitz in der Schweiz und das 18. Lebensjahr vollendet haben. Der Teilnehmende <br /> bestätigt mit der Teilnahme, die Richtigkeit aller Angaben.						
        </h5>
        </div>
        <div className="mt-4">
        <h2 style={{fontSize:"24px", fontWeight:"600"}} >
        Hinweis:
            </h2>
            </div>
            <div className="mt-3">
        <h5 style={{fontSize:"16px", lineHeight: '1.6'}}>
        Das Gewinnspiel steht in keiner Verbindung zum Hotel Schweizerhof Bern und wird in keiner Weise von anderen als der DL Finance.ch <br /> gesponsert, unterstützt oder organisiert.
        </h5>
        
        </div>
        <div className="mt-4">
        <h2 style={{fontSize:"24px", fontWeight:"600"}}>
        Teilnahmeschluss:
            </h2>
            <span style={{fontSize:"16px", fontWeight:"600"}}>31.07.2022</span>
            </div>
        </div>
      </div>
    </div>
  );
}

export default WLinks;
