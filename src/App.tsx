import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

// Theme main: green: #00BFA6

import {
  ApolloClient,
  ApolloProvider,
  gql,
  InMemoryCache,
  useQuery,
} from "@apollo/client";
import config from "./aws-exports";

import Hire from "./assets/undraw_Hire.svg";

const { endpoint } = config.aws_cloud_logic_custom[0];

const query = gql`
  query {
    hello
  }
`;

function App() {
  const [count, setCount] = useState(0);
  const { loading, error, data } = useQuery(query);

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>{JSON.stringify(error)}</h3>;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{data.hello} + vite + react!</p>
        <p>
          <button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <img src={Hire} />
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri:
    process.env.NODE_ENV === "development"
      ? "http://localhost:4000/dev/graphql"
      : endpoint + "/graphql",
});

const AppWithProvider = () => {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
};

export default AppWithProvider;
