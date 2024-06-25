import Image from "next/image";
import { TestimonialCarousel,Education } from "tii-common-components";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      {/* <MyComponent /> */}
      <TestimonialCarousel content="Content as props"/>
      <Education content="Content as props"/>

      
    </main>
  );
}


