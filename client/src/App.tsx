import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";

import "./App.css";

// components
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import SingleApp from "./components/SingleApp";
import TrackerForm from "./components/TrackerForm";
import TrackerTable from "./components/TrackerTable";

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: "/graphql",
  cache: cache,
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
