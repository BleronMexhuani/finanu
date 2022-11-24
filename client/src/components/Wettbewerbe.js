import React from "react";
import "../assets/css/wettbewerbe.css";
import { ReactComponent as Logo } from "../assets/images/wettbewerbelogo.svg";
import bern from "../assets/images/berncity.jpg";
import europa from "../assets/images/europapark.jpg";
import old from "../assets/images/oldcity.jpg";
import { Link } from "react-router-dom";

function Wettbewerbe() {
  return (
    <div>
      <div className="wrapDiv bodyCounterPadding container-xl px-4 px-xl-0">
        <div className="row justify-content-center">

          <div className="col-12 col-md-5">
            <div className="pb-3">
              <h2 className=" text-md-start firstBlueTitle fs-1" >
                Alle aktuellen Gewinnspiele von Finanu.ch
              </h2>
            </div>
            <div className="text-start">
              <span className="fs-5 fw-600">
                Lassen Sie sich die Gelegenheit nicht entgehen, an ausgewählten und beliebten Verlosungen teilzunehmen. Auch Sie können mit etwas Glück zu den unzähligen Gewinnern der tollen Wettbewerbe gehören. Probieren geht über Studieren!</span>
            </div>

          </div>
          <div className="col-12 col-md-5">
            <div className="mt-5 mb-5">
              <Logo className="img-fluid" />
            </div>

          </div>
        </div>
        <div className="col-12 col-md-10 justify-content-center mx-auto mt-5">
          <div className="row justify-content-center d-flex">
            <div className="col-12 col-md-6 mx-auto boxcard  ">

              <Link to='/wettbewerbe/1' className="text-decoration-none">
                <div className="card " >


                  <label className="premium-span-premium" id="premiumcc2">Teilnahmeschluss ist am 31.07.2023 </label>


                  <img src={bern} alt="" className="img-fluid img" />
                  <div className="card-body text-md-start">
                    <span className="titlebox normalTextToWhite" style={{ fontWeight: "bold" }}>
                      Städtetrip in die UNESCO-Weltkulturerbestätte Bern für 2
                      Personen{" "}
                    </span>
                    <p className="pt-2 subtitlebox normalTextToWhite" style={{ fontSize: "small" }}>
                      {" "}
                      Trage deine Angaben ein und nimm am Wettbewerb teil. Wir
                      wünschen bereits jetzt viel Glück!
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-12 col-md-6 mx-auto mt-4 mt-md-0 py-3 py-md-0 boxcard boxcardtwo ">
              <Link to='/wettbewerbe/2' className="card text-decoration-none" >
                <label className="premium-span-premium" id="premiumcc2">Teilnahmeschluss ist am 31.07.2023 </label>

                {/* <div className="col-12 col-md-6 mx-auto mt-4 mt-md-0 py-3 py-md-0 boxcard  "> */}
                <div className="card" >

                  <img src={europa} alt="" className="img-fluid img" />
                  <div className="card-body text-md-start">
                    <span className="titlebox normalTextToWhite" style={{ fontWeight: "bold" }}>
                      2-tägigen Europaparkausflug mit der Familie!{" "}
                    </span>
                    <p className="pt-2 subtitlebox normalTextToWhite" style={{ fontSize: "small" }}>
                      {" "}
                      Trage deine Angaben ein und nimm am Wettbewerb teil. Wir
                      wünschen bereits jetzt viel Glück!
                    </p>
                  </div>
                </div>
                {/* </div> */}
              </Link>
            </div>
            <div className="col-12 col-md-6 mx-auto boxcard mt-3 py-4 ">
              <Link to='/wettbewerbe/3' className="card text-decoration-none" >
                <label className="premium-span-premium" id="premiumcc2">Teilnahmeschluss ist am 31.07.2023 </label>
                <div className="card" >

                  <img src={old} alt="" className="img-fluid img" />
                  <div className="card-body text-md-start">
                    <span className="titlebox normalTextToWhite" style={{ fontWeight: "bold" }}>
                      Auszeit bei einem Wellness Wochenende in den Bergen!
                    </span>
                    <p className="pt-2 subtitlebox normalTextToWhite" style={{ fontSize: "small" }}>
                      {" "}
                      Trage deine Angaben ein und nimm am Wettbewerb teil. Wir
                      wünschen bereits jetzt viel Glück!
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-12 col-md-6 mx-auto boxcard mt-3 py-4 ">
              <Link to='/wettbewerbe/3' className="card text-decoration-none" >
                <label className="premium-span-premium" id="premiumcc2">Teilnahmeschluss ist am 31.07.2023 </label>
                <div className="card" >

                  <img src={old} alt="" className="img-fluid img" />
                  <div className="card-body text-md-start">
                    <span className="titlebox normalTextToWhite" style={{ fontWeight: "bold" }}>
                      Auszeit bei einem Wellness Wochenende in den Bergen!
                    </span>
                    <p className="pt-2 subtitlebox normalTextToWhite" style={{ fontSize: "small" }}>
                      {" "}
                      Trage deine Angaben ein und nimm am Wettbewerb teil. Wir
                      wünschen bereits jetzt viel Glück!
                    </p>
                  </div>
                </div>

              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wettbewerbe;
