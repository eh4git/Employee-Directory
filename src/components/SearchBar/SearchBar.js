import React from "react"


export default function SearchBar(props) {
    return (
        <div className="searchbox">
            <form className="form-inline">
                <div className="row ">
                 
                    <div className="col-6">
                        <input
                            className="form-control"
                            type="search"
                            placeholder="Enter Name Here"
                            aria-label="Search"
                            onChange={props.handleInputChange}
                        />
                    </div>  
                    
                </div>
            </form>
        </div>
    )
}