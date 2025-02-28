import React from 'react'
import { Link } from 'react-router-dom'

function NoteCard({text, title, creationDate, editDate}) {
  return (
    <Link to={`/note?name=${title}`} className="cardContainer flex flex-col justify-between py-4 px-2 items-center w-[15rem] h-[13rem] hover:bg-secondary-grey-05 transition-colors duration-500 rounded-md">
      <div className="textContainer bg-secondary-grey-01 text-secondary-grey-06 w-full mx-4 p-2 rounded-md h-[7rem]">
        <p children={text.slice(0,67).trim()+'...'}></p>
      </div>
      <div className="detailsContainer place-items-center">
        <h2 className='w-fit font-bold text-lg'>{title}</h2>
        <div className="dates" children={title}>
          <small className='creationDate' children={creationDate}></small>
          •
          <small className='editDate' children={editDate}></small>
        </div>
      </div>
    </Link>
  )
}

export default NoteCard