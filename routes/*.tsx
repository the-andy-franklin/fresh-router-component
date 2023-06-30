import { PageProps } from "$fresh/server.ts";
import { Route, Router } from "../components/Router.tsx";
import { Sidebar } from "../components/Sidebar.tsx";

export default function Home({ url }: PageProps) {
  return (
    <div className="h-screen bg-gray-800 overflow-hidden flex">
      <Sidebar />
      <div className="flex flex-col flex-grow gap-2 justify-center items-center text-white">
        <Router url={url}>
          <Route path="/home">
            home
            <Route path="/1">
              <p>
                home/1
              </p>
              <Route path="/2">
                <p>
                  home/2
                </p>
              </Route>
              <Route path="/21">
                <p>
                  home/21
                </p>
              </Route>
            </Route>
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
