import React from "react";

export default function RecentConversions({ selectHandler, recentSearches }) {
  return (
    <select
      className='form-control mt-2'
      name='resent'
      // onChange={event => console.log(event.target.value)}
      // value={this.state.toCurrency}
    >
      {recentSearches.map((search, index) => (
        <option key={index}>{`${search._fromCurrency} to ${
          search._toCurrency
        } ->  ${search._result.toFixed(2)} -- ${search._time}`}</option>
      ))}
    </select>
  );
}
