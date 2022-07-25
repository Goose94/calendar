import React from "react";
import moment from "moment";

export default class Calendar extends React.Component {
  weekdayshort = moment.weekdaysShort();

  render() {
    let weekdayshortname = this.weekdayshort.map((day) => {
      return <th key={day}>{day}</th>;
    });
    return (
      <table className="week-day">
        <thead>
          <tr>{weekdayshortname}</tr>
        </thead>
      </table>
    );
  }
}
