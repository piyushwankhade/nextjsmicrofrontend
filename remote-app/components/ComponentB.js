import Image from 'next/image'
//import styles from '../styles/Mario.module.css'
const ComponentB = () => {
  return (
    <main className="class anme">
      <Image
        src="https://upload.wikimedia.org/wikipedia/en/a/a9/MarioNSMBUDeluxe.png"
        alt="Mario"
        width={240}
        height={413}
      />
      <h1 className="sd">
        G'day! I'm Mario, a microfrontend.
      </h1>
      <span>I'm hosted at <a target="_blank" href="https://mf-micro-front-end-activate.vercel.app">https://mf-micro-front-end-activate.vercel.app</a></span>
    </main>
  )
}
export default ComponentB