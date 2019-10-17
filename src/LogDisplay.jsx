import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class LogDisplay extends React.Component {
    constructor(props){
        super(props);
        this.handlePrev = this.handlePrev.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }

    handlePrev() {
        this.props.prevLog();
    }

    handleNext() {
        this.props.nextLog();
    }

    render(){
        let selectedLog = this.props.selectedLog;
        
        return(
            <div>
                <h3 className="healthDisplayTitle">Health Report: {selectedLog.date}</h3>
                <h5>How you felt: {starGenerator(selectedLog.overall)}</h5>
                <p>Morning Medication: {medsIconGenerator(selectedLog.morning)} Evening Medication: {medsIconGenerator(selectedLog.evening)}</p>
                <h5>How you ate: {starGenerator(selectedLog.food)}</h5>
                <p>Breakfast: {selectedLog.breakfast} <br/>Lunch: {selectedLog.lunch} <br/>Dinner: {selectedLog.dinner}</p>
                <h5>How you moved: {starGenerator(selectedLog.activity)}</h5>
                <p>{workTranslate(selectedLog.timeFrom, selectedLog.timeTo)}</p>
                <p>Activity done: {selectedLog.exercise}</p>
                <button className="btn btn-primary" type="button" onClick={this.handlePrev}><FontAwesomeIcon icon="arrow-alt-circle-left"/> Previous</button>
                <button className="btn btn-primary" id="nextButton" type="button" onClick={this.handleNext}>Next <FontAwesomeIcon icon="arrow-alt-circle-right"/></button>
            </div>
        )
    }
}

function starGenerator(numStars){
    let output = [];
    let halfStar = false;
    numStars = numStars / 2;
    if(numStars % 1 != 0){
        halfStar = true;
    }
    for(let i = 0; i < 5; i++){
        if(i < Math.floor(numStars)){
            output.push(<FontAwesomeIcon icon="star" color="gold"/>)
        }
        else if(i == Math.floor(numStars) && halfStar == true){
            output.push(<FontAwesomeIcon icon="star-half-alt" color="gold"/>)
        }
        else{
            output.push(<FontAwesomeIcon icon={['far', 'star']} color="gold"/>)
        }
    }
    return output;
}

function medsIconGenerator(yOrN){
    if(yOrN === 'yes'){
        return <FontAwesomeIcon icon="check-square" color="green"/>
    }
    else if(yOrN === 'no'){
        return <i class="far fa-times-circle"></i>
    }
}

function workTranslate(begin, end){
    if(begin == end){
        return "No work shift"
    }
    else{
        return "Worked from " + begin + " to " + end;
    }
}