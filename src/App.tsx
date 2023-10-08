import { RouterProvider } from "react-router-dom";
import { baseRoutes } from "./routes/BaseRoutes";


export const App = ()=> {
  return(
    <>
      <RouterProvider router={baseRoutes}/>
    </>
  );
}