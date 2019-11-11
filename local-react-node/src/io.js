import React, { Component } from "react";
import { connect } from "react-redux";
import { postUsers } from "./actions";
import $ from 'jquery';

class IO extends Component {

	componentDidMount() {
        this.props.postUsers();
    }

    componentDidUpdate(){
        console.log("Did updated", this.props.data.fetchRes.posts);
        $.ajax(
            {
                url:'./template.txt',
                async:false,
                success:(res)=>{
                    console.log(res);
                }
            }
        )
    }

	render() {
		return <div></div>;
	}
}

const mapStateToProps = (state) => {
    console.log("update", state)
	return { data: state };
};

export default connect(
	mapStateToProps,
	{ postUsers }
)(IO);
