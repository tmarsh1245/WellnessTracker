import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class LogForm extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        console.log("submitted log");
        event.preventDefault();
        let form = document.forms.logForm;
        this.props.addLog({
            date: form.date.value,
            overall: form.overall.value,
            food: form.food.value,
            activity: form.activity.value,
            morning: form.morning.value,
            evening: form.evening.value,
            timeFrom: form.timeFrom.value,
            timeTo: form.timeTo.value,
            breakfast: form.breakfast.value,
            lunch: form.lunch.value,
            dinner: form.dinner.value,
            exercise: form.exercise.value
        });
        form.date.value = '';
        form.overall.value = '';
        form.food.value = '';
        form.activity.value ='';
        form.morning.value = 'yes';
        form.evening.value = 'yes';
        form.timeFrom.value = "12:00";
        form.timeTo.value = '12:00';
        form.breakfast.value = '';
        form.lunch.value = '';
        form.dinner.value = '';
        form.exercise.value = '';
    }

    render(){
        return(
            <div className="row">
                <div className="col-8">
                    <form name="logForm" onSubmit={this.handleSubmit}>
                        <br/>
                        <h3>Add a New Day</h3>
                        <div className="form-row">
                            <div className="form col-6">
                                    Date:<br/>
                                    <input type="date" name="date"/><br/>
                                    Overall Rating:<br/>
                                    <input type="number" name="overall" min="1" max="10"/><br/>
                                    Food Rating:<br/>
                                    <input type="number" name="food" min="1" max="10"/><br/>
                                    Activity Rating:<br/>
                                    <input type="number" name="activity" min="1" max="10"/><br/>
                                    Meds Morning:<br/>
                                    <input type="radio" name="morning" value="yes" checked/>Yes
                                    <input type="radio" name="morning" value="no" />No<br/>
                                    Meds Evening:<br/>
                                    <input type="radio" name="evening" value="yes" checked/>Yes
                                    <input type="radio" name="evening" value="no"/>No<br/>
                                    Workshift:<br/>
                                    <input type="time" name="timeFrom" value="12:00"/> to <input type="time" name="timeTo" value="12:00"/><br/>
                            </div>
                            <div className="form col-6">
                                Breakfast:<br/>
                                    <textarea name="breakfast" rows="2" cols="45"></textarea><br/>
                                    Lunch:<br/>
                                    <textarea name="lunch" rows="2" cols="45"></textarea><br/>
                                    Dinner:<br/>
                                    <textarea name="dinner" rows="2" cols="45"></textarea><br/>
                                    Exercise:<br/>
                                    <textarea name="exercise" rows="2" cols="45"></textarea><br/>
                            </div>
                        </div>
                    </form>
                </div>
                <div col-4>
                    <br/>
                    <div className="card">
                        <div className="card-header">
                            <h3 id="h32">How to Log your Health</h3>
                        </div>
                        <div className="card-body">
                            <ul>
                                <li>Make sure to fill out at least the number ratings</li>
                                <li>When listing foods, be as specific as you'd like, but consistancy in your terms may help track your eating trends</li>
                                <li>Be specific on how you exersized if you feel it is impacting your wellbeing</li>
                                <li>Be honest! This info is for you to feel better and nothing else!</li>
                            </ul>
                            <button className="button btn-lg btn-secondary" onClick={this.handleSubmit}><FontAwesomeIcon icon={['far',"plus-square"]} color="white"/> Add Log</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
