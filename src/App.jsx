import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
 return (
	<main className='flex-center h-[100vh]'>
		<h1>Test text</h1>
	</main>
 )
}

export default App
