/** @format */

import Heading from "@/components/Heading";
import { marked } from "marked";
import { readFile } from "node:fs/promises";

export default async function TheracePage() {
  const html = await readFile("./content/reviews/the-race.md", "utf-8");
  const text = marked(html);
  return (
    <>
      <Heading>The Race CGI Review</Heading> {text}
    </>
  );
}
