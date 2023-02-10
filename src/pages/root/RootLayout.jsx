import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <h1>Root</h1>
      <Outlet />
    </>
  );
};

export default RootLayout;
