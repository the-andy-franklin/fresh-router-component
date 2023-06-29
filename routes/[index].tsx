import { PageProps } from "$fresh/server.ts";
import { Route, Router } from "../components/Router.tsx";
import { Sidebar } from "../components/Sidebar.tsx";

export default function Home({ url }: PageProps) {
  return (
    <div className="h-screen bg-gray-800 overflow-hidden flex">
      <Sidebar />
      <div className="flex flex-grow justify-center items-center">
        <Router url={url}>
          <Route path="/home">
            <h1>
              root
            </h1>
          </Route>
          <Route path="/pizza">
            <p>
              pizza
            </p>
          </Route>
        </Router>
      </div>
    </div>
  );
}
