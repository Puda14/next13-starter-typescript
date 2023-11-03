import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import AppTable from "@/components/app.table";

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/facebook">facebook</Link>
        </li>
        <li>
          <Link href="/tiktok">tiktok</Link>
        </li>
        <li>
          <Link href="/youtube">youtube</Link>
        </li>
      </ul>
      <AppTable />
    </div>
  );
}
