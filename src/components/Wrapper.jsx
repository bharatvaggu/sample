import React, { Component } from 'react';
import SubHeader from 'components/SubHeader.jsx';

export default class Wrapper extends Component {
    constructor(props) {
        super(props);
        let subHeaderLinks = headerLinks['HOME'].subheader;
        for (let i in subHeaderLinks) {
            if (subHeaderLinks[i].id == this.props.match.params.id) {
                this.wrapperUrl = subHeaderLinks[i].link;
                break;
            }
        }
    }

    render() {
        return (
            <div>
                <SubHeader header={'HOME'} active={this.props.match.params.id}/>
                    <iframe className="iframe-div" src={this.wrapperUrl}></iframe>
            </div>
        );
    }
}