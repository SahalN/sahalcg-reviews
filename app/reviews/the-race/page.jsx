/** @format */

import Heading from "@/components/Heading";
import { readFile } from "node:fs/promises";

export default async function TheracePage() {
  const html = await readFile("./content/reviews/the-race.md", "utf-8");
  return (
    <>
      <Heading>The Race CGI Review</Heading> {html}
    </>
  );
}
