import React from "react";

const date = new Date();
const year = date.getFullYear();

function Footer() {

    return <footer className="footer"><p className="footer p">copyright@</p>{year}</footer>;
}

export default Footer;

