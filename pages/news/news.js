import { Fragment } from "react";
import Link from 'next/link'
function news() {
  return (
    <Fragment>
      <h1>this is awesome</h1>
      <ul>
          <li>wowo</li>
          <li>nex</li>
          <li><Link href="/news/this is awesome">to /</Link></li>
      </ul>
    </Fragment>
  );
}

export default news;
