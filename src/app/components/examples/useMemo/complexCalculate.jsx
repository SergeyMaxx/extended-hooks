import React, {useEffect, useMemo, useState} from 'react'
import CardWrapper from '../../common/Card'
import SmallTitle from '../../common/typografy/smallTitle'
import Divider from '../../common/divider'

const factorial = n => n ? n * factorial(n - 1) : 1

const runFactorial = n => {
  console.log('run Factorial')
  return factorial(n)
}

const ComplexCalculateExample = () => {
  const [value, setValue] = useState(100)
  const [state, setState] = useState(false)
  const fact = useMemo(() => runFactorial(value), [value])

  const buttonColor = state ? 'primary' : 'secondary'

  useEffect(() => {
    console.log('render button color')
  }, [buttonColor])

  return (
    <>
      <CardWrapper>
        <SmallTitle>Кэширование сложных вычислений</SmallTitle>
        <Divider/>
        <p>Value: {value}</p>
        <p>Result fact: {fact}</p>
        <button
          className="btn btn-primary mx-2"
          onClick={() => setValue(p => p + 10)}
        >
          Increment
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={() => setValue(p => p - 10)}
        >
          Decrement
        </button>
      </CardWrapper>
      <CardWrapper>
        <SmallTitle>Зависимость от сторонних setState</SmallTitle>
        <button
          className={'btn ms-md-2 btn-' + buttonColor}
          onClick={() => setState(!state)}
        >
          Button color
        </button>
      </CardWrapper>
    </>
  )
}

export default ComplexCalculateExample