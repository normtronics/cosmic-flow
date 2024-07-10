"use client"
import { mixQuery } from "@/queries/get-mixes";
import { useSuspenseQuery } from "@apollo/client";


export const Mixes = () => {
  const { data } = useSuspenseQuery<any>(mixQuery);
  return (
    <></>
  )
}