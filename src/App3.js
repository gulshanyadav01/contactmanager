import React, { Component } from 'react'
import Contacts from "./comp1/Contacts"; 
import { Provider } from "./comp1/Context"
import AddContact from "./comp1/AddContact"

class App3 extends Component {
    render() {
        return (
            <Provider>
                <div>
                    <AddContact/>
                    <Contacts/>
                </div>
            </Provider>
        )
    }
}
export default App3; 