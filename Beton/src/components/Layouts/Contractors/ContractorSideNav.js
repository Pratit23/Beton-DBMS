import React from 'react'
import { Sidenav, Toggle, Nav, Icon } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import { NavLink } from 'react-router-dom'
import { routes as Routes } from './Routes';
import GooeySwitch from '../../Buttons/GooeySwitch';


class ContractorSidenav extends React.Component {
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
                {
                    expanded ? (
                        <h3 className="white-text center-align" style={{ fontFamily: "'Lexend Deca', Arial", marginTop: "15px" }} >Beton</h3>
                    ) :
                        <h3 className="white-text center-align" style={{ fontFamily: "'Lexend Deca', Arial", marginTop: "15px" }} >B</h3>
                }
                <Sidenav
                    expanded={expanded}
                    defaultOpenKeys={['3', '4']}
                    activeKey={this.state.activeKey}
                    onSelect={this.handleSelect}
                >
                    <Sidenav.Body>
                        <Nav>
                            {
                                Routes.map(route => {
                                    return (
                                        <NavLink to={route.link} key={route.eventKey}
                                            onClick={route.eventKey == 99 ? (() => localStorage.clear()) : null}
                                        >
                                            <Nav.Item eventKey={route.eventKey} icon={<Icon className="white-text" icon={route.icon} />}>
                                                {route.name}
                                            </Nav.Item>
                                        </NavLink>
                                    )
                                })
                            }
                        </Nav>
                    </Sidenav.Body>
                </Sidenav>
                <div className="valign-wrapper center-align" style={expanded ? {
                    position: "fixed",
                    bottom: "20px",
                    left: "30px"
                } : {
                    position: "fixed",
                    bottom: "10px",
                    left: "2px"
                }}>
                    <GooeySwitch onChange={this.handleToggle} checked={expanded} />
                    <p style={expanded ? {
                        display: "inline-block",
                        width: "max-content",
                        margin: "0px 10px 0 10px",
                        transition: "width 1s",
                    } : {
                        display: "inline-block",
                        width: "0",
                        opacity: "0",
                        margin: "0px",
                        transition: "width 1s",
                    }}>Toggle Sidebar</p>
                </div>
            </div>

        );
    }
}

const instance = () => {
    return (
        <ContractorSidenav appearance="subtle" />
    )
}

export default instance