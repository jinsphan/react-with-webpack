import React from 'react';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 5
        }
    }

    onSubmit = () => {
        console.log('Submit');
    }

    render() {
        return (
            <div>
                <h1 className="txt-red">Hello Search {this.state.name}</h1>
                <img src="assets/images/amazon.png" alt="" />
            </div>
        );
    }
}

export default Search;
