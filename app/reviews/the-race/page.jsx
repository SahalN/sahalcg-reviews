/** @format */

import Heading from "@/components/Heading";
import { marked } from "marked";
import { readFile } from "node:fs/promises";

export default async function TheracePage() {
  const text = await readFile("./content/reviews/the-race.md", "utf-8");
  const html = marked(text, { hederIds: false, mangle: false });
  return (
    <>
      <Heading>The Race CGI Review</Heading>
      <article dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
