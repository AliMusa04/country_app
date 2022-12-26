import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  let body = document.getElementsByTagName("body")[0];

  const [countryData, setCountry] = useState([]);
  const [inp, SetInp] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((item) => {
      setCountry(item.data);
      setLoading(false);
    });
  }, [SetInp]);

  return (
    <>
      {loading ? (
        <div className="container">
          <div className="spinner-border" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      ) : (
        <div id="all_cards" className="all_content">
          <div className="all_content_top">
            <div className="all_content_top_search">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                version="1.1"
                viewBox="0 0 16 16"
                className="text-Dark_Gray"
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M15.504 13.616l-3.79-3.223c-0.392-0.353-0.811-0.514-1.149-0.499 0.895-1.048 1.435-2.407 1.435-3.893 0-3.314-2.686-6-6-6s-6 2.686-6 6 2.686 6 6 6c1.486 0 2.845-0.54 3.893-1.435-0.016 0.338 0.146 0.757 0.499 1.149l3.223 3.79c0.552 0.613 1.453 0.665 2.003 0.115s0.498-1.452-0.115-2.003zM6 10c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"></path>
              </svg>
              <input
                type="text"
                placeholder="Search for country..."
                onChange={(e) => SetInp(e.target.value)}
              />
            </div>

            <div className="all_content_top_filter">
              <div className="all_content_top_filter_text">
                Filter by region
              </div>
              <div className="all_content_top_filter_option">
                <svg
                  height="20"
                  width="20"
                  viewBox="0 0 20 20"
                  ariaHidden="true"
                  focusable="false"
                  className="css-8mmkcg">
                  <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="cards_contanier">
            {countryData
              .filter((country) =>
                country.name.common.toLowerCase().includes(inp)
              )
              .map((country) => {
                return (
                  <Link
                    key={country.name.common}
                    to={`/about/${country.name.common}`}>
                    <div key={country.name.common} className="card" id="cardId">
                      <img src={`${country.flags.png}`} alt="" />
                      <div id="card_content" className="card_text">
                        <h2>{country.name.common}</h2>
                        <p>
                          <span>Population:</span> {country.population}
                        </p>
                        <p>
                          <span>Region:</span> {country.region}
                        </p>
                        <p>
                          <span>Capital:</span> {country.capital}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}

            {/* <div className="card">
               <img
                 src="https://www.imgacademy.com/sites/default/files/legacyhotel6.jpg"
                 alt=""
               />
               <div className="card_text">
                 <h2>Saint Vincent and the Grenadines</h2>
                 <p>
                   <span>Population:</span> 4124132
                 </p>
                 <p>
                   <span>Region:</span> Bhamas
                 </p>
                 <p>
                   <span>Capital:</span> Kingston
                 </p>
               </div>
             </div> */}
          </div>
        </div>
      )}
    </>
    // <div id="all_cards" className="all_content">

    //   <div className="all_content_top">
    //     <div className="all_content_top_search">
    //       <svg
    //         stroke="currentColor"
    //         fill="currentColor"
    //         strokeWidth="0"
    //         version="1.1"
    //         viewBox="0 0 16 16"
    //         className="text-Dark_Gray"
    //         height="18"
    //         width="18"
    //         xmlns="http://www.w3.org/2000/svg">
    //         <path d="M15.504 13.616l-3.79-3.223c-0.392-0.353-0.811-0.514-1.149-0.499 0.895-1.048 1.435-2.407 1.435-3.893 0-3.314-2.686-6-6-6s-6 2.686-6 6 2.686 6 6 6c1.486 0 2.845-0.54 3.893-1.435-0.016 0.338 0.146 0.757 0.499 1.149l3.223 3.79c0.552 0.613 1.453 0.665 2.003 0.115s0.498-1.452-0.115-2.003zM6 10c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"></path>
    //       </svg>
    //       <input
    //         type="text"
    //         placeholder="Search for country..."
    //         onChange={(e) => SetInp(e.target.value)}
    //       />
    //     </div>

    //     <div className="all_content_top_filter">
    //       <div className="all_content_top_filter_text">Filter by region</div>
    //       <div className="all_content_top_filter_option">
    //         <svg
    //           height="20"
    //           width="20"
    //           viewBox="0 0 20 20"
    //           ariaHidden="true"
    //           focusable="false"
    //           className="css-8mmkcg">
    //           <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
    //         </svg>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="cards_contanier">
    //     {countryData
    //       .filter((country) => country.name.common.toLowerCase().includes(inp))
    //       .map((country) => {
    //         return (
    //           <Link
    //             key={country.name.common}
    //             to={`/about/${country.name.common}`}>
    //             <div key={country.name.common} className="card" id="cardId">
    //               <img src={`${country.flags.png}`} alt="" />
    //               <div id="card_content" className="card_text">
    //                 <h2>{country.name.common}</h2>
    //                 <p>
    //                   <span>Population:</span> {country.population}
    //                 </p>
    //                 <p>
    //                   <span>Region:</span> {country.region}
    //                 </p>
    //                 <p>
    //                   <span>Capital:</span> {country.capital}
    //                 </p>
    //               </div>
    //             </div>
    //           </Link>
    //         );
    //       })}

    //     {/* <div className="card">
    //       <img
    //         src="https://www.imgacademy.com/sites/default/files/legacyhotel6.jpg"
    //         alt=""
    //       />
    //       <div className="card_text">
    //         <h2>Saint Vincent and the Grenadines</h2>
    //         <p>
    //           <span>Population:</span> 4124132
    //         </p>
    //         <p>
    //           <span>Region:</span> Bhamas
    //         </p>
    //         <p>
    //           <span>Capital:</span> Kingston
    //         </p>
    //       </div>
    //     </div> */}
    //   </div>
    // </div>
  );
};

export default Home;
