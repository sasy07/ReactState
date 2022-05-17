import PropTypes from 'prop-types'

const Counter = ({inc, dec, count, rest}) => {
    return (
        <div>
            <h1 className="App-counter">{count}</h1>
            <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>
            <br/>
            <button onClick={rest}>💥</button>
        </div>
    )
}

Counter.propTypes = {
    inc: PropTypes.func,
    dec: PropTypes.func,
    rest: PropTypes.func,
    count: PropTypes.number
}

export default Counter;