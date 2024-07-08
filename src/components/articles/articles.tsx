"use client";

import { articleQuery } from "@/queries/get-articles";
import { useSuspenseQuery } from "@apollo/client";

export const Articles = () => {
  const { data } = useSuspenseQuery(articleQuery, {
    variables: {}
  });
  console.log('data', data)
  return (
    <></>
  )
}