import React, {useRef} from 'react'
import CardWrapper from '../../common/Card'
import SmallTitle from '../../common/typografy/smallTitle'
import Divider from '../../common/divider'

const ProgrammableActionsExample = () => {
  const inputRef = useRef(null)

  return (
    <CardWrapper>
      <SmallTitle className="card-title">
        Программируемые действия и свойства
      </SmallTitle>
      <Divider/>
      <label htmlFor="email" className="form-label">
        Email
      </label>
      <input
        ref={inputRef}
        type="email"
        className="form-control"
        id="email"
        placeholder="Введите ваш Email"
      />
      <button
        className="btn btn-primary mt-3"
        onClick={() => inputRef.current.focus()}
      >
        Фокус input
      </button>
      <button
        className="btn btn-secondary mt-3 mx-3"
        onClick={() => inputRef.current.style.width = '160px'}
      >
        Изменить ширину объекта
      </button>
    </CardWrapper>
  )
}

export default ProgrammableActionsExample