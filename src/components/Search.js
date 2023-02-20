import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { filterNote } from '../redux/NotesSlice/notesSlice';

function Search() {

  const [searchInput, setSearchInput] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterNote(searchInput))
  }, [dispatch, searchInput])

  const handleInput = (e) => {
    setSearchInput(e.target.value);
  }

  return (
    <>
      <input placeholder='Search...' className='search-bar' autoFocus onInput={handleInput} />
    </>
  )
}

export default Search