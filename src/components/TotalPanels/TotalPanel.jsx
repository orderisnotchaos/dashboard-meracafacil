import './TotalPanel.css';


function TotalPanel(props){

    return(
        <div className="wrapper">
            <div className={`card-${props.color} card`}>
                <div className="flex text-container">
                    <div className="col">
                        <div className={`title ${props.color}`}> {props.title}</div>
                        <div className="cuantity">{props.cuantity}</div>
                    </div>
                    <div>
                        <i className={`${props.icon} faded`}></i>
                    </div>
                </div>
                <div className="">
                    <i className=""></i>
                </div>
            </div>
        </div>
    );
}


export default TotalPanel;