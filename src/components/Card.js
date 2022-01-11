import React, {Fragment} from 'react'

const Card = ({title, poster, year, type}) => {
    return (
        <Fragment>
            <div className="col-md-4 p-5">
                <div className="card">
                    <div className="overflow">
                        <img src={poster} alt={title} width="100" className="card-img-top"/>
                    </div>
                    <div className="card-body">
                        <h4>{title}</h4>
                        <p>{year} - {type}</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Card
