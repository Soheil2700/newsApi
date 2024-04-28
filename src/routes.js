import Guardian from "./Pages/Guardian";
import Main from "./Pages/Main";
import NewsApi from "./Pages/NewsApi";
import WorldApi from "./Pages/WorldApi";

export const routes = [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/newsApi",
    element: <NewsApi />,
  },
  {
    path: "/theguardian",
    element: <Guardian />,
  },
  {
    path: "/worldApi",
    element: <WorldApi />,
  },
];
