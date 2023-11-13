"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import AppTable from "@/components/app.table";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:8000/blogs");
      const data = await res.json();
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div>
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
      <AppTable />
    </div>
  );
}
