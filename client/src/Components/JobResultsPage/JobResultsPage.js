import React from 'react';
import { useLocation } from 'react-router-dom';

import '../../Styles/JobResultsPage/JobResultsPage.css';

const JobResultsPage = () => {
    const location = useLocation()
    console.log(location.state.data);
    return (
        <div className='JobResultsPage'>

            { location.state.data.map((d) => {
                return (
                    <div key={d.id} className="JobResults">
                        <div className='JobTitleDiv'><h2 className='JobTitle'>{d.Position}</h2></div>
                        <div className='CompanyNameLocation'>
                        <span class="material-symbols-outlined">pin_drop</span>
                            <h3 className='CompanyName'>{d.CompanyName} -</h3>
                            <h3 className='CompanyLocation'>&nbsp;{d.Location}</h3>
                        </div>
                        <div className='JobDescDiv'>
                            <div className='jobDesc'>
                                <h3>Job Description</h3>
                                <span class="material-symbols-outlined">description</span>
                            </div>
                            
                            <p className='JobDesc'>{d.JobDescription}</p>
                        </div>
                    <div className='ApplyLinkDiv'>
                     <a className="ApplyLink" href={d.ApplyLink}>Apply Link</a>
                 </div>

                    </div>

                )
            })}
        </div>
               
            
    );
}

export default JobResultsPage;