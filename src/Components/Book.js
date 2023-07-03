import {React, useState} from 'react'
import Card from './Card'
import axios from 'axios'


function Book() {
    const[search ,setSearch] = useState("");
    const [bookData, setData]=useState([]);

    const searchTextHandler = (event) => {
      setSearch(event.target.value);
    };
    
    const searchBook = (evt)=>{

                axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyC_haRGVtUMkH3WoTGFxIzFrQhJhtpYB2o +&maxResults=40')
                .then(res=>setData(res.data.items))
                .catch(err=>console.log(err))
            
    }
  return (
    <>
        <div className="header">
            <div className="row1">
                <h2>Find your book</h2>
                <div className="search">
                    <input type="text" placeholder=" Book's Topic"
                    value={search} 
                    onChange={searchTextHandler}
                    />
                  <div className="button">
                    <button onClick={searchBook}><strong>Search</strong></button>
                  </div>
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

export default Book