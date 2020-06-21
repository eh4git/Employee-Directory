import React, { Component } from "react"


class Table extends Component {
   render(){
     return (
        <ul className="list-group">
        {props.users.map(result => (
           <tr>
           <td data-th="Image" className="align-middle">
             <img
               src={this.picture}
               alt={"profile image for " + this.firstname + " " + this.lastname}
               className="img-responsive"
             />
           </td>
           {/* <td data-th="Name" className="name-cell align-middle">
             {props.firstname} {props.lastname}
           </td>
           <td data-th="Phone" className="align-middle">
             {props.phone}
           </td>
           <td data-th="Email" className="align-middle">
             <a href={"mailto:" } target="__blank">
               {props.email}
             </a>
           </td>
           <td data-th="DOB" className="align-middle">
             {props.age}
           </td> */}
         </tr>
        ))}
      </ul>
    );
   }
    
    
  }
  
  export default Table;