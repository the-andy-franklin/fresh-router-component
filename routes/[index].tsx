import { PageProps } from "$fresh/server.ts";
import { Route, Router } from "../components/Router.tsx";

export default function Home({ url }: PageProps) {
  return (
    <>
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
    </>
  );
}
