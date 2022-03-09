import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";

import "./App.css";

// components & pages
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import SingleApp from "./pages/SingleApp";
import TrackerForm from "./pages/TrackerForm";
import TrackerTable from "./pages/TrackerTable";
import Stats from './pages/Stats';

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
            <Route path='stats' element={<Stats />} />
          </Routes>
        </section>
      </>
    </ApolloProvider>
  );
}

export default App;
