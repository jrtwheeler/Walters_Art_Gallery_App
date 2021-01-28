import React from "react";

function Footer(props) {
    return (
<footer className="footer card-footer text-muted text-center">
<p>
    {props.children}
</p>
</footer>
);
}

export default Footer;