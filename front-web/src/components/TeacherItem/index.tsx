import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './style.scss'


export interface Teacher {
  id: number
  avatar: string 
  bio: String
  cost: number
  name: string
  subject: string
  whatsapp: string
}

interface TeacherItemProps {
  teacher: Teacher
}


const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  return(
    <article className="teacher-item">
      <header>
        <img src="" alt="" />
        <div>
            <strong> {teacher.name} </strong>
            <span> {teacher.subject} </span>
        </div>
      </header>

      <p> {teacher.bio}</p>

      <footer>
          <p>Preço por hora
            <strong> {teacher.cost} </strong>
          </p>
          <button type="button"> 
              <img src={whatsappIcon} alt="Whatsapp"/>
          </button>
      </footer>
    </article>
  )
}
export default TeacherItem