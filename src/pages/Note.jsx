import {React, useEffect, useState} from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

function Note() {
  const queryParams = new URLSearchParams(useLocation().search);
  const title = queryParams.get('name');
  const navigate = useNavigate();
  const [createdDate, setCreatedDate] = useState(null);
  const [editedDate, setEditedDate] = useState(null);
  const [text, setText] = useState('');
  const [newTitle, setNewTitle] = useState('');

  useEffect(() => {
    const storedNote = JSON.parse(localStorage.getItem(title))
    if(storedNote) {setText(storedNote.text);setEditedDate(new Date().toLocaleDateString('en-GB'))}
    else setCreatedDate(new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long' }));
    console.log(title||'title not found')
  }, [title]);

  const handleSave = () => {
    if(text.trim().length ===0){alert('note cannot be empty');return}
    setEditedDate(new Date().toLocaleDateString('en-GB'));

    if (title && localStorage.getItem(title)){
      localStorage.setItem(title, JSON.stringify({text:text,creationDate:JSON.parse(localStorage.getItem(title)).creationDate,editDate:editedDate}));
    }
    else {
      if(newTitle.trim().length>0)localStorage.setItem(newTitle, JSON.stringify({text:text, creationDate:createdDate, editDate:editedDate})); 
      else {alert('Title Cannot be Empty');return}
    }
      navigate('/')

  };

  return (
    <>
      <h2>{title||'New Note'}</h2>
      {!title&&(<><label htmlFor="titleField">Title</label><input id="titleField" type='text' onChange={ev=>setNewTitle(ev.target.value)} /></>)}
      <label htmlFor="textField">Content</label>
      <textarea id="textField" value={text} onChange={ev=>setText(ev.target.value)}></textarea>
      <button onClick={handleSave}>Save</button>
    </>
  )
}

export default Note