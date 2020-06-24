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
    // Input data into for employees in each row
    rowGenerate = event => {
        return this.state.filteredUsers.map((result) => (
            < TableData
                key={result.login.uuid}
                firstName={result.name.first}
                lastName={result.name.last}
                img={result.picture.large}
                email={result.email}
                phone={result.phone}
                age={result.dob.age}
            />
        ));
    }
// Wait for API 
    componentDidMount() {
        API.getUsers().then(results => {
            console.log("results", results);
            this.setState({
                users: results.data.results,
                filteredUsers: results.data.results
            })
        })
    }
    //Sort First Name alphabetically
    handleSort = (event) => {
        //check and update state
        if (this.state.order === "descend") {
            this.setState({
                order: "ascend"
            });
        } else {
            this.setState({
                order: "descend"
            });
        }
        console.log(this.state.order)
        const compareFnc = (a, b) => {
            if (this.state.order === "ascend") {
                // account for missing values
                if (a[event] === undefined) {
                    return 1;
                } else if (b[event] === undefined) {
                    return -1;
                }
                // numerically
                else if (event === "name") {
                    return a[event].first.localeCompare(b[event].first);
                }
                else if (event === "email") {
                    return a[event].email.localeCompare(b[event].first);
                }
                else {
                    return a[event] - b[event];
                }


            } else {
                // account for missing values
                if (a[event] === undefined) {
                    return 1;
                } else if (b[event] === undefined) {
                    return -1;
                }
                // numerically
                else if (event === "name") {
                    return b[event].first.localeCompare(a[event].first);
                }
                else if (event === "email") {
                    return b[event].email.localeCompare(a[event].first);
                } else {
                    return b[event] - a[event];
                }
            }

        }
        const sortedUsers = this.state.filteredUsers.sort(compareFnc);
        this.setState({ filteredUsers: sortedUsers });

    }

    //Sets state when change occurs
    handleInputChange = event => {
        console.log(event.target.value);
        const filter = event.target.value;
        const filteredList = this.state.users.filter(item => {
            // merge data together then see if user input is anywhere inside
            let values = Object.values(item).join("").toLowerCase();
            return values.indexOf(filter.toLowerCase()) !== -1;
        });
        this.setState({ filteredUsers: filteredList });
    };
    render() {
        return (
            <div>
                <SearchBar search={this.state.search} handleSort={this.handleSort} handleInputChange={this.handleInputChange} />
                <div className="data-area">
                    < Table handleSort={this.handleSort} rowGenerate={this.rowGenerate} />
                </div>
            </div>
        )
    }
}