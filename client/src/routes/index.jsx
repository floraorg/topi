import {createFileRoute} from "@tanstack/react-router";
import * as React from "react";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>i fucking hate my life !!</div>;
}
