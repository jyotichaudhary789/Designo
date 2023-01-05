import React from 'react'
import EmployerButtonsCardSection from '../EmployerButtonsCardSection/EmployerButtonsCardSection'
import "../../Styles/cardOuterContainer.css"
import "../../Styles/section2-card-container.css";


export default function EmployerButtons() {
        return (
        <div className="cardOuterContainer">
            <div className="section2-card-container">
                <EmployerButtonsCardSection backgImgUrl="url(https://cdn.sanity.io/images/pc8s19ha/production/0eebae0a61b55540c4099ea7425373b8a1ee46d2-541x308.jpg)"          
                  projectType="Add Jobs" routeTo="/addjobs"
                />
                <EmployerButtonsCardSection backgImgUrl="url(https://cdn.sanity.io/images/pc8s19ha/production/ed8c19f76997401ddb2d149f317ad2b000142ece-541x308.jpg)"                
                  projectType="My Jobs"
                />
            </div>
        </div>

    )
}
