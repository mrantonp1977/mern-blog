import { Button, FileInput, Select, TextInput } from 'flowbite-react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function CreatePost() {
  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">Create a post</h1>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput type='text' placeholder='Title' required id='title' className='flex-1'/>
          <Select>
            <option value='uncategorized'>Select a category</option>
            <option value='agriculture'>Agriculture</option>
            <option value='weather'>Weather</option>
            <option value='pc_building'>Pc Building</option>
            <option value='coding'>Coding</option>
            <option value='computers'>Computers</option>
            <option value='web_design'>Web Design</option>
            <option value='education'>Education</option>
            <option value='sports'>Sports</option>
            <option value='other'>Other</option>
          </Select>
        </div>
        <div className="flex gap-4 items-center justify-between border-4 border-teal-600 border-dotted p-3">
          <FileInput type='file' accept='image/*' />
          <Button type='button' gradientDuoTone='purpleToBlue' size='sm' outline>Upload image</Button>
        </div>
        <ReactQuill theme='snow' placeholder='Write something...' className='h-72 mb-12' required/>
        <Button type='submit' gradientDuoTone='purpleToPink'>
            Publish
        </Button>
      </form>
    </div>
  )
}