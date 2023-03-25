
import React from 'react';
import '../styles/dashboard.css'

function Dashboard() {
    return ( 
          <div id="dashboard-container">
             <div className="col-nav">
                <div className='row-logo'></div>
                <div className='row-boards'></div>
                <div className='row-settings'></div>
             </div>
             <div className="col-body">
                <div className='row-nav'></div>
                <div className='row-body'></div>
             </div>
          </div>
     );
}

export default Dashboard;