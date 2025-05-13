 
import type { ReactNode } from "react";
import Meta from "../SEO/Meta";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Meta />
      {children}
    </>
  );
}

export default Layout;
