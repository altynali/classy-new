export type CardType = {
  _id: string
  classname: string
  description: string
  date: string
  attendees: string[]
  location: string
  no_of_places: string
  created_by: string
  created_by_name: string
  create_date: string
}

export const initCardObj = {
  _id: "",
  classname: "",
  description: "",
  date: "",
  attendees: [],
  location: "",
  no_of_places: "",
  created_by: "",
  created_by_name: "",
  create_date: "",
}
