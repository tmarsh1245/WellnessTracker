var headerNode = document.getElementById("header");

class Header extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <header>
                        <h1>Wellness Tracker</h1>
                    </header>
                </div>
                <div className="row">
                    <h3>Be the Detective of your own Body</h3>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Header/>, headerNode)