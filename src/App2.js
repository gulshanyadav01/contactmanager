import React from 'react'
import { Provider } from './comp/Context'
import Contacts from "./comp/Contacts"
import AddContact from "./comp/AddContact"
const  App2 = () =>  {
    return (
        <Provider>
            <div>
                <AddContact/>
               <Contacts />
            </div>
        </Provider>
    )
}

export default App2
