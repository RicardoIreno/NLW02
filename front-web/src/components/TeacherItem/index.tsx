import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import api from '../../services/api'
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
  function createNewConnection() {
   api.post('connections', {
     user_id: teacher.id,
   })
  }
 
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
          <a 
            target="_blank"
            onChange={createNewConnection} 
            className="button" 
            href={`https://wa.me/${teacher.whatsapp}`}
          > 
              <img src={whatsappIcon} alt="Whatsapp"/>
          </a>
      </footer>
    </article>
  )
}
export default TeacherItem