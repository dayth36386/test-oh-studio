import type { Route } from "./+types/home";

import { QusetionPageRender } from "~/features/qusetion/qusetion";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Qusetion" },
    { name: "description", content: "Welcome to React Router!" }
  ];
}

export default function Profile() {
  return <QusetionPageRender />;
}
