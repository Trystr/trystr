import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/router";

//check if you are on the client (browser) or server
const isBrowser = () => typeof window !== "undefined";

const ProtectedRoute = ({ children }) => {
  //Identify authenticated user
  const { isAuthenticated } = useAuth0();
  const router = useRouter();

  let unprotectedRoutes = [
      '/about',
      '/legal',
      '/'
  ];

  debugger;
  let pathIsProtected = unprotectedRoutes.indexOf(router.pathname) === -1;
  if (isBrowser() && !isAuthenticated && pathIsProtected) {
    router.push('/');
  }

  return children
};

export default ProtectedRoute;