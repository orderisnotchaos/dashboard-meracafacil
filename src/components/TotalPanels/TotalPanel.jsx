import './TotalPanel.css';


function TotalPanel(props){

    return(
        <div className="wrapper">
        <div className="">
            <div className="">
                <div className="">
                    <div className="">
                        <div className=""> {props.title}</div>
                        <div className="">{props.cuantity}</div>
                    </div>
                    <div className="">
                        <i className=""></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}


export default TotalPanel;