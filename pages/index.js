import Head from 'next/head'
import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from 'next/router';

import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import clsx from "clsx";



export default function Index() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    router.push("/feed");
  }

 return (
   <div>
     <a href="/api/auth/login">Login</a>
     <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
       <dl className="mt-6 space-y-6 divide-y divide-gray-200">
         <ul>
           This is where we should have a main log in page. Here we need:
           <li>- to have an ability for people to log in/sign up/ etc.</li>
           <li>- urls to link to about and legal </li>
           <li>- a big pretty picture</li>
         </ul>
       </dl>
     </div>
   </div>
 );

};

