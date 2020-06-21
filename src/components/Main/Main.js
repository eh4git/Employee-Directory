import React, { Component } from "react";
import SearchBar from "../SearchBar/SearchBar";
import API from "../../utils/API";
import Table from "../Table/Table"


export default class Main extends Component {
    state = {
        search: "",
        users: [],
        order: "decend",
        filteredUsers: []
    }

    componentDidMount() {
        API.getUsers().then(results => {
            console.log("results", results);
            this.setState({
                users: results.data.results
            }).then(()=>{
                this.setState({
                    filteredUsers: this.state.users
                })
            }).catch((err)=>console.log(err))
            console.log("employee data", this.state.users);
        })
    }
    //Sets state when change occurs
    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };
    render() {
        return (
            <div>
                <SearchBar
                    search={this.state.search}
                    handleInputChange={this.handleInputChange}
                />

                <div className="data-area">
                    < Table
                        users={this.state.users}
                        key={this.state.users.uuid}
                        firstname={this.state.users.name.first}
                        lastname={this.state.users.name.last}
                        picture={this.state.users.picture.large}
                        phone={this.state.users.phone}
                        email={this.state.users.email}
                        age={this.state.users.dob.age}
                    />
                </div>
            </div>
        )
    }
}






// import React from "react";
// import "../styles/DataBody.css";

// function DataBody({ users }) {
//   function formatDate(date) {
//     const dateArray = date.split("-");
//     const year = dateArray[0];
//     const month = dateArray[1];
//     const dayArray = dateArray[2].split("T");
//     const day = dayArray[0];
//     const formattedDate = [month, day, year].join("-");
//     return formattedDate;
//   }

//   return (
//     <tbody>
//       {users[0] !== undefined && users[0].name !== undefined ? (
//         users.map(({ login, name, picture, phone, email, dob }) => {
//           return (
//             <tr key={login.uuid}>
//               <td data-th="Image" className="align-middle">
//                 <img
//                   src={picture.medium}
//                   alt={"profile image for " + name.first + " " + name.last}
//                   className="img-responsive"
//                 />
//               </td>
//               <td data-th="Name" className="name-cell align-middle">
//                 {name.first} {name.last}
//               </td>
//               <td data-th="Phone" className="align-middle">
//                 {phone}
//               </td>
//               <td data-th="Email" className="align-middle">
//                 <a href={"mailto:" + email} target="__blank">
//                   {email}
//                 </a>
//               </td>
//               <td data-th="DOB" className="align-middle">
//                 {formatDate(dob.date)}
//               </td>
//             </tr>
//           );
//         })
//       ) : (
//         <></>
//       )}
//     </tbody>
//   );
// }

// export default DataBody;
