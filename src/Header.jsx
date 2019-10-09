import React from 'react';

export default class Header extends React.Component{
    render(){
        return(
            <div>
                <div className="row">
                    <header>
                        <h1>Wellness Tracker</h1>
                    </header>
                </div>
                <div className="row">
                    <h3>Be the Detective of your own Body</h3>
                </div>
                <br />
            </div>
        )
    }
}

