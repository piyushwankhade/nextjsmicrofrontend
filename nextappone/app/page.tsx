import Image from "next/image";
import { MyComponent } from 'my-nextjs-package';
import { TestimonialCarousel } from 'my-nextjs-package';
import { Education } from 'my-nextjs-package';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      {/* <MyComponent /> */}
      <TestimonialCarousel content="Content as props"/>
      <Education content="Content as props"/>

      
    </main>
  );
}
