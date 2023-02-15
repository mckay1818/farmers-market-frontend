export const getAuthToken = () => {
  const token = localStorage.getItem("access_token");
  return token;
};

export const getUserRole = () => {
  const token = getAuthToken();
  const role = JSON.parse(atob(token.split(".")[1]["role"]));
  return role;
};
