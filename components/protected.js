import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/router";

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

  let pathIsProtected = unprotectedRoutes.indexOf(router.pathname) === -1;
  if (isBrowser() && !isAuthenticated && pathIsProtected) {
    router.push('/');
  }

  return children
};

export default ProtectedRoute;
