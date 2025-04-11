import type { Route } from "./+types/home";

import { ProfilePageRender } from "~/features/profile/profile";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Profile" },
    { name: "description", content: "Welcome to React Router!" }
  ];
}

export default function Profile() {
  return <ProfilePageRender />;
}
