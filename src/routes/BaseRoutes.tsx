import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Page2 } from "../component";
import Dashboard from "../component/Dashboard/Dashboard";
import Page1 from "../component/NavigationPages/Page1";

export const baseRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index path="/" element={<Dashboard />} />
      <Route path="/Page-1" element={<Page1 />} />
      <Route path="/Page-2" element={<Page2 />} />
      {/* <Route element={<CandidateLayout />}>
        <Route index path="/candidate" element={<AuthPage />} />
        <Route path="/candidate/:option" element={<AuthPage />} />
        <Route path="/candidate/:option/:id" element={<CandidateLayout />} />
      </Route> */}
    </Route>
  )
);
