/** @format */

import Heading from "@/components/Heading";
import Link from "next/link";

export default function ReviewsPage() {
  return (
    <>
      <Heading>Hello reviews</Heading>
      <ul>
        <li>
          <Link href='/reviews/the-race'>The Race CGI's Reviews</Link>
        </li>
      </ul>
    </>
  );
}
