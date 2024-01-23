import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
const TalentsyncAssesement = React.lazy(
  () => import("./pages/TalentsyncAssesement/index"),
);
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
    <Router>
      <Routes>
          <Route path="*" element={<NotFound />} />
        <Route
          path="/"
          element={<TalentsyncAssesement />}
        />
      </Routes>
    </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
