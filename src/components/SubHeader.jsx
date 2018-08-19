/**
* View | Subheader Component
* subpackage    components
* author        Pranav Kulkarni
* since         29th June 2018
*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SubHeader extends Component {
    constructor(props) {
        super(props);
        this.showMorePopover = this.showMorePopover.bind(this);
    }

    componentWillUnmount() {
        $("li.header-items a span").addClass('d-none');
        $('li.header-items').removeClass('active');
    }

    showMorePopover() {
        $('#subheader-more-popover').popover('show');
    }

    componentDidMount() {
        $('#subheader-more-popover').popover({
            html: true,
            trigger: 'focus',
            content: function () {
                return $('.subheader-popover-ul').html();
            }
        })
        $(window).resize(function () {
            $('[data-toggle="popover"]').popover('hide');
        });
        calcSubHeaderWidth();
        $("li.header-items a span").addClass('d-none');
        $("li.header-items a span." + this.props.header).removeClass('d-none');
        if($('li.header-items').hasClass('active')) {
            $('li.header-items').removeClass('active');
        }
        $("li#" + this.props.header).addClass('active');
    }

    render() {
        let subHeaderLinks = headerLinks[this.props.header].subheader;
        let subHeader = [];
        for (let i in subHeaderLinks) {
            if (subHeaderLinks[i].id == this.props.active) {
                subHeader.push(
                    {
                        id: subHeaderLinks[i].id,
                        label: subHeaderLinks[i].label,
                        link: ''
                    }
                )
            }
            else {
                subHeader.push(subHeaderLinks[i]);
            }
        }
         
        return ( 
            <div className="subheader-main-div">
                <div className="sub-header-div d-none d-sm-none d-md-block">
                    <div className="row margin-0">
                        <div className="col-12 padding-0">
                            <nav role="navigation" id="subheader-nav-main">
                                <ul id="subheader-main">
                                    {
                                        subHeader.map(function (links, i) {
                                        if (links.link) {
                                                if(links.link_location == 'New Window') {
                                                    return <li id={links.id} key={i}> <a href={links.link} target={'_blank'} > {links.label} </a></li>;
                                                }
                                                else
                                                if(links.link_location == 'Same Window') {
                                                    return <li id={links.id} key={i}> <a href={links.link} target={'_self'} > {links.label} </a></li>;
                                                }
                                                else
                                                if(links.link_location == 'Wrapper') {
                                                    return <li id={links.id} key={i}> <Link to={'/wrapper/' + links.id }> {links.label} </Link></li>;
                                                }
                                                if(links.id == 'CP_ANALYTICS_REPORTS' || links.id == 'IMS_ANALYTICS_REPORTS' || links.id == 'RT_ANALYTICS_REPORTS' || links.id == 'TASKS_ANALYTICS_REPORTS' || links.id == 'ACTIVITY_LOG_ANALYTICS_REPORTS') {
                                                    return <li id={links.id} key={i}> <Link to={links.link} > {links.label}  <i style={{ cursor: 'pointer', marginLeft: '3px' }} className="fa fa-caret-down"></i> </Link></li>
                                                }
                                                return <li id={links.id} key={i}> <Link to={links.link} > {links.label} </Link> </li>
                                            }
                                            else
                                            return <li id={links.id} key={i} className="active"> {links.label} </li>                                    
                                        })
                                    }
                                    <li className="subheader-more hidden" data-width={50}>
                                        <i onClick={this.showMorePopover} tabIndex={0} id="subheader-more-popover" className="fa fa-ellipsis-h" data-placement="bottom" data-toggle="popover" style={{ cursor: 'pointer' }}></i>
                                        <div className="subheader-popover-ul" style={{ display: 'none' }}>
                                            <ul className="subheader-more-popover-links popover-links" />
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}
