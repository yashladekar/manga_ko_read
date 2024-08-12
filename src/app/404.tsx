import Image from "next/image";
import Link from "next/link";
import Zoro from "public/images/zoro.png";
import { ReactNode, useRef } from "react";
import { useHover } from "usehooks-ts";
// import Head from "./components/shared/Head";
// import Section from "./components/shared/Section";
// import usePreviousRoute from "./context/HistoryRouterContext";

function NotFoundPage() {
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);
  //   const hsRouteCtx = usePreviousRoute();

  return (
    <div className="min-h-screen w-full bg-background text-white">
      {/* <Head title={"Opps! you have lost like zoro"} /> */}
    </div>
  );
}

export default NotFoundPage;
