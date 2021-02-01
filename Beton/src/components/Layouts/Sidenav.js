import React, { Component } from 'react'
import { Sidenav, Toggle, Nav, Icon, Dropdown } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import { NavLink } from 'react-router-dom'


class Sidenav1 extends React.Component {
    constructor() {
        super();
        this.state = {
            expanded: true,
            activeKey: '1'
        };
        this.handleToggle = this.handleToggle.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }
    handleToggle() {
        if (this.state.expanded) {
            document.getElementById("mySidenav").style.width = "60px";
            document.getElementById("main").style.marginLeft = "60px";
        } else {
            document.getElementById("mySidenav").style.width = "250px";
            document.getElementById("main").style.marginLeft = "250px";
        }
        this.setState({
            expanded: !this.state.expanded
        });
    }
    handleSelect(eventKey) {
        this.setState({
            activeKey: eventKey
        });
    }
    render() {
        const { expanded } = this.state;

        return (

            <div className="sidenav" id="mySidenav">
                <Toggle onChange={this.handleToggle} checked={expanded} />
                <Sidenav
                    expanded={expanded}
                    defaultOpenKeys={['3', '4']}
                    activeKey={this.state.activeKey}
                    onSelect={this.handleSelect}
                >
                    <Sidenav.Body>
                        <Nav>
                            <NavLink to='/Homepage'>
                                <Nav.Item eventKey="1" icon={<Icon className="white-text" icon="dashboard" />}>
                                    Dashboard
                                </Nav.Item>
                            </NavLink>
                            <NavLink to='/Cluster'>
                                <Nav.Item eventKey="2" icon={<Icon className="white-text" icon="map" />}>
                                    Map
                            </Nav.Item>
                            </NavLink>
                            <NavLink to='/ReportPage'>
                                <Nav.Item eventKey="3" icon={<Icon className="white-text" icon="exclamation-triangle" />}>
                                    Report
                            </Nav.Item>
                            </NavLink>
                        </Nav>
                    </Sidenav.Body>
                </Sidenav>
            </div>

        );
    }
}

const instance = () => {
    return (
        <Sidenav1 appearance="subtle"/>
    )
}

export default instance
