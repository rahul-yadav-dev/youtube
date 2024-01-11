import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { Router, RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchResult from "./components/SearchResult";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
      {
        path: "/search_query",
        element: <SearchResult />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="App overflow-x-hidden">
        <Head />
        <RouterProvider router={appRouter} />
        {/**
         * Head
         * Body
         * Sidebar
         * MenuItems
         * MainContainer
         * ButtonList
         * VideoContainer
         * VideoCard
         */}
      </div>
    </Provider>
  );
}

export default App;
