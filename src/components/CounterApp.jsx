import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types'

const CounterApp = ({value}) => {
  const [counter, setCounter] = useState(value);

  const sumar = () => setCounter(counter + 1);
  const restar = () => setCounter(counter - 1);
  const reset = () => setCounter(value);
   

  return (
    <>
      <h1>CounterApp</h1>
      <h2> { counter } </h2>
      <Button className="mb-2" onClick={ sumar } variant="dark" >+1</Button>
      <Button className="mb-2" onClick={ restar } variant="dark" >- 1</Button>
      <Button className="mb-2" onClick={ reset } variant="danger">reset</Button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}

export default CounterApp