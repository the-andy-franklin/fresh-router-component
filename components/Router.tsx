import { VNode } from "preact";

type RouteProps = {
  path: string;
  children: VNode | string;
};

export const Route = ({ path, children }: RouteProps) => {
  if (typeof children === "string") return <>{children}</>;

  return children;
};

export const Router = (
  { url, children }: { url: URL; children: VNode<RouteProps>[] },
) => {
  const child = children.find((child: VNode<RouteProps>) =>
    child.props.path === url.pathname
  );

  return child ?? null;
};
