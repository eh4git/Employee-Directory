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
          <table className="table">
            <thead>
               <tr>
              <th scope="col" onClick={()=>{this.props.handleSort("pictures")}}>Picture</th>
              <th scope="col" onClick={()=>{this.props.handleSort("name")}}>Name</th>
              <th scope="col" onClick={()=>{this.props.handleSort("phone")}}>Phone</th>
              <th scope="col" onClick={()=>{this.props.handleSort("email")}}>Email</th>
              <th scope="col" onClick={()=>{this.props.handleSort("age")}}>Age</th>
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