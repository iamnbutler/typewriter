import './App.css'
import useTypewriter from './useTypewriter';
import TextStreamer from './textStreamer';


function App() {
    const text = useTypewriter({
        text: "Hello World! This is a typewriter effect.",
        options: {
            speed: 100,
            delay: 400
        }
    });

    return (
        <>
            <h1>Vite + React</h1>
            <div className="card">
                <p className="typewriter-text">{text}</p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            <TextStreamer
                streamSpeed={1000}
                fullText="Hello World! This is a typewriter effect."
                onStream={setStreamText}
            />
        </>
    )
}

export default App
