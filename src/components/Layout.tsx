import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main id="main-content" className="flex-1">
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
