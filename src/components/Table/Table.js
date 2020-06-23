import React, { Component } from "react"
// import TableData from "../TableData/TableData";
// import rowGenerate from "../TableData/TableData"

export default class Table extends Component {
  render() {
    return (
      <ul className="list-group">
          <table className="table">
            <thead>
               <tr>
              <th scope="col">Picture</th>
              <th scope="col">Name</th>
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