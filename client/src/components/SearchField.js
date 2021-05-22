import React from "react";

const SearchField = ({ Alias, Image, Name, City, Gender, Height, Weight, EyeColor, HairColor, Powers, Description }) => {

    return (
        <>
            <div className="villainCard col-10 m-auto">
                <div className="row AliasRow">
                    <div className="row">
                        <h4 className="text-center">Alias: {Alias}</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2 partition-left">
                        <img src={Image} alt='villain image' />
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <span>
                                    Full Name:{Name}
                                </span>
                            </div>
                            <div className="col">
                                <span>City: {City}</span>
                            </div>
                            <div className="col">
                                <span>Gender: {Gender}</span>
                            </div>
                            <div className="col">
                                <span>Height: {Height}</span>
                            </div>
                            <div className="col">
                                <span>Weight: {Weight}</span>
                            </div>
                            <div className="col">
                                <span>Eye Color: {EyeColor}</span>
                            </div>
                            <div className="col">
                                <span>Hair Color: {HairColor}</span>
                            </div>
                            <div className="row">
                                <p className="mt-3 mb-0">Powers and Abilities:</p>
                                <p>{Powers}</p>
                                <p className="mt-1 mb-0">Description:</p>
                                <p>{Description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}





export default SearchField