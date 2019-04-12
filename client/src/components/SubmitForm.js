import React from "react";
import Select from "react-select";
import API from "../util/API.js";
import SubmitButton from "./SubmitButton.js";

class SubmitForm extends React.Component {

    state = {
        names: [], 
        selectedOption: null,
        characterInfo: []
    };

    // as soon as the component loads
    componentDidMount() {
        API.allCharactersSearch().then(namesArray => {
            console.log(namesArray.data);
            let namesAsOptions = namesArray.data.map(eachName => {
                return {
                    value: eachName,
                    label: eachName
                }
            });
            this.setState({
                names: namesAsOptions
            });
            console.log(this.state.names);
        });
        
    };

    handleChange = currentValue => {
        this.setState({
             selectedOption: currentValue 
            });
        console.log(`Option selected:`, currentValue);
      };

    handleSubmit = event => {
        event.preventDefault();
        API.characterDetails(this.state.selectedOption.value).then(details => {
            this.setState({
                characterInfo: details.data[0]
            });
            console.log(this.state.characterInfo);
        });
        
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Select
                    onChange={this.handleChange}
                    options={this.state.names}
                    placeholder="Select a Character..."
                />
                <SubmitButton />
            </form>
        )
    };
};

export default SubmitForm;