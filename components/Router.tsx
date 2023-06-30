import { createContext, h, VNode } from "preact";
import { useContext } from "preact/hooks";

type RouteProps = {
  path: string;
  children: string | h.JSX.Element | (string | h.JSX.Element)[];
};

export const Route = ({ path, children }: RouteProps) => {
  const { url, prevPath } = useContext(RouteContext);

  if (url.pathname.startsWith(prevPath + path)) {
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
  { url, children }: {
    url: URL;
    children: VNode<RouteProps> | VNode<RouteProps>[];
  },
) => {
  return (
    <RouteContext.Provider value={{ prevPath: "", url }}>
      {children}
    </RouteContext.Provider>
  );
};
