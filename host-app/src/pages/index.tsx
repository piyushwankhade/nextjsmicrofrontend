import dynamic from "next/dynamic";
 
const Header = dynamic(
  () => import("header/component/Header").then((m) => m.Header || console.log(m)),
  {
    ssr: false,
  }
);
 
export default function Home() {
  return (
    <>
      <h1>Micro-frontends Next JS sdsd</h1>
 
      <Header />
    </>
  );
}