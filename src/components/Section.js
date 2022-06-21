import React from "react"

export default function Section(props) {
    const {title, location, googleMapsLink, startDate, endDate, description, imageUrl} = props.item

    return (
        <div className="section-journal">
            <div className="cc-container cc-container-journal">
                <img src={imageUrl} className="section-image"></img>
                <div className="section-location">
                    <i className="fa-solid fa-location-dot section-location-pin-icon"></i>
                    <span className="section-location-name">{location}</span>
                    <a href={googleMapsLink} target="_blank" className="section-view-maps-link">Google Maps</a>
                </div>
                <h1 className="section-landmark">{title}</h1>
                <div className="section-date">
                    <span className="section-journal-start-date">{startDate} - </span>
                    <span className="section-journal-end-date">{endDate}</span>
                </div>
                <p className="section-journal-desc" id="journal-desc">{description.slice(0,180)}
                <span id="read-more-btn">...read more</span>
                </p>
                
            </div>
        </div>
    )
}