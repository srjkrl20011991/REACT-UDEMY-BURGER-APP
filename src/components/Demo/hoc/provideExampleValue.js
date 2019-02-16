import { compose, withState, withHandlers } from 'recompose';

 const provideExampleValue = (value) => {
  return compose(
    withState('value', 'setValue', value),
    withHandlers({
      onChange: ({ setValue }) => (ev, newValue) => setValue(newValue),
      onAdd: () => (...args) => console.log('added a new mention', ...args),
      clicked: () => () => console.log("clicked")
    })
  )
}

export default provideExampleValue;