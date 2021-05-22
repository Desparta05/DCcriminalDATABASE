import React from "react";
import './ProfileCard.css';

function ProfileCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.Name} src={props.Image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Name:</strong> {props.Name}
                    </li>
                    <li>
                        <strong>Alias:</strong> {props.Alias}
                    </li>
                    <li>
                        <strong>Gender:</strong> {props.Gender}
                    </li>
                    <li>
                        <strong>Height:</strong> {props.Height}
                    </li>
                    <li>
                        <strong>Weight:</strong> {props.Weight}
                    </li>
                    <li>
                        <strong>EyeColor:</strong> {props.EyeColor}
                    </li>
                    <li>
                        <strong>HairColor:</strong> {props.HairColor}
                    </li>
                    <li>
                        <strong>City:</strong> {props.City}
                    </li>
                    <li>
                        <strong>Powers:</strong> {props.Powers}
                    </li>
                    <li>
                        <strong>Description:</strong> {props.Description}
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default ProfileCard;