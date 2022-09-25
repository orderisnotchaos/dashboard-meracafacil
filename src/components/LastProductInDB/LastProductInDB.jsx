import "./LastProductInDB.css";


function LastProductInDB(props){

    return(
        <div className="centered-content">
            <div className="card-header">
                <h1>Last product in DB</h1>
            </div>
            <h3 className="faded resp"> {props.title}</h3>
            <img src={props.img} className="tiny-img" alt="product" />
            <p className="gray-faded">{props.desc}</p>
        </div>
    );
}


export default LastProductInDB;