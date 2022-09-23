import React from 'react';
import TopBar from '../TopBar/TopBar';

function ContentWrapper(){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;