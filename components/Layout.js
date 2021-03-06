import Nav from "./Nav";
import style from "../styles/Layout.module.css";
import Footer from "../components/Footer";
import BottomNav from "../components/NavBar";
import Background from "../components/Background";

const Layout = ({ children }) => {
  return (
    <>
      <Background />
      <Nav />
      <div>
        <main>{children}</main>
      </div>
      <BottomNav />
    </>
  );
};

export default Layout;
