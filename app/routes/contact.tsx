import type { Route } from "./+types/home";

import { ContactPageRender } from "~/features/contact/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact" },
    { name: "description", content: "Welcome to React Router!" }
  ];
}

export default function Contact() {
  return <ContactPageRender />;
}
