import {React, useState} from 'react'
import Card from './Card'
import axios from 'axios'

function Main() {
    const[search ,setSearch] = useState("");
    const [bookData, setData]=useState([]);
    const searchBook = (evt)=>{
            if(evt.key==="Enter")
            {
                axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyC_haRGVtUMkH3WoTGFxIzFrQhJhtpYB2o +&maxResults=40')
                .then(res=>setData(res.data.items))
                .catch(err=>console.log(err))
            }
    }
  return (
    <>
        <div className="header">
            <div className="row1">
                <h1>“Outside of a dog, a book is man's best friend.”</h1>
            </div>
            <div className="row2">
                <h2>Find your book</h2>
                <div className="search">
                    <input type="text" placeholder='Type your book's name then Enter' 
                    value={search} onChange={e=>{setSearch(e.target.value)}}
                    onKeyPress={searchBook}
                    />
                 
                    </div>
                    <img src="./images/books2.jpg" alt="book" />
            </div>
        </div>
        <div className="container">
          {  <Card book={bookData}/> }
            </div>
    </>
  )
}

export default Main
