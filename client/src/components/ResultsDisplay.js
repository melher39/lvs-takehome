import React from "react";

function ResultsDisplay(props) {
    return (
        // Receive props from SubmitButton component and display them here
        <div id="results-display">
            <ul>
                <h3><i>{props.characterInfo.name}</i></h3>
                <li>{`Height: ${props.characterInfo.height}`}</li>
                <li>{`Mass: ${props.characterInfo.mass}`}</li>
                <li>{`Hair Color: ${props.characterInfo.hair_color}`}</li>
                <li>{`Skin Color: ${props.characterInfo.skin_color}`}</li>
                <li>{`Eye Color: ${props.characterInfo.eye_color}`}</li>
                <li>{`Birth Year: ${props.characterInfo.birth_year}`}</li>
                <li>{`Gender: ${props.characterInfo.gender}`}</li>
            </ul>
        </div>
    );

};

export default ResultsDisplay;