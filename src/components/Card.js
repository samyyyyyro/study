import React from "react";
import toast from "react-hot-toast";

function Card(props){
    let course = props.course;
    let isLoggedIn = props.isLoggedIn;

    function clickHandler(event){
        if(isLoggedIn===true){
            toast.success('Successfully Added to cart!');
        }
        else{
            toast.error("Kindly Login");
        }
    }
    return (
        <div className="w-[300px] bg-slate-600 rounded-md overflow-hidden">
            <div className="relative">
                 <img src = {course.image.url}/>
            </div>
            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className="mt-2 text-white">
                    {
                        course.description.length > 100 ?
                        (course.description.substr(0,100)) + "..." :
                        (course.description)
                    }
                </p>
            </div>
            <div>
                <button onClick={clickHandler} className="h-8 px-4 m-2 text-sm text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
                    Add to Cart
                </button>
            </div>  
        </div>
    )
};

export default Card; 