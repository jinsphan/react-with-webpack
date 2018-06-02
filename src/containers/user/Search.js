import React from "react";

class Search extends React.Component {

    render() {
        return(
            <div>
                <h1 className="txt-red">Hello Search {process.env.NODE_ENV}</h1>
                <img src="assets/images/amazon.png" alt=""/>
            </div>
        )
    }
}

export default Search;