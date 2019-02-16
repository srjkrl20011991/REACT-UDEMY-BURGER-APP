import React from 'react'

import { Mention, MentionsInput } from 'react-mentions';

import ProvideExampleValue  from './hoc';
import defaultStyle from './defaultStyle'
import defaultMentionStyle from './defaultMentionStyle'

function SingleLine({ value, data, onChange, onAdd }) {
  return (
    <div className="single-line">
      <h3>Single line input</h3>

      <MentionsInput
        singleLine
        value={value}
        onChange={onChange}
        style={defaultStyle}
        placeholder={"Mention people using '@'"}
      >
        <Mention data={data} onAdd={onAdd} style={defaultMentionStyle} />
      </MentionsInput>
    </div>
  )
}

const asExample = ProvideExampleValue('')

export default asExample(SingleLine)