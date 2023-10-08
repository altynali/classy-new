const monthArray = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]

const transformedDate = (date: string) => {
  const setYear = new Date(date).getFullYear()
  const setDay = new Date(date).getDate()
  const getMonth = new Date(date).getMonth()

  // console.log(setYear,setDay,setMonth);
  // create a create date transformation

  const setMonth = monthArray[getMonth]

  const resultDate = `${setMonth} ${setDay}, ${setYear}`

  return resultDate
}

export default transformedDate
