import Layout from "../components/layout";
import { useAuth0 } from "@auth0/auth0-react";
import { AuthRedirection } from "../components/auth";


export default function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (!user) {
    AuthRedirection();
    return <div/>;
  } else {
    return (
      <Layout title="Profile">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </dl>
        </div>
      </Layout>
    );
  }

  
}
