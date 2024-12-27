import React from 'react'
import {
    DiHtml5,
    DiCss3,
    DiJavascript1,
    DiReact,
    DiNodejsSmall,
    DiMongodb,
    DiGithubBadge,
} from 'react-icons/di'

const skills=[
    {
        category:'Frontend',
        technologies:[
            {name: 'HTML', icon: <DiHtml5 className='text-orange-600'/>},
            {name: 'CSS', icon: <DiCss3 className='text-blue-600'/>},
            {name: 'JS', icon: <DiJavascript1 className='text-yellow-600'/>},
            {name: 'React', icon: <DiReact className='text-teal-600'/>},
        ]
    },
    {
        category:'Full Stack',
        technologies:[
            {name: 'Node Js', icon: <DiNodejsSmall className='text-orange-600'/>},
            {name: 'MongoDB', icon: <DiMongodb className='text-blue-600'/>},
            {name: 'React', icon: <DiReact className='text-teal-600'/>}
        ]
    }
]

const Skills = () => {
  return (
    <div className='flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12' id='skills'>
      <h2 className='text-3xl font-bold mb-4 text-center'>Skills</h2>

      <p className='text-center mb-8'>
            I have worked on some frontend and fullstack projects.check them
            <a href="#" className='underline'></a>
      </p>

      <div className='flex flex-col md:flex-row justify-center space-y-8 md:space-x-8 md:space-y-0 max-w-[1000px] mx-auto'>

        {skills.map((skill,index)=>(
            <div key={index} className='border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg w-full md:w-1/2'>
                <h3 className='text-xl font-bold mb:4 text-center '>{skill.category}</h3>
                
                    <div className='grid grid-col-2 gap-4 mt-4'>
                    {skill.technologies.map((tech,idx)=>(
                        <div key={idx} className='flex items-center space-x-2'>
                            <span className='text-2xl'>{tech.icon}</span>
                            <span>{tech.name}</span>
                        </div>
                    ))}
                    </div>
                </div>
           
        ))}

      </div>
    </div>
  )
}

export default Skills
