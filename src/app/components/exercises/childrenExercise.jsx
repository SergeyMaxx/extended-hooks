import React from 'react'
import CollapseWrapper from '../common/collapse'
import PropTypes from 'prop-types'

const ComponentsList = ({children}) => {
  const arrChildren = React.Children.toArray(children)

  return React.Children.map(arrChildren, child => {
    return React.cloneElement(child, {
      ...child.props,
      num: Number(child.key.slice(1)) + 1
    })
  })
}

ComponentsList.propTypes = {
  children: PropTypes.array.isRequired
}

const ChildrenExercise = () => {
  return (
    <CollapseWrapper title="Упражнение">
      <p className="mt-3">
        У вас есть компоненты Списка. Вам необходимо к каждому из них
        добавить порядковый номер, относительно того, как они
        располагаются на странице. Вы можете использовать как{' '}
        <code>React.Children.map</code> так и{' '}
        <code>React.Children.toArray</code>
      </p>
      <ComponentsList>
        <Component/>
        <Component/>
        <Component/>
      </ComponentsList>
    </CollapseWrapper>
  )
}

const Component = ({num}) => <div>{num} Компонент списка</div>

Component.propTypes = {
  num: PropTypes.number
}

export default ChildrenExercise