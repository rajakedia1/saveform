import React from 'react';
import Styles from './Nav.scss';

function Nav() {
    return (
        <div className={Styles["nav"]}>
            <div className={Styles["left"]}>
                <div className={Styles["title"]}>Save form</div>
            </div>
        </div>
    );
}

export default Nav;