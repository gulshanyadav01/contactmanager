import React, { Component } from 'react'
import Contacts from "./component/Contacts"
import { Provider } from "./component/Context"

class App1 extends Component {
    render() {
        return (
            <Provider>
            <div>
                <Contacts/>
            </div>
            </Provider>
        )
    }
}
export default App1; 