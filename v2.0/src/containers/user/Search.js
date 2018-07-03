import React from 'react';
import { connect } from "react-redux";

import {
    clubsAction
} from "actions"

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "Tinhs",
            error: "",
            isLoading: false,
        }
        this.form_data = {};
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const club_name = this.form_data.club_name.value;
        try {
            this.setState({
                isLoading: true,
                error: "",
            })
            await this.props.dispatch(clubsAction.fetchDataByName(club_name));
        } catch(err) {
            this.setState({
                error: err.message
            })
        } 
        this.setState({
            isLoading: false,
        })
    }

    render() {
        return (
            <div className="serach__container">
                <h4 className="text-danger">Search football clubs</h4>
                <form onSubmit={this.onSubmit} >
                    <div className="input-group mb-3">
                        <input ref={ref => { this.form_data.club_name = ref; }} type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="submit">Button</button>
                        </div>
                    </div>
                    <p className="text-danger">{this.state.error}</p>
                </form>
                <h4 className="text-success">Results {this.state.isLoading ? "..." : ""}</h4>
                {
                    this.props.clubs.map((club, index) => {
                        return (
                            <div key={index} className="card">
                                <div className="card-body">
                                    <p>Match number: <strong>{club.match_number}</strong></p>
                                    <p>Location: <strong>{club.location}</strong></p>
                                    <p>Date time: <strong>{club.datetime}</strong></p>
                                </div>
                            </div>
                        )
                    })
                }
                <br />
                <br />
                <br />
                <br />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        clubs: state.clubs
    }
}

export default connect(mapStateToProps)(Search);
