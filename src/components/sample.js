import React from "react";

export default function sample() {
  return (
    <div>
      <nav class='navbar navbar-expand-sm bg-light fixed-top shadow '>
        <div class='container'>
          <a href='index.html' class='navbar-brand text-dark'>
            CurrencyMaster
          </a>
          <button
            class='navbar-toggler custom-toggler'
            data-toggle='collapse'
            data-target='#navbarCollapse'
          >
            <span class='navbar-toggler-icon' />
          </button>
          <div class='collapse navbar-collapse' id='navbarCollapse'>
            <ul class='navbar-nav ml-auto '>
              <li class='nav-item'>
                <a href='#share-head-section py-0' class='nav-link'>
                  Share
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <!-- Home Section --> */}
      <div id='home-section'>
        <div class='dark-overlay'>
          <div class='home-inner container'>
            <div class='row'>
              <div class='col-lg-8 d-none d-lg-block'>
                <h1 class='display-4 text-dark'>
                  Get <strong>Latest Currency</strong> Conversion
                </h1>
                <div class='d-flex'>
                  <div class='p-4 align-self-start'>
                    <i class='fas fa-euro-sign text-secondary fa-2x ' />
                    <i class='fas fa-dollar-sign text-secondary fa-3x ml-2 mr-2 ' />
                    <i class='fas fa-money-bill-alt text-secondary fa-5x ' />
                  </div>
                </div>
              </div>
              <div class='col-lg-4'>
                <div class='card bg-primary border-custom-color text-center card-form shadow-lg p-3 mb-5 bg-white rounded'>
                  <div class='card-body'>
                    <h3 class='text-dark'>Check Current Value Now</h3>
                    <input class='form-control' placeholder='Amount' />
                    <select class='form-control mt-2' />
                    <select class='form-control mt-2' />
                    <button class='btn btn-sm bg-warning mt-3 btn-hover btn-hover color-1'>
                      Collect
                    </button>
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

{
  /* <div className='row align-items-center h-100'>
          <div className='col-6 mx-auto card'>
            <h5 className='text-center'>
              <span>Currency </span> Converter{" "}
              <span role='img' aria-label='money'>
                &#x1f4b5;
              </span>{" "}
            </h5>

            <div className='form-group card-body'>
              <label htmlFor='amount'>Amount</label>
              <input
                className='form-control form-control-sm'
                name='amount'
                type='text'
                value={this.state.amount}
                placeholder='Placeholder'
                id='amount'
                onChange={event =>
                  this.setState({ amount: event.target.value })
                }
              />

              <select
                className='form-control form-control-sm'
                name='from'
                onChange={event => this.selectHandler(event)}
                value={this.state.fromCurrency}
              >
                {this.state.currencies.map(cur => (
                  <option key={cur}>{cur}</option>
                ))}
              </select>
              <select
                className='form-control form-control-sm'
                name='to'
                onChange={event => this.selectHandler(event)}
                value={this.state.toCurrency}
              >
                {this.state.currencies.map(cur => (
                  <option key={cur}>{cur}</option>
                ))}
              </select>
              <button
                className='btn btn-success btn-sm'
                onClick={this.convertHandler}
              >
                Convert
              </button>
            </div>

            {this.state.result && <h3>{this.state.result}</h3>}
            <div>
              {this.state.recentSearches.length === 0 ? (
                ""
              ) : (
                <RecentConversions recentSearches={this.state.recentSearches} />
              )}
            </div> */
}
{
  /* </div> */
}
{
  /* </div> */
}
