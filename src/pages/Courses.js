import React, { useEffect, useState } from 'react';
import Filters from '../components/Filters';
import Cards from '../components/Cards';
import { apiUrl, filterData} from './data';
import toast from 'react-hot-toast';
import Spinner from '../components/Spinner';

function Courses({isLoggedIn}) {

  const [courses, setCourses] = useState(null);  
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData(){
    setLoading(true);
    try{
      let response  = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data);
    }
    catch(error){
      toast.error("Problem in Network");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-richblack-900 min-h-screen flex flex-col">
      
      <div>
        <Filters 
        filterData={filterData}
        category={category}
        setCategory={setCategory}
        />
      </div>
      <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]' >
        {
          loading ? (<Spinner/>) : (<Cards courses={courses} isLoggedIn={isLoggedIn} category = {category}/>)
        }
      </div>

    </div>
  )
}

export default Courses;