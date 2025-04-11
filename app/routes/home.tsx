import type { Route } from "./+types/home";

import { HomePageRender } from "~/features/homepage/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home" },
    { name: "description", content: "Welcome to React Router!" }
  ];
}

export default function Home() {
  return <HomePageRender />;
}
