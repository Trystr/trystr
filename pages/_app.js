import 'tailwindcss/tailwind.css'
import { Auth0Provider } from "@auth0/auth0-react";

function MyApp({ Component, pageProps }) {
  return(
  <Auth0Provider
    domain="dev-0tw3ahw4.us.auth0.com"
    clientId="znaCBTn6YtR8KYMMYC0rHVwXmR9b0iWF"
    redirectUri='http://localhost:3000'
  >
    <Component {...pageProps} />
  </Auth0Provider>)
}

export default MyApp
