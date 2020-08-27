import React from 'react';

const CourseInfo = ({courses,addCountHandler}) => {

    const {name,instructor,image,price} = courses;

    return (
        <>
            <div className="container">
                <div className="courseDetails">
                    <img src={image} alt="" />
                    <div className="otherDetails">
                        <h5>{name}</h5>
                        <p><small>{instructor}</small></p>
                        <p>Price: ${price}</p>                        
                    </div>
                    <div className="btn-footer">
                        <button className="btn btn-primary" onClick={() => addCountHandler(courses)}>Enroll Now</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CourseInfo;