import "./details.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Details = () => {
  const { name } = useParams();

  const [counData, setCountData] = useState([]);

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/name/${name}`).then((item) => {
      setCountData(item.data);
    });
  }, [name]);

  return (
    <>
      {counData.map((item) => {
        return (
          <div className="details_country_div">
            <div className="button_div">
              <Link to="/">
                <button>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 _0 20 20"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                      clipRule="evenodd"></path>
                  </svg>
                  Back
                </button>
              </Link>
            </div>

            <div className="details_country_content">
              <img src={`${item.flags.png}`} alt="" />
              <div className="details_country_content_allText">
                <h1>{item.name.common}</h1>
                <div className="details_country_content_text">
                  <div className="details_country_content_text_left">
                    <p>
                      <span>Native Name: </span>
                      {item.name.common}
                    </p>
                    <p>
                      <span>Population: </span>
                      {item.population}
                    </p>
                    <p>
                      <span>Region: </span>
                      {item.region}
                    </p>
                    <p>
                      <span>Sub Region: </span>
                      {item.subregion}
                    </p>
                    <p>
                      <span>Capital: </span>
                      {item.capital}
                    </p>
                  </div>

                  <div className="details_country_content_text_right">
                    <p>
                      <span>Top Level Domain:</span>
                    </p>
                    <p>
                      <span>Currencies: </span>Eastern Caribbean dollar
                    </p>
                    <p>
                      <span>Languages: </span>English
                    </p>
                  </div>
                </div>
                <div className="details_country_content_text_bottom">
                  <div>Borders:</div>
                  <p>No Border</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {/* <div className="details_country_div">
        <div className="button_div">
          <button>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 20 20"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"></path>
            </svg>
            Back
          </button>
        </div>

        <div className="details_country_content">
          <img
            src="https://th.bing.com/th/id/OIP.qherGjahtN5NBhXV-pLyZQHaEo?pid=ImgDet&rs=1"
            alt=""
          />
          <div className="details_country_content_allText">
            <h1>Saint Vincent and the Grenadines</h1>
            <div className="details_country_content_text">
              <div className="details_country_content_text_left">
                <p>
                  <span>Native Name: </span>Saint Vincent and the Grenadines
                </p>
                <p>
                  <span>Population: </span>110,947
                </p>
                <p>
                  <span>Region: </span>Americas
                </p>
                <p>
                  <span>Sub Region: </span>Caribbean
                </p>
                <p>
                  <span>Capital: </span>Kingstown
                </p>
              </div>

              <div className="details_country_content_text_right">
                <p>
                  <span>Top Level Domain:</span>
                </p>
                <p>
                  <span>Currencies: </span>Eastern Caribbean dollar
                </p>
                <p>
                  <span>Languages: </span>English
                </p>
              </div>
            </div>
            <div className="details_country_content_text_bottom">
              <div>Borders:</div>
              <p>No Border</p>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Details;
