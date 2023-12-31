/** @format */

import Heading from "@/components/Heading";
import { marked } from "marked";
import { readFile } from "node:fs/promises";

export default async function TheracePage() {
  const text = await readFile("./content/reviews/the-race.md", "utf8");
  const html = marked(text, { headerIds: false, mangle: false });
  return (
    <>
      <Heading>The Race CGI Review</Heading>
      <img src='/images/the-race.jpg' alt='' className='rounded-lg' />
      <article
        dangerouslySetInnerHTML={{ __html: html }}
        className='prose text-white mx-auto'
      />
    </>
  );
}
