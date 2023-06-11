import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

type Endpoint = {
  route: string;
  desc: string;
  code_sample: string;
};
type props = {
  endpoint: Endpoint;
  typeOfRequest: string;
};

const EndPoint = ({ endpoint, typeOfRequest }: props) => {
  return (
    <li className="list-item space-y-3 bg-gray-900 my-2 px-3 py-2 rounded-md">
      <p className="bg-inherit">
        <strong>Route</strong>: {"<BASE_URL>"}
        {endpoint.route}
      </p>
      <p className="bg-inherit text-lg">{endpoint.desc}</p>
      <pre className="whitespace-pre-wrap bg-gray-800 border border-gray-700 rounded-md p-4 text-sm font-mono text-gray-200">
        <SyntaxHighlighter language="typescript" style={dracula}>
          {endpoint.code_sample}
        </SyntaxHighlighter>
      </pre>

      {/* <button
        onClick={() => submitRequest(endpoint.route, typeOfRequest)}
        className="bg-yellow-600 hover:bg-white border border-yellow-600 hover:text-yellow-600 px-2 py-1 font-semibold rounded-md w-24 mx-auto"
      >
        Test it!
      </button> */}
    </li>
  );
};

export default EndPoint;

const submitRequest = async (endpoint: string, method: string) => {
  const res = await fetch(
    `https://patna-tourism-api.azurewebsites.net/${endpoint}`,
    {
      method: method,
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": process.env.API_KEY || "",
      },
    }
  );
};
