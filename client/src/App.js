import React from "react";
import SelectDropdown from "./components/SelectDropdown.js";
import SubmitButton from "./components/SubmitButton.js";

class App extends React.Component {

    render(){
        return(
            <div>
                <h1>LVS Take Home</h1>
                <SelectDropdown />
                <SubmitButton />
            </div>
        )
    }
};

export default App;