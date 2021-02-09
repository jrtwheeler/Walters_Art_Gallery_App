import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHeart } from '@fortawesome/free-solid-svg-icons';

function Footer(props) {
    return (
        <footer className="footer card-footer text-muted text-center">
            <p>
                &copy;2021 Made with <FontAwesomeIcon icon={faHeart} /> and <FontAwesomeIcon icon={faCoffee} /> in Maryland.
                {props.children}
            </p>
        </footer>
    );
}

export default Footer;