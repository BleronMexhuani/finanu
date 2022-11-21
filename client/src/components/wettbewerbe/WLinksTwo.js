import React from 'react'
import "../../components/wettbewerbe/WLinks.css";
import Photo from '../../assets/images/europapark.jpg'

function WLinksTwo(props) {
    const checkChild = (e) => {
        if (e.target.value === "3" || e.target.value === "4") {
          props.setChild(true);
        } else {
          props.setChild(false);
        }
        props.changeHousehold(e.target.value);
      };
  return (
    <div>
         <div className="">
      <div className="wrapDiv  container-xl px-4 px-xl-0">
        <div className="">
          <img
            className="img"
            src={Photo}
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
                  <h2 className="titleform ms-3 darktitle">
                  2-tägigen Europaparkausflug mit der Familie!
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
                      className="form-select stepsFormInputs formwett darkselect"
                    >
                      <option value="1">Frrau</option>
                      <option value="2">Herr</option>
                    </select>
                    <input
                      type="text"
                      name="name"
                      placeholder="Vorname"
                      className="hausratFormInputs stepsFormInputs formwett mt-2 darkselect"
                    />
                    <input
                      type="text"
                      name="name"
                      placeholder="Nachname"
                      className="hausratFormInputs stepsFormInputs formwett mt-2 darkselect"
                    />
                    <input
                      type="date"
                      id="birthday"
                      name="birthday"
                      className="hausratFormInputs stepsFormInputs formwett mt-2 darkselect"
                    />
                    <input
                      type="number"
                      id="tentacles"
                      name="tentacles"
                      placeholder="Anzahl Personen im Haushalt"
                      min="1"
                      max="9"
                      className="hausratFormInputs stepsFormInputs formwett mt-2 darkselect"
                    />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      className="hausratFormInputs stepsFormInputs formwett mt-2 darkselect"
                    />
                    <input
                      type="phone"
                      id="phone"
                      name="phone"
                      placeholder="Handynumber"
                      className="hausratFormInputs stepsFormInputs formwett mt-2 darkselect"
                    />
                    <input
                      type="text"
                      name="name"
                      placeholder="Strasse"
                      className="hausratFormInputs stepsFormInputs formwett mt-2 darkselect"
                    />
                    <select
                      onChange={checkChild}
                      defaultValue={props.setHouseholdValue}
                      name="household "
                      id=""
                      className="form-select stepsFormInputs formwett mt-2 darkselect"
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
                      className="form-select stepsFormInputs formwett mt-2 darkselect"
                    >
                      <option value="1">---</option>
                      <option value="Tiefe Kosten">Tiefe Kosten</option>
                      <option value="Viele Leistungen">Viele Leistungen</option>
                      <option value="Starker Kundendienst">
                        Starker Kundendienst
                      </option>
                    </select>
                    <input
                      type="number"
                      id="tentacles"
                      name="tentacles"
                      placeholder="Franchise"
                      min="0"
                      max="10000"
                      className="hausratFormInputs stepsFormInputs formwett mt-2 darkselect"
                    />
                    <label className="mt-4 titlecheck darktitle">
                      <input type="checkbox" name="checkbox" value="value" />
                      <span className="ms-1 titlecheck">
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
              <div className="text-start ">
                <span className="formtitle">Was ist alles im Angebot inbegriffen?</span>
                <div className="mt-1">
                  <span className="formsubtitle" >
                  1 Nacht im Hotel Castillo Alcazar für 4 Personen
                  </span>
                </div>
                <div className="mt-3">
                  <span className="formsubtitle"> Vier 2-Tageskarten in den Europapark </span>
                </div>
                <div className="mt-3">
                  <span className="formsubtitle">
                  200.- Euro Taschengeld für den Konsum vor Ort
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" wrapDiv  container-xl px-4 px-xl-0 mt-5 py-5">
        <div className="mt-5 py-5 text-start normalTextToWhite " >
            <span className="titledesc" >
            Wie kann bei finanu.ch teilgenommen werden?
            </span>
            <div className="mt-3">
        <span className="subtitledesc" >
        Suche deinen Preis aus, fülle das Formular aus und du hast erfolgreich an der Verlosung teilgenommen.
        </span>
        </div>
        <div className="mt-4">
        <span className="titledesc" >
        Wer darf bei finanu.ch teilnehmen?
            </span>
            </div>
            <div className="mt-3">
        <span className="subtitledesc">
        Teilnahmeberechtigt sind alle Personen, welche Ihren Wohnsitz in der Schweiz und das 18. Lebensjahr vollendet haben. Der Teilnehmende <br /> bestätigt mit der Teilnahme, die Richtigkeit aller Angaben.
						
        </span>
        </div>
        <div className="mt-4">
        <span className="titledesc"  >
        Hinweis:
            </span>
            </div>
            <div className="mt-3">
        <span className="subtitledesc">
        Das Gewinnspiel steht in keiner Verbindung zum Europapark und wird in keiner Weise von anderen als der DL Finance.ch gesponsert, unterstützt oder organisiert.
        </span>
        
        </div>
        <div className="mt-4">
        <span className="titledesc" >
        Teilnahmeschluss:
            </span>
            
            </div>
            <span className="subtitledesc">31.07.2022</span>
        </div>
      </div>
    </div>
    </div>
  )
}

export default WLinksTwo