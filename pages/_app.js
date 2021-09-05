import "tailwindcss/tailwind.css";
import { UserProvider } from "@auth0/nextjs-auth0";
import { Auth0Provider } from "@auth0/auth0-react";

function MyApp({ Component, pageProps }) {
  return (
    <Auth0Provider>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </Auth0Provider>
  );
}

export default MyApp;
