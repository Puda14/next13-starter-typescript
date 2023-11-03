"use client";
import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";

const Facebook = () => {
  const router = useRouter();

  return (
    <div>
      Facebook
      <div>
        <Button variant="danger">OK</Button>
        <button type="button" onClick={() => router.push("/")}>
          Back Home
        </button>
      </div>
    </div>
  );
};

export default Facebook;
