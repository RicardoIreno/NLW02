import React, { useState } from 'react'
import { View, Text, ScrollView, TextInput } from 'react-native'
import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'


import styles from './styles'
import api from '../../services/api'

function TeacherList() {

  const [ isFiltersVisible, setIsFiltersVisible ] = useState(true)

  const [teachers, setTeachers] = useState([])
  const [subject, setSubject] = useState('')
  const [week_day, setWeekDay] = useState('')
  const [time, setTime] = useState('')

  function handleToggleFiltersVisible(){
    setIsFiltersVisible(!isFiltersVisible)
  }

  async function handleFiltersSubmit(){
    // console.log({
    //   subject, weekDay, time
    // })

    const response = await api.get('classes', {
      params: {
        subject, 
        week_day, 
        time,
      }
    })

    console.log(response.data)
    
    setTeachers(response.data)
  }

  return (
    <View style={styles.container}> 

      <PageHeader 
        title="Proffys disponíveis" 
        headerRight={
          <BorderlessButton onPress={handleToggleFiltersVisible}>
            <Feather name="filter" size={20} color='#fff' />
          </BorderlessButton>
        }>

        { isFiltersVisible && ( 
          <View style={styles.searchForm}>

            <Text style={styles.label}>Matéria</Text>
            <TextInput
              value={subject}
              onChangeText={text => setSubject(text)}
              style={styles.input}
              placeholder="Qual a matéria?"
              // placeholderTextColor='#c1ncc'
            >
            </TextInput>

            <View style={styles.inputGroup}>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  value={week_day}
                  onChangeText={text => setWeekDay(text)}
                  style={styles.input}
                  placeholder="Qual o dia?"
                  // placeholderTextColor='#c1ncc'
                >
                </TextInput>
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  value={time}
                  onChangeText={text => setTime(text)}
                  style={styles.input}
                  placeholder="Qual horário?"
                  // placeholderTextColor='#c1ncc'
                >
                </TextInput>
              </View>

            </View>

              <RectButton onPress={handleFiltersSubmit} style={styles.submitButton}>
                <Text style={styles.submitButtonText}>Filtrar</Text>
              </RectButton>
          </View>

        )}


      </PageHeader>
      <ScrollView 
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 24,  
        }}
      >
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </View>
  )
}

export default TeacherList