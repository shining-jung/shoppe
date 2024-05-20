import { Link, Outlet } from "react-router-dom";

const Company = () => {
    return (
        <main className="mw">
            <h2>Our Story</h2>
            <div style={{ height: "300px", background: "tomato" }}>1dpth 관련 이미지가 들어가는곳</div>
            <nav style={{ display: "flex", justifyContent: "center", gap: "0.4rem", padding: "2rem 0" }}>
                <Link to="/company/ceo">CEO 인사말</Link>
                <Link to="/company/organization">조직도</Link>
            </nav>
            <Outlet></Outlet>
        </main>
    );
};

export default Company;
