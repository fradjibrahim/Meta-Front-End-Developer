import Heading from "./Heading";
import Card from "./Card";
import "./App.css"
function App() {
    function handleClick() {
        let randomNum = Math.floor(Math.random() * 3) + 1;
        console.log(randomNum);
        let userInput = prompt('type a number');
        alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
    }
    return (
        <div className="App">
            <Heading firstName="Bob"/>
            <Card h2="First card's h2" h3="First card's h3" />
            <Card h2="Second card's h2" h3="Second card's h3" />
            <Card h2="Third card's h2" h3="Third card's h3"/>
            <h1>Task: Add a button and handle a click event</h1>
            <button onClick={handleClick}>Guess the number between 1 and 3</button>
        </div>
    );
};

export default App;
