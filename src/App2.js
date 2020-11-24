import React from 'react'
import { Provider } from './comp/Context'
import Contacts from "./comp/Contacts"
const  App2 = () =>  {
    return (
        <Provider>
            <div>
               <Contacts />
            </div>
        </Provider>
    )
}

export default App2
