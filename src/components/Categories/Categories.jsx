import "./Categories.css";

function Categories(props){

    return(
        <div className="container">
            <div className="card-header">
                <h1>Categories in DB</h1>
            </div>
            <div className="body">

                {props.categories.map((category, i) =>{
                    return(
                        <div className="card-black" key={i}>
                            <div className="black-li">{category.name}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Categories;