import React from "react";

function Footer(props) {
    return (
        <footer className="footer card-footer text-muted text-center">
            <p>
                &copy;
                2021 Made with love and coffee in Maryland.
                {props.children}
            </p>
        </footer>
    );
}

export default Footer;