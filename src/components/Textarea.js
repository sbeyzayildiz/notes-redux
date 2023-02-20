import { colors } from '../colors';
import { useState } from 'react';
import { addNote } from '../redux/NotesSlice/notesSlice';
import { useDispatch } from 'react-redux';

function Textarea() {

  const [selectedColor, setSelectedColor] = useState('pink');
  const [note, setNote] = useState('');

  const dispatch = useDispatch();

  const handleSelectColor = (color) => {
    setSelectedColor(color)
  }

  const handleTextNote = (e) => {
    setNote(e.target.value);
  }

  const createNote = () => {
    setNote('');
    dispatch(addNote({color: selectedColor, note: note}));
  }

  return (
    <div className='textarea-container'>
      <textarea className='textarea-bar' placeholder='Enter your note here...' onInput={handleTextNote} value={note}>
      </textarea>
      <div className='textarea-footer'>
        <div className='colors-selection'>
          {colors.map((color, index) => (
            <div style={{ backgroundColor: color.color }} key={index} onClick={() => handleSelectColor(color.title)}>
              <svg className='correct-icon' style={{ display: selectedColor !== color.title ? 'none' : 'block' }} viewBox="0 0 196.887 196.887">
                <g>
                  <polygon style={{ fill: '#010002' }} points="191.268,26.967 59.541,158.683 5.615,104.76 0,110.386 59.541,169.92 196.887,32.585 	" />
                </g>
              </svg>
            </div>
          ))}
        </div>
        <button className='add-button' onClick={() => createNote()}>ADD</button>
      </div>

    </div>
  )
}

export default Textarea