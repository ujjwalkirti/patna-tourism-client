import React, { useState } from "react";
import "./MainSection.css";
import {
  delete_endpoints,
  get_endpoints,
  patch_endpoints,
  post_endpoints,
} from "./data";
import EndPoint from "./Endpoint";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { auth } from "../utils/Firebase";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { toast } from "react-toastify";

const MainSection = () => {
  const [user, setUser] = useState<any>({});
  const [apiKey, setApiKey] = useState<string>("");

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      setUser(user);
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
  const question = "font-bold text-3xl text-yellow-300 mb-4";
  const answer = "text-xl ";

  return (
    <div className="w-4/5 mx-auto">
      <div className="my-4">
        <p className={question}>What is this?</p>
        <p className={answer}>
          This is an API for the city of Patna, which provides information about
          famous tourist places, dining places, eateries, and worship places in
          the city.
        </p>
      </div>
      <div className="my-4">
        <p className={question}>What is the purpose?</p>
        <p className={answer}>
          The purpose of this API is to provide developers with a centralized
          and structured source of information about Patna's tourist attractions
          and amenities. By offering easy access to details about popular
          places, dining options, eateries, and worship places, developers can
          leverage this API to build applications that promote tourism, raise
          awareness about Patna's offerings, and enhance the overall experience
          of visitors to the city. This API serves as a valuable resource for
          developers who want to create tourism-related apps, travel guides,
          mapping services, or any other application that can showcase and
          highlight the attractions and facilities available in Patna.
        </p>
      </div>
      <div className="text-xl">
        <p className={question}>How to access it?</p>

        <p className="mb-5">
          We are calling the tourist destination and other entities as{" "}
          <span className="border-b-4 border-b-yellow-600">venues</span>, and
          all the venues are divided into{" "}
          <span className="border-b-4 border-b-yellow-600">types</span> based on
          what they are, for ex:
          <div className="w-11/12 mx-auto">
            <ul className="list-disc">
              <li className="list-item">Places of worship.</li>
              <li className="list-item">Restraunts</li>
              <li className="list-item">Eating Outlets</li>
              <li className="list-item">Museums and other Historical Places</li>
            </ul>
          </div>
        </p>
        <p className={answer}>
          We have a set of predefined endpoints which you can send requests to.
        </p>
        <p className={answer}>They are listed as follows:</p>
        <div className="flex flex-col items-center mt-5 w-full lg:w-10/12 mx-auto">
          <p className="mb-4">
            <span className="text-yellow-600 font-semibold">Note :</span> You
            will only be able to access the endpoints if you are attaching your
            API key in your headers, like this:
          </p>
          <pre className="whitespace-pre-wrap bg-gray-800 border border-gray-700 rounded-md p-4 text-sm font-mono text-gray-200 w-full">
            <SyntaxHighlighter
              showLineNumbers
              language="typescript"
              style={dracula}
            >
              {`
                  Header:
                  Key: X-API-Key
                  Value: YOUR_API_KEY

                  Here's an example Fetch request:

                  fetch('https://api.example.com/your-endpoint', {
                    method: 'GET',
                    headers: {
                      'Content-Type': 'application/json',
                      'X-API-Key': 'YOUR_API_KEY'
                    }
                  })
          `}
            </SyntaxHighlighter>
          </pre>
          {apiKey.length !== 0 ? (
            <p className="mt-5">
              Your{" "}
              <span className="border-b-4 border-b-yellow-600">API Key</span>{" "}
              is: {apiKey}
            </p>
          ) : (
            <>
              <p className="text-left px-2 mt-5 mx-auto rounded-md py-4">
                If you don't have one,
                {Object.keys(user).length === 0
                  ? "You will need to sign in and then generate one."
                  : "Click here to generate!"}
              </p>
              <button
                onClick={async () => {
                  const provider = new GoogleAuthProvider();
                  if (Object.keys(user).length === 0) {
                    signInWithPopup(auth, provider)
                      .then((result) => {
                        fetch("/add-email", {
                          body: JSON.stringify({
                            googleId: result.user.uid,
                            name: result.user.displayName,
                            email: result.user.email,
                          }),
                        });
                        toast.success(
                          "Successfully signed in with email " +
                            result.user.email
                        );
                      })
                      .catch((error) => {
                        toast.error(error.message);
                      });
                  } else {
                    const body = {
                      email: user.email,
                      uid: user.uid,
                      name: user.displayName,
                    };
                    fetch(`${process.env.REACT_APP_BASE_URL_DEV}/get-api-key`, {
                      method: "POST",
                      headers: {
                        "Content-type": "application/json; charset=UTF-8",
                      },
                      body: JSON.stringify(body),
                    })
                      .then((res) => res.json())
                      .then((data) => {
                        setApiKey(data.existingApiKey.key);
                      })
                      .catch((error) => {
                        toast.error(
                          "Sorry, something went wrong. Please try again."
                        );
                      });
                  }
                }}
                className="bg-yellow-600 px-2 py-1 rounded-md"
              >
                {Object.keys(user).length !== 0
                  ? "Generate API Key"
                  : "Sign In"}
              </button>
            </>
          )}
        </div>
        <p className="mt-5">Also remember,</p>
        <p className="text-center my-5 bg-gray-800 w-4/5 mx-auto rounded-md py-4">
          <span className="text-yellow-600 font-bold ">BASE_URL</span> =
          https://patna-tourism-api.azurewebsites.net/
        </p>

        <section className="w-11/12 mx-auto mt-5 flex flex-col gap-y-5">
          {/* get endpoints description */}
          <div>
            <p className="text-green-600 font-bold text-3xl">GET</p>
            <ol className="list-decimal space-y-4">
              {get_endpoints.map((endpoint, index) => (
                <EndPoint endpoint={endpoint} key={index} typeOfRequest="GET" />
              ))}
            </ol>
          </div>
          {/* post endpoints description */}
          <div>
            <p className="text-yellow-600 font-bold text-3xl">POST</p>
            <ol className="list-decimal space-y-4">
              {post_endpoints.map((endpoint, index) => (
                <EndPoint
                  endpoint={endpoint}
                  key={index}
                  typeOfRequest="POST"
                />
              ))}
            </ol>
          </div>
          {/* patch end point description */}
          <div>
            <p className="text-orange-600 font-bold text-3xl">PATCH</p>
            <ol className="list-decimal space-y-4">
              {patch_endpoints.map((endpoint, index) => (
                <EndPoint
                  endpoint={endpoint}
                  key={index}
                  typeOfRequest="PATCH"
                />
              ))}
            </ol>
          </div>
          {/* delete endpoint description */}
          <div>
            <p className="text-red-600 font-bold text-3xl">DELETE</p>
            <ol className="list-decimal space-y-4">
              {delete_endpoints.map((endpoint, index) => (
                <EndPoint
                  endpoint={endpoint}
                  key={index}
                  typeOfRequest="DELETE"
                />
              ))}
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainSection;
