import { Fragment, useReducer, useRef, } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CodeIcon,
  DotsVerticalIcon,
  FlagIcon,
} from "@heroicons/react/solid";
import {
  ChatIcon,
  CurrencyDollarIcon,
  StarIcon,
} from "@heroicons/react/outline";
import clsx from "clsx";
import { Like } from "./liked";

const menuItems = [
  // { Icon: StarIcon, label: "Add to favorites", link: "#" },
  { Icon: CodeIcon, label: "Embed", link: "#" },
  { Icon: FlagIcon, label: "Report content", link: "#" },
];

const images = [
  "https://images.unsplash.com/photo-1552053831-71594a27632d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=912&q=80",
  "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1535&q=80",
  "https://images.unsplash.com/photo-1552053831-71594a27632d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=912&q=80",
];

function PostHeader({ name, time }) {
  return (
    <header className="flex space-x-3">
      <div className="flex-shrink-0">
        <img
          className="h-10 w-10 rounded-full"
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt={`Avatar of ${name}`}
        />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-gray-900">
          <a href="#" className="hover:underline">
            {name}
          </a>
        </p>
        <p className="text-sm text-gray-500">
          <time>{time}</time>
        </p>
      </div>
      <div className="flex-shrink-0 self-center flex">
        {/* TODO: TD082321 separate menu into component */}
        <Menu as="div" className="relative z-30 inline-block text-left">
          <div>
            <Menu.Button className="-m-2 p-2 rounded-full flex items-center text-gray-400 hover:text-gray-600">
              <span className="sr-only">Open options</span>
              <DotsVerticalIcon className="h-5 w-5" aria-hidden="true" />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                {menuItems.map((item) => (
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href={item.link}
                        className={clsx(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "flex px-4 py-2 text-sm"
                        )}
                      >
                        <item.Icon
                          className="mr-3 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span>{item.label}</span>
                      </a>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </header>
  );
}

function PostFooter({ liked }) {
  return (
    <footer className="py-2 w-full">
      <div className="flex mb-1 justify-between items-center">
        <div className="flex items-center">
          <Like liked={liked} />
          <button className="p-2 rounded-full flex items-center text-gray-400 hover:text-gray-600">
            <ChatIcon className="h-7 w-7 " />
          </button>
          <button className="flex items-center p-2 rounded-full flex items-center text-gray-400 hover:text-gray-600">
            <CurrencyDollarIcon className="h-7 w-7 mr-1" />
            SEND TIP
          </button>
        </div>
        <div className="flex items-center">
          <button className="-mr-2 p-2 rounded-full flex items-center text-gray-400 hover:text-gray-600">
            <StarIcon className="h-7 w-7" />
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="-mb-3 flex items-center text-sm text-gray-500">
          <span className="mr-2">
            <span className="font-bold">420</span> likes
          </span>
          &middot;
          <span className="ml-2">
            <span className="font-bold">69</span> comments
          </span>
        </div>
      </div>
    </footer>
  );
}

export default function Post() {
  const { name, time, liked } = {
    name: "Chelsea Hagon",
    time: "December 9 at 11:43 AM",
    liked: false,
  }; // TODO: replace me!
  const scrollContainer = useRef(null);

  const scrollLeft = () => {
    scrollContainer.current.scrollBy(-scrollContainer.current.clientWidth, 0);
  };
  const scrollRight = () => {
    scrollContainer.current.scrollBy(scrollContainer.current.clientWidth, 0);
  };

  return (
    <li className="list-none flex flex-col min-w-96 max-h-screen h-192 max-w-screen-md bg-white rounded-md shadow px-4 py-5 sm:px-6">
      <PostHeader name={name} time={time} />
      <div className="relative p-4">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>
      </div>
      <div
        className="relative w-full scrollbar-hide h-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-y-hidden overflow-x-visible transition-transform lg:aspect-none"
        style={{ scrollSnapType: 'x mandatory',  scrollBehavior: 'smooth' }}
        onScroll={(e) => console.log(e.target.scrollLeft)}
        ref={scrollContainer}
      >
        {images.map((src, index) => (
          <img
            key={src}
            className={clsx("absolute transition-all ease-in-out duration-1000 transform w-full object-center object-cover inset-0", { "translate-x-full": index !== 0, "translate-x-0": index === 0 })}
            style={{ '--tw-translate-x': `${index * 100}%`, scrollSnapAlign: 'start' }}
            src={src}
          />
        ))}
      </div>
      <section className="flex justify-between w-full">
        <button onClick={scrollLeft} className="">
          <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
        </button>
        <button onClick={scrollRight} className="">
          <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      </section>
      <PostFooter liked={liked} />
    </li>
  );
}
