import React from 'react'

import MyClassComponent from './components/MyClassComponent'
import MyFunctionComponent from './components/MyFunctionComponent'
import MyFunctionComponentNoHook from './components/MyFunctionComponentNoHook'
import LoginComponent from './components/LoginComponent'

function App() {
  return (
    <div>
      <section>
        <LoginComponent/>
      </section>
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
