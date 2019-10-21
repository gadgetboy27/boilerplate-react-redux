import React from 'react'

import Words from './Words'
import AddWord from './AddWord'

const App = () => (
  <div className='app-container'>
    <div className="row">
      <div className="col-sm">
        <div className="div-box">
          <Words />
          <AddWord />
        </div>
      </div>
    </div>
  </div>
)

export default App
