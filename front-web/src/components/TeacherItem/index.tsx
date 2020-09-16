import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem() {
  return(
    <article className="teacher-item">
      <header>
        <img src="" alt="" />
        <div>
            <strong>Testando</strong>
            <span>samerda</span>
        </div>
      </header>
      <p></p>

      <footer>
          <p>Preço por hora
            <strong> 300 conto </strong>
          </p>
          <button type="button"> 
              <img src={whatsappIcon} alt="Whatsapp"/>
          </button>
      </footer>
    </article>
  )
}
export default TeacherItem