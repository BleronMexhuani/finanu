import React from "react";
import "../assets/css/wettbewerbe.css";
import logo from "../assets/images/wettbewerbe.svg";
import bern from "../assets/images/berncity.jpg";
import europa from "../assets/images/europapark.jpeg";
import old from "../assets/images/oldcity.jpg";
import { Link } from "react-router-dom";
function Wettbewerbe() {
  return (
    <div>
      <div className="wrapDiv py-5 container-xl px-4 px-xl-0">
        <div className="row">
          <div className="col-12 col-md-5">
            <h2 className=" text-md-start" style={{fontSize:"30px"}}>
            Aktuelle Gewinnspiele und Wettbewerbe von
              <div className="mt-5 mb-5">
                <img src={logo} alt="" style={{ width: "75%" }} />
              </div>
            </h2>
          </div>
          <div className="col-12 col-md-7">
            <div className="row">
              <div className="col-12 col-md-6 mx-auto cardcity  ">
                  <div class="card " style={{ width: "18rem" }}>
                    <img src={bern} alt="" className="img-fluid img" />
                    <div class="card-body text-md-start">
                      <span style={{ fontWeight: "bold" }}>
                        Städtetrip in die UNESCO-Weltkulturerbestätte Bern für 2
                        Personen{" "}
                      </span>
                      <p className="pt-2" style={{ fontSize: "small" }}>
                        {" "}
                        Trage deine Angaben ein und nimm am Wettbewerb teil. Wir
                        wünschen bereits jetzt viel Glück!
                      </p>
                    </div>
                  </div>
              </div>
              <div className="col-12 col-md-6 mx-auto cardcity ">
                <div class="card" style={{ width: "18rem" }}>
                  <img src={europa} alt="" className="img-fluid img" />
                  <div class="card-body text-md-start">
                    <span style={{ fontWeight: "bold" }}>
                      2-tägigen Europaparkausflug mit der Familie!{" "}
                    </span>
                    <p className="pt-2" style={{ fontSize: "small" }}>
                      {" "}
                      Trage deine Angaben ein und nimm am Wettbewerb teil. Wir
                      wünschen bereits jetzt viel Glück!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 mx-auto cardcity mt-3 py-4 ">
                <div class="card" style={{ width: "18rem" }}>
                  <img src={old} alt="" className="img-fluid img" />
                  <div class="card-body text-md-start">
                    <span style={{ fontWeight: "bold" }}>
                      Auszeit bei einem Wellness Wochenende in den Bergen!
                    </span>
                    <p className="pt-2" style={{ fontSize: "small" }}>
                      {" "}
                      Trage deine Angaben ein und nimm am Wettbewerb teil. Wir
                      wünschen bereits jetzt viel Glück!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wettbewerbe;
