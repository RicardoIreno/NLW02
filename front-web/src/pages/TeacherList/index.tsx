import React from 'react'
import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'
import Input from '../../components/form/input'
import Select from '../../components/form/select'
import './style.scss' 

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis">      
        
        <form id="search-teachers">    
          <Select 
            name="week_day"
            label="Dia da semana"
            options={[
              {value: '0', label: 'Domingo'},
              {value: '1', label: 'Segunda'},
              {value: '2', label: 'Terça'},
              {value: '3', label: 'Quarta'},
              {value: '4', label: 'Quinta'},
              {value: '5', label: 'Sexta'},
              {value: '6', label: 'Sábado'},
            ]}/>

            <Input name="Week_day" label="Dia da semana" />
            <Input type="time" name="time" label="Hora" />
        </form>

        <main>
          EI!!!
          <TeacherItem /> 

        </main>
      </PageHeader>
    </div>
  )
}
export default TeacherList