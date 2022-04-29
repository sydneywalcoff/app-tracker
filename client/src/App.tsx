import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

import "./App.css";

// components
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import SingleApp from "./pages/SingleApp";
import TrackerForm from "./pages/TrackerForm";
import TrackerTable from "./pages/TrackerTable";

const cache = new InMemoryCache();
const httpLink = createHttpLink({
  uri: "/graphql"
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    ...headers,
    authorization: token ? `Bearer ${token}` : ''
  }
})

const client = new ApolloClient({
  cache: cache,
  link: authLink.concat(httpLink)
});

function App() {
  return (
    <ApolloProvider client={client}>
      <>
        <Header />
        <section className="flex">
          <NavBar />
          <Routes>
            <Route path="/" element={<TrackerForm />} />
            <Route path="applied" element={<TrackerTable />} />
            <Route path="applied/:jobId" element={<SingleApp />} />
          </Routes>
        </section>
      </>
    </ApolloProvider>
  );
}

export default App;
