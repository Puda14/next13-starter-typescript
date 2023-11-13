"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import AppTable from "@/components/app.table";
import { useEffect } from "react";
import React from "react";
import useSWR from "swr";

export default function Home() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div>{data?.length}</div>
      {/* <ul>
        <li>
          <Link href="/facebook">facebook</Link>
        </li>
        <li>
          <Link href="/tiktok">tiktok</Link>
        </li>
        <li>
          <Link href="/youtube">youtube</Link>
        </li>
      </ul> */}
      <AppTable blogs={data} />
    </div>
  );
}
