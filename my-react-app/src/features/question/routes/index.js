import React from "react";

const routesQuestion = [
  {
    path: "/questions",
    component: React.lazy(() => import("../index")),
    exact: true,
  },
  {
    path: "/questions/create",
    component: React.lazy(() => import("../pages/create")),
  },
];

export default routesQuestion;
