import React, { Component } from 'react';
import Aux from '../../hoc/Auxilliry';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerToggleHandler = props => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    }

    sideDrawerCloseHandler = props => {
        this.setState({ showSideDrawer: false });
    }
    render() {
        return (
            <Aux>
                <Toolbar
                    state={this.state.SideDrawer}
                    sideDrawerClicked={this.sideDrawerToggleHandler} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerCloseHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;
