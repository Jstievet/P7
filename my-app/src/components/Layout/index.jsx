import { Outlet } from "react";
import Header from "../Header";
import Footer from "../Footer";

function Layout() {
  return (
    <main>
      <Header />

      <Outlet />

      <Footer />
    </main>
  );
}
export default Layout;
