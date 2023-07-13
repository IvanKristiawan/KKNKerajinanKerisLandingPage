import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <div >
              <img style={{border:"2px solid black", borderRadius:"10px"}} src="img/keris.jpg" className="img-responsive" alt="" />{" "}
            </div>
            
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Tentang Kami</h2>
              <div style={{textAlign:"justify"}}>
                <p>{props.data ? props.data.paragraph : "loading..."}</p>
              </div>
              
              <h3>Kenapa Memilih Kami?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
