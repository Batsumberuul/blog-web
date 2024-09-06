import Header from "../component/Header";
import Footer from "../component/Footer";

const Layout = (props) => {
  const { children } = props;
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
