import React from "react";
import Select from "react-select";
import API from "../util/API.js";

class SelectDropdown extends React.Component {

    state = {

    };

    // as soon as the component loads
    componentDidMount(){
        API.allCharactersSearch().then(characterNames => {
            
        })
    }

    render() {
        return (
            <div>
                <Select
                // value={}
                // onChange={}
                // options={}
                />
            </div>
        )
    }
}

export default SelectDropdown;