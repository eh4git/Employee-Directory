import React, { Component } from "react"
// import TableData from "../TableData/TableData";
// import rowGenerate from "../TableData/TableData"

export default class Table extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul className="list-group">
        <table className="table table-striped">
          <thead className="tableHead">
            <tr>
              <th scope="col">Picture</th>
              <th scope="col" onClick={() => { this.props.handleSort("name") }}>Name (click to sort)</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">Age</th>
            </tr>
          </thead>

          <tbody>
            {this.props.rowGenerate()}
          </tbody>
        </table>
      </ul>
    );
  }
}