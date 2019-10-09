import React from 'react';

export class LogForm extends React.Component {
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        alert('A log was submitted');
        event.preventDefault();
        const data = new FormData(event.target)
        fetch(`api/newLog`,{
            method: "POST",
            body: data
        });
    }

    render(){
        return(
            <div className="row">
                <form action="/api/newLog" method="POST">
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
                                <input type="radio" name="morning" checked/>Yes
                                <input type="radio" name="morning"/>No<br/>
                                Meds Evening:<br/>
                                <input type="radio" name="evening" value="yes" checked/>Yes
                                <input type="radio" name="evening" value="no"/>No<br/>
                                Workshift:<br/>
                                <input type="time" name="timeFrom" value="12:00"/> to <input type="time" name="timeTo" value="12:00"/><br/>
                                <input type="submit" value="Submit" onClick = {this.handleSubmit}/>
                                <input type="reset"/>
                        </div>
                        <div className="form col-6">
                               Breakfast:<br/>
                                <textarea name="breakfast" rows="2" cols="60"></textarea><br/>
                                Lunch:<br/>
                                <textarea name="lunch" rows="2" cols="60"></textarea><br/>
                                Dinner:<br/>
                                <textarea name="dinner" rows="2" cols="60"></textarea><br/>
                                Exercise:<br/>
                                <textarea name="exercise" rows="2" cols="60"></textarea><br/>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
