import React, { Component } from "react";
import axios from "axios";

import RecentConversions from "./RecentConversions";

const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "https://example.com";

export default class CurrencyConverter extends Component {
  state = {
    result: null,
    fromCurrency: "USD",
    toCurrency: "GBP",
    amount: 1,
    currencies: [],
    recentSearches: [],
    time: new Date().toLocaleString()
  };

  // Initializes the currencies with values from the api
  componentDidMount() {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/" +
          "http://api.openrates.io/latest"
      )
      .then(response => {
        // Initialized with 'EUR' because the base currency is 'EUR'
        console.log(response);
        // and it is not included in the response
        const currencyAr = ["EUR"];
        for (const key in response.data.rates) {
          currencyAr.push(key);
        }
        this.setState({ currencies: currencyAr.sort() });
        if (localStorage.getItem("recentSearches") !== null) {
          const search = JSON.parse(localStorage.getItem("recentSearches"));
          this.setState({ localSearch: search });
          console.log(search);
        }
      })
      .catch(err => {
        console.log("Opps", err.message);
      });
  }

  // Event handler for the conversion
  convertHandler = () => {
    const { amount, recentSearches, fromCurrency, toCurrency } = this.state;
    if (fromCurrency !== toCurrency) {
      axios
        .get(
          "https://cors-anywhere.herokuapp.com/" +
            `http://api.openrates.io/latest?base=${fromCurrency}&symbols=${toCurrency}`
        )
        .then(response => {
          const result = amount * response.data.rates[toCurrency];
          this.setState({ result: result.toFixed(5) });
          if (amount !== "") {
            this.setState({
              recentSearches: [
                ...recentSearches,
                {
                  _fromCurrency: fromCurrency,
                  _toCurrency: toCurrency,
                  _result: result,
                  _amount: amount,
                  _time: this.state.time
                }
              ]
            });
            localStorage.setItem(
              "recentSearches",
              JSON.stringify(recentSearches)
            );
            console.log(recentSearches);
          }
        })
        .catch(err => {
          console.log("Opps", err.message);
        });
    } else {
      this.setState({ result: "You cant convert the same currency!" });
    }
  };

  // Updates the states based on the dropdown that was changed
  selectHandler = event => {
    console.log(event);
    if (event.target.name === "from") {
      this.setState({ fromCurrency: event.target.value });
    }
    if (event.target.name === "to") {
      this.setState({ toCurrency: event.target.value });
    }
  };

  render() {
    return (
      <div>
        <nav className='navbar navbar-expand-sm  fixed-top  '>
          <div className='container'>
            <a href='index.html' className='navbar-brand text-dark'>
              CurrencyMaster
            </a>
            <button
              className='navbar-toggler custom-toggler'
              data-toggle='collapse'
              data-target='#navbarCollapse'
            >
              <span className='navbar-toggler-icon' />
            </button>
            <div className='collapse navbar-collapse' id='navbarCollapse'>
              <ul className='navbar-nav ml-auto '>
                <li className='nav-item'>
                  <a href='#share-head-section py-0' className='nav-link'>
                    Share
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div id='home-section'>
          <div className='dark-overlay'>
            <div className='home-inner container'>
              <div className='row'>
                <div className='col-lg-8 d-none d-lg-block pt-4'>
                  <h1 className='display-4 text-dark'>
                    Get Latest <span className='t-pink'>Currency</span>{" "}
                    Conversion
                  </h1>
                  <div className='d-flex'>
                    <div className='p-4 align-self-start'>
                      <i className='fas fa-euro-sign text-secondary fa-2x ' />
                      <i className='fas fa-dollar-sign text-secondary fa-3x ml-2 mr-2 ' />
                      <i className='fas fa-money-bill-alt text-secondary fa-5x ' />
                    </div>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='card bg-primary border-custom-color text-center card-form shadow-lg p-3 mb-5 bg-white rounded'>
                    <div className='card-body'>
                      <h5 className='text-dark card-title'>
                        Currency Converter
                      </h5>
                      <input
                        className='form-control form-control-sm'
                        name='amount'
                        type='text'
                        value={this.state.amount}
                        placeholder='Amount'
                        id='amount'
                        onChange={event =>
                          this.setState({ amount: event.target.value })
                        }
                      />
                      <select
                        className='form-control mt-2'
                        name='from'
                        onChange={event => this.selectHandler(event)}
                        value={this.state.fromCurrency}
                      >
                        {this.state.currencies.map(cur => (
                          <option key={cur}>{cur}</option>
                        ))}
                      </select>
                      <select
                        className='form-control mt-2'
                        name='to'
                        onChange={event => this.selectHandler(event)}
                        value={this.state.toCurrency}
                      >
                        {this.state.currencies.map(cur => (
                          <option key={cur}>{cur}</option>
                        ))}
                      </select>
                      <button
                        className='btn btn-sm bg-warning mt-3 btn-hover color-1'
                        onClick={this.convertHandler}
                      >
                        Convert
                      </button>
                      <div>
                        {this.state.result && (
                          <h3 className='text-dark'>{this.state.result}</h3>
                        )}
                      </div>

                      <div>
                        <p className='text-left text-secondary'>
                          <small>Recent Conversions</small>
                        </p>
                        {this.state.recentSearches.length === 0 ? (
                          ""
                        ) : (
                          <RecentConversions
                            recentSearches={this.state.recentSearches}
                            selectHandler={this.selectHandler}
                          />
                        )}
                      </div>
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
}
