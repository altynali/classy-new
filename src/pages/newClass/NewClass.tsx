import { useState, ChangeEvent, FormEvent } from "react"
import "./NewClass.css"

interface FormData {
  title: string
  description: string
  date: string
  location: string
  capacity: string
}

const NewClass: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    date: "",
    location: "",
    capacity: "",
  })

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const submitHandler = (e: FormEvent) => {
    e.preventDefault()

    // Validation
    const { title, description, date, location, capacity } = formData
    if (!title || !description || !date || !location || !capacity) {
      alert("All fields must be filled out")
      return
    }

    console.log(formData)
    // Handle form submission
  }

  return (
    <div className="form_card">
      <div className="form_header">
        <h2 className="form_title">Create New Class</h2>
        <p className="form_sub-title">Enter details below</p>
      </div>
      <form onSubmit={submitHandler}>
        <div className="form_group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="form_group">
          <label htmlFor="desc">Description</label>
          <input
            type="text"
            id="desc"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="form_group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
          />
        </div>
        <div className="form_group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
          />
        </div>
        <div className="form_group">
          <label htmlFor="capacity">Capacity</label>
          <input
            type="text"
            id="capacity"
            name="capacity"
            value={formData.capacity}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="submit-button">
          Create New Class
        </button>
      </form>
    </div>
  )
}

export default NewClass
