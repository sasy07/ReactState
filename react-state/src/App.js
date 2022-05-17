import {useState} from "react";
import Counter from "./components/Counter";
import "./App.css";

const App = () => {
    // const {count, name, family} = this.state;

    //React Hock :
    const [count, setCount] = useState(0);
    // const [arr, setArr] = useState([]);
    // const [name, setName] = useState("Sasan");
    // const [family, setFamily] = useState("GhafooryFard");
    //
    // const changeCount = () => {
    //     setCount(5);
    // }
    const increaseCount = () => {
        setCount(count + 1);
    }
    const decreaseCount = () => {
        setCount(count - 1);
    }
    const resetCount = () => {
        setCount(0);
    }
    return (
        <div className="App">
            <header>
                <h1>شمارنده من :</h1>
            </header>
            <Counter inc={increaseCount}
                     dec={decreaseCount}
                     rest={resetCount}
                     count={count}/>
        </div>
    )
}
export default App;