import Link from "next/link"
import { useUser } from "@auth0/nextjs-auth0";

export function Profile() {
  const { user, error, isLoading } = useUser();

  return (
    <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
      <div className="flex-shrink-0 group block">
        <div className="flex items-center">
          <div>
            <img
              className="inline-block h-10 w-10 rounded-full"
              src={user.picture}
              alt=""
            />
          </div>

          <div className="ml-3">
            <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">
              {user.name}
            </p>
            <Link href="/profile">
              <a className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
                View profile
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
