const Logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");

  return (
    <main>
      <h2>You have been successfully logged out!</h2>
    </main>
  );
};

export default Logout;
