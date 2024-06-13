import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const Protected = () => {
  const { auth } = useSelector((state) => state);

  //console.log("auth ", auth);
  // console.log("auth token ", auth.token);

  return auth && auth.token ? <Outlet /> : <Navigate to="/login" />;
};

export default Protected;
