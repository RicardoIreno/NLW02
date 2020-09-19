export default function convertHourToMinutes(time: string) {
  const [hour, minutes] = time.split(':').map(Number)
  const timeInMinutes = (hour * 60) + minutes

  //divide o array pelo ':', pega cada sub-array criado com o map, 
  // e transforma em número. Ai,

  return timeInMinutes
}