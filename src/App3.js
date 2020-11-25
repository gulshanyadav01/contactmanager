import React, { Component } from 'react'
import Contacts from "./comp1/Contacts"; 
import { Provider } from "./comp1/Context"

class App3 extends Component {
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
export default App3; 