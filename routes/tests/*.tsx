import { PageProps } from "$fresh/server.ts";
import { Route, Router } from "../../components/Router.tsx";
import { Sidebar } from "../../components/Sidebar.tsx";

export default function Home(props: PageProps) {
  return (
    <div className="h-screen bg-gray-800 overflow-hidden flex">
      <Sidebar />
      <div className="flex flex-col flex-grow gap-2 justify-center items-center text-white">
        <Router
          routeUrl={props.url}
          fileUrl={import.meta.url}
        >
          <Route path="/home">
            <p>home</p>
            <Route path="/pizza">
              <p>pizza</p>
            </Route>
          </Route>
          <Route path="/home-pizza">
            <p>home-pizza</p>
          </Route>
        </Router>
      </div>
    </div>
  );
}
