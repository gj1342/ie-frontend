import type { Route } from "./+types/home";
import { HomeTemplate } from "~/components/templates/home-template";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Innovative Sphere - Your next big idea, in orbit" },
    { name: "description", content: "Generate innovative project ideas with AI-powered creativity" },
  ];
}

export default function Home() {
  return <HomeTemplate />;
}
