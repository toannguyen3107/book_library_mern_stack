import React, { useState } from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import StackInfo from '../components/StackInfo'
import { useSnackbar } from 'notistack'

const CreateBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const{enqueueSnackbar} = useSnackbar();
  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post('http://localhost:8000/books', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Successfull', {variant: 'success'});
        navigate('/');
      })
      .catch((e) => {
        setLoading(false);
        // alert('An error happened. Please check console');
        enqueueSnackbar('Erorr', {variant: 'error'});
        console.log(e);
      })
  };
  return (
    <div className='p-4'>
      <h1 className='text-3xl my-4'>Create Book</h1>
      <BackButton />
      {loading ? (<Spinner />) : ''}
      <div className='flex flex-col border-2 border-sky-600 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl text-gray-500'>Title</label>
          <input 
          type="text"
           value={title}
            onChange={(e)=>setTitle(e.target.value)} 
            className='border-2 border-gray-500 px-4 py-2 w-full'/>
        </div>
        <div className='my-4'>
          <label className='text-xl text-gray-500'>Author</label>
          <input 
          type="text"
           value={author}
            onChange={(e)=>setAuthor(e.target.value)} 
            className='border-2 border-gray-500 px-4 py-2 w-full'/>
        </div>
        <div className='my-4'>
          <label className='text-xl text-gray-500'>Publish year</label>
          <input 
          type="number"
           value={publishYear}
            onChange={(e)=>setPublishYear(e.target.value)} 
            className='border-2 border-gray-500 px-4 py-2 w-full'/>
        </div>
        <button className='p-2 bg-sky-300 m-8 text-gray-900 hover:bg-sky-700 hover:text-gray-100'
        onClick={handleSaveBook}>Save</button>
      </div>
    </div>
  )
}

export default CreateBooks