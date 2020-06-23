import React, { Component } from "react"


export default class TableData extends Component {
    render() {
        return (
            <tr>
                <td data-th="Image" className="align-middle">
                    <img
                        src={this.props.img}
                        alt={"profile image for " + this.props.firstName + " " + this.props.lastName}
                        className="img-responsive"
                    />
                </td>
                <td data-th="Name" className="name-cell align-middle">
                    {this.props.firstName} {this.props.lastName}
                </td>
                <td data-th="Phone" className="align-middle">
                    {this.props.phone}
                </td>
                <td data-th="Email" className="align-middle">
                    <a href={"mailto:"} target="__blank">
                        {this.props.email}
                    </a>
                </td>
                <td data-th="DOB" className="align-middle">
                    {this.props.age}
                </td>
            </tr>
        )
    }
}