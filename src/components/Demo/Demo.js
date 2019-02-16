import React, { Component } from 'react'
import { EnhancerProvider } from 'substyle'
import Radium from 'radium'

import MultipleTrigger from './MultipleTrigger'
import SingleLine from './SingleLine'
import Advanced from './Advanced'
// import CssModules from './CssModules'
import AsyncGithubUserMentions from './AsyncGithubUserMentions'
import Scrollable from './Scrollable'
// import SuggestionPortal from './SuggestionPortal'

const users = [
    {
      id: 'suraj.karale',
      display: 'Suraj Karale',
    },
    {
      id: 'bryant.yu',
      display: 'Bryant Yu',
    },
    {
      id: 'sachin.yedage',
      display: 'Sachin Yedage',
    },
    {
      id: 'kamran.khan',
      display: 'Kamran Khan',
    }
  ]

class Demo extends Component {

      render() {
       return (
        <EnhancerProvider enhancer={Radium}>
        <div>
          <MultipleTrigger data={users} />
        {/*   <SingleLine data={users} />
          <AsyncGithubUserMentions data={users} />
         <Scrollable data={users} />
          <Advanced data={users} />
           <CssModules data={users} />

          <SuggestionPortal data={users} /> */}
        </div>
      </EnhancerProvider>
       )
      }
}

export default Demo;