import {React, useState, useEffect} from 'react'
import CustomLink from '../components/CustomLink'
import NoteCard from '../components/NoteCard'
import PlusIcon from '../assets/plus.svg?react'


function Home() {
  const [notes, setNotes] = useState([]);
  let noteDate;
  let currentDate = new Date();

  useEffect(() => {
    try {
      const storedNotes = Object.keys(localStorage).map(key=>{
        const data = JSON.parse(localStorage.getItem(key))
        return data ? {title:key, ...data} : null
      }).filter(note=>note !== null)
      setNotes(storedNotes)
    } catch (error) {
      console.warn(error);
    }
  }, []);
  return (
    <>
      <div className='flex flex-row mx-56 my-20 items-center justify-between'>
        <h1 className='text-6xl'>My NoteBook</h1>
        <CustomLink to={'/note'}><PlusIcon className='w-6 h-6'/>Add new Note</CustomLink>
      </div>
      <div className="cardContainer grid grid-cols-3 mx-20 justify-between place-items-center">
      {notes.length > 0 ? (
          notes.map((note, index) => (
            <NoteCard 
              key={index}
              title={note.title}
              text={note.text}
              creationDate={note.creationDate}
              editDate={note.editDate}
              size='large'
            />
          ))
        ) : (
          <div>Nothing found</div>
        )}
      </div>
    </>
  )
}

export default Home