export const getAuthToken = () => {
  const token = localStorage.getItem("access_token");
  return token;
};
