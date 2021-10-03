import React from "react";

const routesHome = [
  {
    path: "/",
    component: React.lazy(() => import("../index")),
  },
];

export default routesHome;
