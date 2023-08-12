import React from "react";
// import ReactImageMagnify from 'react-image-magnify';
import "./CookingDetail.css";
import Header from "../../Components/Header/Header";

const CookingDetail = () => (
  <div>
    <Header />
    <div className="prodcontainer">
      <div className="prodimg">
        <img className="cover" src="pho.jpg" alt="hello" />
      </div>
      <div className="proddetails">
        <div className="prodin">
          <div className="prodtitle">
            <h1>Pho</h1>
          </div>
          <hr />
          <div className="proddesc">
            <p>
              <strong>Recipe Description:</strong>
            </p>
            <br></br>
            <br></br>
            <p></p>
          </div>
          <hr />
          <div className="prodprice">
            <h3></h3>
          </div>
          <hr />
        </div>
      </div>
    </div>
  </div>
);

export default CookingDetail;
