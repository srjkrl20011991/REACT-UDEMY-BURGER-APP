import React from 'react'

import { Mention, MentionsInput } from 'react-mentions'

import provideExampleValue  from './hoc'

import defaultStyle from './defaultStyle'
import defaultMentionStyle from './defaultMentionStyle'
import Button from '../UI/Button/Button';

// use first/outer capture group to extract the full entered sequence to be replaced
// and second/inner capture group to extract search string from the match
const emailRegex = /(([^\s@]+@[^\s@]+\.[^\s@]+))$/

var userArray = [];

const onClickHandler = (param) =>{
  
  userArray.push(param);
  console.log("on click submit", userArray);
}

const  MultipleTriggers = ({ value, data, onChange, onAdd },props) => {

  return (
    <div className="multiple-triggers">
      <h3>Multiple trigger patterns</h3>
      <p>Mention people using '@' + username or type an email address</p>

      <MentionsInput
        value={value}
        onChange={onChange}
        style={defaultStyle}
        // markup="@[__display__](__type__:__id__)"
        markup="@{__type__:__id__}"
      >
        <Mention
          type="user"
          trigger="@"
          data={data}
          renderSuggestion={(
            suggestion,
            search,
            highlightedDisplay,
            index,
            focused
          ) => (
            <div className={`user ${focused ? 'focused' : ''}`}>
              {highlightedDisplay}
            </div>
          )}
          onAdd={onAdd}
          style={defaultMentionStyle}
        />

        {/* <Mention
          type="email"
          trigger={emailRegex}
          data={search => [{ id: search, display: search }]}
          onAdd={onAdd}
          style={{ backgroundColor: '#d1c4e9' }}
        /> */}
      </MentionsInput>
      <Button
      clicked={() => onClickHandler({value})}
      >Submit</Button>
    </div>
  )
}

const asExample = provideExampleValue(
  ""
)

export default asExample(MultipleTriggers)