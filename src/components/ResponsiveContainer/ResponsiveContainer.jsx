import "./ResponsiveContainer.css";


function ResponsiveContainer(props){

    return(
        <div className="responsive-box shadow">
            <div className="centered-content">
                {props.children}
            </div>
        </div>
    );
}

export default ResponsiveContainer;