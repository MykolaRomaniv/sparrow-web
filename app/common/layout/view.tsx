import Footer from "common/footer";
import Header from "common/header";

const LayoutView: React.FC = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);

export default LayoutView;
