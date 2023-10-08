
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
  } from "react-router-dom";
import Dashboard from "../component/Dashboard/Dashboard";
 
  
  
  export const baseRoutes = createBrowserRouter(
    createRoutesFromElements(
      <Route>
  
        <Route index path="/" element={<Dashboard />} />
        {/* <Route path="" element={} />
        <Route path="" element={} />
        <Route element={<CandidateLayout />}>
          <Route index path="/candidate" element={<AuthPage />} />
          <Route path="/candidate/:option" element={<AuthPage />} />
          <Route path="/candidate/:option/:id" element={<CandidateLayout />} />
        </Route> */}
  
      </Route>
    )
  );