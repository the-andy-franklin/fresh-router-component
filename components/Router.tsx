import { createContext, type JSX } from "preact";
import { useContext } from "preact/hooks";

type RouteProps = {
  path: string;
  children?: string | JSX.Element | (string | JSX.Element)[];
};

export const Route = ({ path, children }: RouteProps) => {
  const { url, prevPath } = useContext(RouteContext);

  const fullRoute = url.pathname.split("/");
  const prevRoute = (prevPath + path).split("/");

  const joinedFullRoute = fullRoute.slice(0, prevRoute.length).join("");
  const joinedPrevRoute = prevRoute.join("");

  if (joinedFullRoute === joinedPrevRoute) {
    return (
      <RouteContext.Provider value={{ url, prevPath: prevPath + path }}>
        {children}
      </RouteContext.Provider>
    );
  }

  return null;
};

const RouteContext = createContext({
  prevPath: "",
  url: new URL("https://localhost"),
});

export const Router = (
  { routeUrl, fileUrl, children }: {
    routeUrl: URL;
    fileUrl?: string;
    children?: string | JSX.Element | (string | JSX.Element)[];
  },
) => {
  const baseUrl = fileUrl?.match(/\/routes(\/.*)\/.+\.tsx?$/)?.[1] ?? "";

  return (
    <RouteContext.Provider value={{ prevPath: baseUrl, url: routeUrl }}>
      {children}
    </RouteContext.Provider>
  );
};
