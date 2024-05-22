import React from "react";
import Card from "./Card";

const Cards = (props) => {
    let courses = props.courses;
    let isLoggedIn = props.isLoggedIn;
    let category = props.category;
    function getCourses(){
        if(category === "All"){
                let alll = [];
                Object.values(courses).forEach(arr => {
                arr.forEach(courseData => {
                    alll.push(courseData)
                })
            })
            return alll;
        }
        else{
            return courses[category];
        }
    }
    

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCourses().map( (course) => (
                    <Card key = {course.id} course = {course} isLoggedIn={isLoggedIn}/>
                ))
            }
        </div>
    )
};

export default Cards;