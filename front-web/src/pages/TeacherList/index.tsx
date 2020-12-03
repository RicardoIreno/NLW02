import React, { FormEvent, useState } from 'react'
import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'
import Input from '../../components/form/input'
import Select from '../../components/form/select'
import './style.css' 
import api from '../../services/api'



function TeacherList() {
  const [teachers, setTeachers] = useState([])
  const [subject, setSubject] = useState('')
  const [week_day, setWeekDay] = useState('')
  const [time, setTime] = useState('')
  
  async function searchTeachers(e: FormEvent) {
    e.preventDefault()

    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time,
      }
    })
    // console.log({
    //   subject,
    //   week_day,
    //   time
    // })
    console.log(response.data)
    setTeachers(response.data)
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis">      
        
        <form id="search-teachers"> 
          <Select 
              name="subject" 
              label="Matéria" 
              value={subject} 
              onChange={(e) => {setSubject(e.target.value)}} 
              options={[
                {value: "Artes", label: "Artes" },
                {value: "Paleontologia", label: "Paleontologia" },
                {value: "Criminalistica", label: "Criminalistica" },
              ]}
            />

          <Select 
            name="week_day"
            label="Dia da semana"
            onChange={(e) => {setWeekDay(e.target.value) }}
            options={[
              {value: '0', label: 'Domingo'},
              {value: '1', label: 'Segunda'},
              {value: '2', label: 'Terça'},
              {value: '3', label: 'Quarta'},
              {value: '4', label: 'Quinta'},
              {value: '5', label: 'Sexta'},
              {value: '6', label: 'Sábado'},
            ]}
          />

          <Input 
            type="time" 
            name="time" 
            label="Hora" 
            onChange={(e) => {setTime(e.target.value) }}
          />
            <button type="submit" onClick={searchTeachers}>Buscar</button>
            
        </form>

      </PageHeader>
        <main className="main-teacher-list">
          {teachers.map((teacher: Teacher) => {
            return <TeacherItem key={teacher.id} teacher={teacher} />
          })}
        </main>
    </div>
  )
}
export default TeacherList