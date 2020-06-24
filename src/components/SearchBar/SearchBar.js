import React from "react"


export default function SearchBar(props) {
    return (
        <div className="searchbox">
            <form className="form-inline">
                <div className="row">
                    <div className="col-4">
                        <p>Search for Employees here</p>
                        <input
                            className="form-control"
                            type="search"
                            placeholder="Search Here"
                            aria-label="Search"
                            onChange={props.handleInputChange}
                        //function has to sort and update state somehow thus casuing a rerender
                        />
                    </div>
                    <div className="col-4">
                        <button onClick={props.handleSort}>Sort</button>
                    </div>
                </div>
            </form>
        </div>
    )
}