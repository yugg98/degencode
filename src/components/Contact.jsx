"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
export default function Contactus() {
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  const [error, setError] = useState("");
  const [data, setData] = useState({
    firstname: "",
    email: "",
    lastname: "",
    phonenumber: "",
    message: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+/;

    if (!regex.test(data.email)) {
      setError("Enter email");
    } else {
      setError("");
      setSuccess(true);
      try {
        axios.post("/api/send", data, {
          headers: {
            "Content-Type": "application/json",
          },
        });
      } catch (error) {
        console.error("Error adding data to Firestore: ", error);
      }
    }
  };
  return (
    <div className="relative isolate   mt-20 mb-10">
      <div className="!px-0 max-w-6xl mx-auto">
        <div className="mx-auto grid px-4 sm:px-6 lg:px-10 grid-cols-1 lg:grid-cols-2  ">
          <div className="relative  lg:static  py-12 pb-0 flex justify-end">
            <img src="/contactus.png" />
          </div>
          <form
            onSubmit={handleSubmit}
            className="md:py-16 py-10 md:px-10  px-4 contact"
          >
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <div className="gr-1 absolute" />

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-white"
                    >
                      First Name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="firstname"
                        value={data.firstname}
                        className="block w-full px-4  py-1.5 text-gray-900 bg-transparent shadow-sm border-b placeholder:text-gray-400  sm:text-sm sm:leading-6"
                        placeholder="John"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-white"
                    >
                      Last Name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="firstname"
                        value={data.firstname}
                        className="block w-full px-4  py-1.5 text-gray-900 bg-transparent shadow-sm border-b placeholder:text-gray-400  sm:text-sm sm:leading-6"
                        placeholder="Doe"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-white"
                    >
                      Email
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="firstname"
                        value={data.firstname}
                        className="block w-full px-4  py-1.5 text-gray-900 bg-transparent shadow-sm border-b placeholder:text-gray-400  sm:text-sm sm:leading-6"
                        placeholder="yourname@company.com"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-white"
                    >
                      Phonenumber
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="firstname"
                        value={data.firstname}
                        className="block w-full px-4  py-1.5 text-gray-900 bg-transparent shadow-sm border-b placeholder:text-gray-400  sm:text-sm sm:leading-6"
                        placeholder="Your Phone Number"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-white"
                    >
                      Message
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="firstname"
                        value={data.firstname}
                        className="block w-full px-4  py-1.5 text-gray-900 bg-transparent shadow-sm border-b placeholder:text-gray-400  sm:text-sm sm:leading-6"
                        placeholder="Your Message"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  className="rounded-full cursor-pointer bg-white px-6 text-sm py-2.5   font-semibold text-blue shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
}

export const FloatingForm = () => {
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  const [error, setError] = useState("");
  const [data, setData] = useState({
    firstname: "",
    email: "",
    lastname: "",
    phonenumber: "",
    message: "",
  });
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+/;

    if (!regex.test(data.email)) {
      setError("Enter email");
    } else {
      setError("");
      setSuccess(true);
      try {
        axios.post("/api/send", data, {
          headers: {
            "Content-Type": "application/json",
          },
        });
      } catch (error) {
        console.error("Error adding data to Firestore: ", error);
      }
    }
  };
  return (
    <form
    onSubmit={handleSubmit}
    className="md:py-16 py-10 md:px-10  px-4 "
  >
    <div className=" max-w-xl lg:mr-0 lg:max-w-lg">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <div className="gr-1 absolute" />

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-white"
            >
              First Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="firstname"
                value={data.firstname}
                className="block w-full px-4  py-1.5 text-gray-900 bg-transparent shadow-sm border-b placeholder:text-gray-400  sm:text-sm sm:leading-6"
                placeholder="John"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-white"
            >
              Last Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="firstname"
                value={data.firstname}
                className="block w-full px-4  py-1.5 text-gray-900 bg-transparent shadow-sm border-b placeholder:text-gray-400  sm:text-sm sm:leading-6"
                placeholder="Doe"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="sm:col-span-2">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-white"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="firstname"
                value={data.firstname}
                className="block w-full px-4  py-1.5 text-gray-900 bg-transparent shadow-sm border-b placeholder:text-gray-400  sm:text-sm sm:leading-6"
                placeholder="yourname@company.com"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="sm:col-span-2">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-white"
            >
              Phonenumber
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="firstname"
                value={data.firstname}
                className="block w-full px-4  py-1.5 text-gray-900 bg-transparent shadow-sm border-b placeholder:text-gray-400  sm:text-sm sm:leading-6"
                placeholder="Your Phone Number"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="sm:col-span-2">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-white"
            >
              Message
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="firstname"
                value={data.firstname}
                className="block w-full px-4  py-1.5 text-gray-900 bg-transparent shadow-sm border-b placeholder:text-gray-400  sm:text-sm sm:leading-6"
                placeholder="Your Message"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-end">
        <button
          type="submit"
          className="rounded-full cursor-pointer bg-white px-6 text-sm py-2.5   font-semibold text-blue shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Send Message
        </button>
      </div>
    </div>
  </form>
  )
}