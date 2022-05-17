import PropTypes from 'prop-types'

const Counter = ({inc, dec, count, rest}) => {
    return (
        <div>
            {/*<h1 style={{*/}
            {/*    color: count === 0 ? 'yellow' :*/}
            {/*        count > 0 ? 'green' : 'red'*/}
            {/*}}>{count}</h1>*/}
            <h1 style={count <= 0 ? {color: 'red'} : {color: 'green'}}>{count}</h1>
            <button onClick={inc}>+</button>
            <button onClick={dec} style={{backgroundColor: count <= 0 ? 'silver' : 'teal'}} disabled={count === 0}>-
            </button>
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