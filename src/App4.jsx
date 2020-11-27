import React, { Component } from 'react'
import {Provider } from "./comp4/Context"

import Contacts from "./comp4/Contacts"

class App4 extends Component {
    render() {
        return(
            <Provider>
                <div>
                    <Contacts/>
                </div>
            </Provider>
        )
    }
}
export default App4; 