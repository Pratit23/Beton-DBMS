import React, { Component } from 'react'
import { Sidenav, Toggle, Nav, Icon, Dropdown } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import { NavLink } from 'react-router-dom'


class Sidenav1 extends React.Component {
    constructor() {
        super();
        this.state = {
            expanded: false,
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
                <hr />
                <Sidenav
                    expanded={expanded}
                    defaultOpenKeys={['3', '4']}
                    activeKey={this.state.activeKey}
                    onSelect={this.handleSelect}
                >
                    <Sidenav.Body>
                        <Nav>
                            <NavLink to='/Homepage'>
                                <Nav.Item eventKey="1" icon={<Icon icon="dashboard" />}>
                                    Dashboard
                                </Nav.Item>
                            </NavLink>
                            <NavLink to='/Cluster'>
                            <Nav.Item eventKey="2" icon={<Icon icon="group" />}>
                                Map
                            </Nav.Item>
                            </NavLink>
                            <NavLink to='/ReportPage'>
                            <Nav.Item eventKey="3" icon={<Icon icon="group" />}>
                                Report
                            </Nav.Item>
                            </NavLink>
                            <Dropdown
                                placement="rightStart"
                                eventKey="4"
                                title="Advanced"
                                icon={<Icon icon="magic" />}
                            >
                                <Dropdown.Item eventKey="4-1">Geo</Dropdown.Item>
                                <Dropdown.Item eventKey="4-2">Devices</Dropdown.Item>
                                <Dropdown.Item eventKey="4-3">Loyalty</Dropdown.Item>
                                <Dropdown.Item eventKey="4-4">Visit Depth</Dropdown.Item>
                            </Dropdown>
                            <Dropdown
                                placement="rightStart"
                                eventKey="5"
                                title="Settings"
                                icon={<Icon icon="gear-circle" />}
                            >
                                <Dropdown.Item eventKey="5-1">Applications</Dropdown.Item>
                                <Dropdown.Item eventKey="5-2">Channels</Dropdown.Item>
                                <Dropdown.Item eventKey="5-3">Versions</Dropdown.Item>
                                <Dropdown.Menu eventKey="5-5" title="Custom Action">
                                    <Dropdown.Item eventKey="5-5-1">Action Name</Dropdown.Item>
                                    <Dropdown.Item eventKey="5-5-2">Action Params</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                    </Sidenav.Body>
                </Sidenav>
            </div>

        );
    }
}

const instance = () => {
    return (
        <div className="nav-wrapper">
            <Sidenav1 appearance="subtle" />
        </div>
    )
}

export default instance
