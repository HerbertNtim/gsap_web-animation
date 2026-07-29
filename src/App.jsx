import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger,SplitText);

const App = () => {
  return (
    <div className="text-3xl text-rose-400">App</div>
  )
}

export default App
