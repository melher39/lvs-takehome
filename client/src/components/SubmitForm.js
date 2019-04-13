import React from "react";
import Select from "react-select";
import API from "../util/API.js";
import SubmitButton from "./SubmitButton.js";
import ResultsDisplay from "./ResultsDisplay.js";

class SubmitForm extends React.Component {

    // Initial state conditions set
    state = {
        names: [],
        selectedOption: null,
        characterInfo: null,
        isLoading: true
    };

    // as soon as the component loads, get all character names from the API
    componentDidMount() {
        API.allCharactersSearch().then(namesArray => {
            // create a new array `namesAsOptions` of objects with the character name as both the value and label properties
            // this is done so react-select can correctly render these as options
            let namesAsOptions = namesArray.data.map(eachName => {
                return {
                    value: eachName,
                    label: eachName
                }
            });
            // update the state to the new array and also isLoading to false so the loading animation will stop when results are displayed in the dropdown
            this.setState({
                names: namesAsOptions,
                isLoading: false
            });
        });
    };

    // when the user selects an option, update the state with the value of that option
    handleChange = currentValue => {
        this.setState({
            selectedOption: currentValue
        });
    };

    // when the `search` button is clicked, get the details of that specific character
    // and update the state with this info
    handleSubmit = event => {
        event.preventDefault();
        // check first to see if a valid option is selected
        if (this.state.selectedOption) {
            API.characterDetails(this.state.selectedOption.value).then(details => {
                this.setState({
                    characterInfo: details.data[0]
                });
            });
        }
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {/* react-select dropdown */}
                    <Select
                        onChange={this.handleChange}
                        options={this.state.names}
                        placeholder="Select a Character..."
                        isLoading={this.state.isLoading}
                    />
                    <SubmitButton />
                </form>
                {/* ternary expression, if this.state.characterInfo has valid info, then display it, otherwise, don't */}
                {this.state.characterInfo ? <ResultsDisplay characterInfo={this.state.characterInfo} /> : null}
            </div>
        );
    };
};

export default SubmitForm;