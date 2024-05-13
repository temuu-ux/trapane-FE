"use client";
import Creator from "@/components/patron-home-page/Creator";
import { useEffect, useState } from "react";
import { PageDataType } from "@/utils/types";
export default function Page({ params }: { params: { slug: string } }) {
  const [pageData, setPageData] = useState<PageDataType>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://trapane-back.vercel.app/api/creator/pageData",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              creatorName: params.slug,
              patronId: localStorage.getItem("patronToken") || "",
            }),
          }
        );
        console.log(response);
        const data = await response.json();
        setPageData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="flex justify-center">
      {pageData && <Creator data={pageData} />}
    </div>
  );
}
