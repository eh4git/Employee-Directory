import React, { Component } from "react";
import SearchBar from "../SearchBar/SearchBar";
import API from "../../utils/API";
import Table from "../Table/Table"
import TableData from "../TableData/TableData"

export default class Main extends Component {
    state = {
        search: "",
        users: [],
        order: "decend",
        filteredUsers: []
    }
    rowGenerate = event =>{
        return this.state.filteredUsers.map((result) =>(
               < TableData
               key={result.login.uuid}
               firstName={result.name.first}
               lastName={result.name.last}
               img={result.picture.medium}
               email={result.email}
               phone={result.phone}
               age={result.dob.age} 
              />
        ));
      }

    componentDidMount() {
        API.getUsers().then(results => {
            console.log("results", results);
            this.setState({
                users: results.data.results,
                filteredUsers: results.data.results
            })
            // .then(()=>{
            //     this.setState({
            //         filteredUsers: this.state.users
            //     })
            // }).catch((err)=>console.log(err))
            // console.log("employee data", this.state.users);
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
                        rowGenerate= {this.rowGenerate}
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
