/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
"use client"; /*
This example requires some changes to your config:

```
// tailwind.config.js
module.exports = {
  // ...
  plugins: [
    // ...
    require('@tailwindcss/forms'),
  ],
}
```
*/
import { Fragment, useState } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { FloatingForm } from "./Contact";
import Link from "next/link";

const user = {
  name: "Chelsea Hagon",
  email: "chelsea.hagon@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Technology", href: "/technology", current: false },
  { name: "Marketing & Public Raise", href: "/marketing", current: false },
  { name: "Market Making", href: "/marketmaking", current: false },
  { name: "Incubation", href: "/incubation", current: false },
  { name: "Join Dc", href: "#", current: false },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-700 z-20">
      {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
      <Popover
        as="header"
        className={({ open }) =>
          classNames(
            open ? "fixed inset-0 z-40 overflow-y-auto" : "",
            "bg-black shadow-sm lg:static  lg:overflow-y-visible"
          )
        }
      >
        {({ open }) => (
          <>
            <div className="mx-auto  max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
              <div className="relative flex justify-between lg:gap-8 xl:grid xl:grid-cols-12">
                <div className="flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2">
                  <div className="flex flex-shrink-0 items-center">
                    <a href="/">
                      <img
                        className="h-10 w-auto"
                        src="/logo.svg"
                        alt="Your Company"
                      />
                    </a>
                  </div>
                </div>

                <div className="flex items-center absolute right-0 inset-y-0  outline-none">
                  <Popover className="">
                    <Popover.Button onClick={()=>setIsOpen(true)} className="bg-white rounded-sm p-6 py-2 mx-4">
                      Get In Touch
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-x-full" // Enter from left
                      enterTo="opacity-100 translate-x-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-x-0"
                      leaveTo="opacity-0 translate-x-full" // Leave to left
                    >
                      <Popover.Panel
                        as="nav"
                        className="absolute border-t h-screen border-gray-700 bg-black  right-[-150px] md:left-[-416px] left-[-116px]  md:w-[50vw] w-full  z-20"
                        aria-label="Global"
                      >
                        {isOpen && (
                        <div className="flex w-screen">
                          <div className="border-r h-screen h pt-4">
                            <Popover.Button>
                              <XMarkIcon className="w-8 h-8 text-white font-semibold mx-4" />
                            </Popover.Button>
                          </div>
                          <div className=" max-w-3xl w-full space-y-1 px-2 pb-3 pt-2 sm:px-4 bg-black">
                            <div className="ml-2 ">
                              <img src="/logo.svg" alt="" srcset="" />
                            </div>
                            <FloatingForm />
                          </div>
                        </div>
                        )}
                      </Popover.Panel>
                    </Transition>
                  </Popover>

                  <Popover.Button className="relative -mx-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Popover.Button>
                </div>
              </div>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-x-full" // Enter from left
              enterTo="opacity-100 translate-x-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-x-0"
              leaveTo="opacity-0 translate-x-full" // Leave to left
            >
              <Popover.Panel
                as="nav"
                className="absolute border-t border-gray-700 bg-black right-0 md:w-[50vw] w-full h-full z-10"
                aria-label="Global"
              >
                <div className="flex">
                  <div className="border-r h-screen h pt-4">
                    <Popover.Button>
                      <XMarkIcon className="w-8 h-8 text-white font-semibold mx-4" />
                    </Popover.Button>
                  </div>
                  <div className="mx-auto max-w-3xl w-full space-y-1 px-2 pb-3 pt-2 sm:px-4">
                    <div className="ml-2 ">
                      <img src="/logo.svg" alt="" srcset="" />
                    </div>
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? "page" : undefined}
                        className={classNames(
                          item.current ? " text-gray-100" : "hover:bg-gray-900",
                          "block py-2 px-3 border-b my-6 text-white text-2xl font-medium"
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                    <Popover.Button className="w-full">
                   
                  </Popover.Button>
                  </div>
                  
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}
