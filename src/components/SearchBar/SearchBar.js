import React from "react"


function SearchBar(props){
        return (
            <div className="searchbox">
                <form className="form-inline">
                    <input
                        className="form-control"
                        type="search"
                        placeholder="Search Here"
                        aria-label="Search"
                       onChange={props.handleInputChange}
                        //function has to sort and update state somehow thus casuing a rerender
                    />
                </form>
            </div>
        )
}

export default SearchBar;