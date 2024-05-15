import { Link, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <header>
        <nav className="w-full h-16 bg-yellow-400 flex items-center px-8">
          <Link to="/">
            <h1 className="text-3xl font-bold">relyco-test</h1>
          </Link>
        </nav>
      </header>
      <main className="pt-10 pb-10">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
