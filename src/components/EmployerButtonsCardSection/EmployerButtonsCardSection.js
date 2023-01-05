import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/employerButtonsCardSection.css'

export default function EmployerButtonsCardSection(props) {
    let styleobject = { backgroundImage: props.backgImgUrl }
    return (
        <Link
            style={styleobject}
            className="employerButtonsCardSection" to={props.routeTo}>
            <h2>{props.projectType}</h2>
        </Link>

    )
}
