import React from "react";
import "./Indexcard.css";

const Indexcard = () => {
  return (
    <>
    <div>
        <h2 className="index-heading">Index</h2>
        <div className="card-layout">
            <li className="card">
                <h3>Nifty</h3>
                <p>
                    25000 1%
                </p>
            </li>
            <li className="card">
                <h3>Bank Nifty</h3>
                <p>
                    50000 0.9%
                </p>
            </li>
            <li className="card">
                <h3>Fin Nifty</h3>
                <p>
                    50000 0.9%
                </p>
            </li>
        </div>
    </div>
    </>
  );
};

export default Indexcard;
