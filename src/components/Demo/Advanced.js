import React from 'react'
import { merge } from 'lodash'
import { compose, withHandlers } from 'recompose'

import { MentionsInput, Mention } from 'react-mentions'

import  provideExampleValue from './hoc'

import defaultStyle from './defaultStyle'
import defaultMentionStyle from './defaultMentionStyle'

const style = merge({}, defaultStyle, {
  suggestions: {
    list: {
      maxHeight: 100,
      overflow: 'auto',
      position: 'absolute',
      bottom: 14,
    },
  },
})

function Advanced({ value, data, onChange, onBlur, onAdd }) {
  let inputEl = React.createRef()
  return (
    <div className="advanced">
      <h3>Advanced options</h3>

      <MentionsInput
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        markup="{{__id__}}"
        style={style}
        displayTransform={id => `<-- ${id} -->`}
        inputRef={inputEl}
      >
        <Mention data={data} onAdd={onAdd} style={defaultMentionStyle} />
      </MentionsInput>

      <button
        onClick={() => {
          inputEl.current.focus()
        }}
      >
        focus programmatically
      </button>
    </div>
  )
}

export default compose(
  provideExampleValue('Hi {{johndoe}}!'),
  withHandlers({
    onBlur: () => (ev, clickedOnSuggestion) => {
      if (!clickedOnSuggestion) {
        console.log('finished editing')
      }
    },
  })
)(Advanced)