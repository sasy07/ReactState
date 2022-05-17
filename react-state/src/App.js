import {useState} from "react";

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
        <div>
            <header>
                <h1>شمارنده من :</h1>
            </header>
        </div>
    )
}
export default App;