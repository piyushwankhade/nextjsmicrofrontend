import Image from "next/image";
import {TestimonialCarousel,Education,Categories}  from "@piyushwankhade/my-nextjs-package";
//import { TestimonialCarousel, Education } from "my-nextjs-package";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      {/* <MyComponent /> */}

      {/* <Categories/> */}
      <TestimonialCarousel/>
      {/* <Education content="Content as props"/> */}

      
    </main>
  );
}


