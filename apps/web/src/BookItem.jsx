import { useEffect, useState } from "react"

const intl = Intl.DateTimeFormat("en-US")

export function BookItem() {
  const [books, setBooks] = useState([])

  async function fetchBooks() {
    const response = await fetch("https://firestore.googleapis.com/v1/projects/rrread-c1f1d/databases/(default)/documents/readings") 
    const data = await response.json() 
    setBooks(data.documents)
    console.log({books})
  }

  useEffect(() => {
    fetchBooks()
  }, [])

  return (
    <>
      {
        books.map((book, index) => (
          <div key={index} className="flex">
            <div className="border-b">
              <h3 className="font-semibold">{book.fields.title.stringValue}</h3>
              <small className="text-gray-500">{book.fields.description.stringValue}</small>
              <small className="text-gray-500">{ intl.format(new Date(book.fields.date.timestampValue))}</small>
            </div>
          </div>
        ))
        
      }
    </>

  )
}


            // <img src={book.fields.img.stringValue} />
