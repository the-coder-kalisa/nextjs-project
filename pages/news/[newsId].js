import React from "react";
import { useRouter } from "next/router";

function news() {
  const router = useRouter();
  const {newsId} = router.query;
  console.log(newsId)
  return <div>news</div>;
}

export default news;
