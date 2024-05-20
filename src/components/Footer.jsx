import style from "../css/Footer.module.css";

const Footer = () => {
    return (
        <footer className={`${style.footer} mw`}>
            <nav>
                <a href="#">CONTACT</a>
                <a href="#">TERMS OF SERVICES</a>
                <a href="#">SHIPPING AND RETURNS</a>
            </nav>
            <a href="#">Give an email, get the newsletter.</a>
            <p>© 2021 Shelly. Terms of use and privacy policy.</p>
            <div>
                <a href="#">
                    <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
