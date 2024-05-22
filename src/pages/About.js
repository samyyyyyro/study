import React from 'react'

const Home = ({isLoggedIn}) => {
  return (
    <div className='w-screen h-screen'>
        <h1 className='flex font-medium justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto text-white'>
            About Us 
            <br/>
        </h1>
        
        <p className='flex  justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto text-white'>
        Welcome to StudyNotion, your premier destination for high-quality educational content tailored to learners of all ages and levels. At StudyNotion, we are passionate about fostering a love for learning and empowering individuals to reach their full potential through accessible and engaging educational resources.
Our dedicated team of educators, content creators, and developers work tirelessly to curate a diverse collection of materials spanning various subjects, from mathematics and science to literature and history. Whether you're a student looking to supplement classroom learning, an educator seeking innovative teaching resources, or a lifelong learner eager to explore new topics, StudyNotion has something for you.
Driven by a commitment to excellence, we strive to create a dynamic online learning environment that promotes critical thinking, creativity, and lifelong learning skills. Our interactive lessons, tutorials, and quizzes are designed to inspire curiosity, spark intellectual curiosity, and facilitate meaningful learning experiences.
Join us on our mission to make education accessible to all, and embark on a journey of discovery, growth, and achievement with StudyNotion.
        </p>
    </div>
  )
}

export default Home