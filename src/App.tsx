import React from 'react'

import MyClassComponent from './components/MyClassComponent'
import MyFunctionComponent from './components/MyFunctionComponent'
import MyFunctionComponentNoHook from './components/MyFunctionComponentNoHook'

function App() {
  return (
    <div>
      <section>
        <MyClassComponent/>
      </section>
      <section>
        <MyFunctionComponent/>
      </section>
      <section>
        <MyFunctionComponentNoHook/>
      </section>
    </div>
  );
}

export default App;
