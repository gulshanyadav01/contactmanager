import React, { Component } from 'react'
import {Provider } from "./comp4/Context"

import Contacts from "./comp4/Contacts"
import AddContact from "./comp4/AddContact"

class App4 extends Component {
    render() {
        return(
            <Provider>
                <div>
                    <AddContact/>
                    <Contacts/>
                </div>
            </Provider>
        )
    }
}
export default App4; 