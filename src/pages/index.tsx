import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import GlobalStyle from "../styles/global";
import Navbar from "../components/ui/Navbar";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <p>
        Welcome to DivNectar! I'm Sewdohe, the sites owner and creator. I've
        been a developer for almost a decade now. Not professionaly, however.
        Just freelance and hobby development.
      </p>

      <p>
        I've learned a lot over my years though...as a full-time Linux user I've
        modified my workflow and developer tools to be as efficient as possible.
        I've learned quite a few methods and tricks when coding as well!
      </p>

      <p>
        I made this site to share all the bits that I know here and there. Click
        the blog link up top and I hope you enjoy!
      </p>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
