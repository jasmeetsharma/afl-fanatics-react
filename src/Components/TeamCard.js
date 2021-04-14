import React from 'react'

function TeamCard(props) {
    return (
        <a  className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-7 mb-4 list-item">
        <div className="card">
            <img src={'https://squiggle.com.au/'+props.team.logo}
                className="img-fluid card-img-top" alt="{props.team.name}"/>
                <div className="card-body">
                    <h6 className="text-center font-weight-normal">{ props.team.name }</h6>
                </div>
        </div>
        </a>
    )
}

export default TeamCard
