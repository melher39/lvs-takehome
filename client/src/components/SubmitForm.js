import React from "react";
import Select from "react-select";
import API from "../util/API.js";
import SubmitButton from "./SubmitButton.js";
import ResultsDisplay from "./ResultsDisplay.js";

class SubmitForm extends React.Component {

    state = {
        names: [],
        selectedOption: null,
        characterInfo: null
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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <Select
                        onChange={this.handleChange}
                        options={this.state.names}
                        placeholder="Select a Character..."
                    />
                    <SubmitButton />
                </form>

                {this.state.characterInfo ? <ResultsDisplay characterInfo={this.state.characterInfo} /> : null}
            </div>

        )
    };
};

export default SubmitForm;