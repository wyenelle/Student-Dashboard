import React from 'react'
import { useState } from 'react'
import School from './School'
import './BlogSchool.css'

const BlogSchool = () => {
const [schools] = useState([
        {
            id : 1,
            name : 'School Of Engineering',
            image : 'src/assets/images-1.jpeg',
            desc : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi in sint accusantium unde asperiores illum adipisci vero id iure, dolor totam eveniet molestias rerum quia, eos culpa natus iste obcaecati.'
        },
        {
            id : 2,
            name : 'School Of Data',
            image : 'src/assets/images-2.jpeg',
            desc : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi in sint accusantium unde asperiores illum adipisci vero id iure, dolor totam eveniet molestias rerum quia, eos culpa natus iste obcaecati.'
        },
        {
            id : 3,
            name : 'School Of Product',
            image : 'src/assets/images-3.jpeg',
            desc : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi in sint accusantium unde asperiores illum adipisci vero id iure, dolor totam eveniet molestias rerum quia, eos culpa natus iste obcaecati.'
        }
])
  return (
    <div>
        <div className="w-full blog-school grid grid-cols-1 md:grid-cols-3 border border-black">
        {
            schools.map(school => <School key={school.id} school={school} />)
        }
        </div>
        
    </div>
  )
}

export default BlogSchool