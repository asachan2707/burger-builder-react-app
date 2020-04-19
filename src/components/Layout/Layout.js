import React from 'react';
import Aux from '../../hoc/Auxilliry';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Backdrop from '../UI/Backdrop/Backdrop';

const layout = (props) => (
    <Aux>
        <Toolbar />
        <div className={classes.DesktopOnly}>
            <Backdrop show='true' clicked={() => { }} />
        </div>
        <SideDrawer />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;
