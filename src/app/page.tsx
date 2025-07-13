import { Metadata } from "next";

import HomePageFour from "./(homes)/home-6/page";


export const metadata: Metadata = {
  title: "Liko - Home Page",
};

export default function Home() {
  return (
    <>
    <HomePageFour/>
    </>
  );
}
