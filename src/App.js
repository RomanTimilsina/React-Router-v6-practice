import {Route, Routes, Link} from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import BookList from './pages/BookList'
import Book from './pages/Book'
import NewBook from './pages/NewBook'


function App() {
  return (
    <>
    <nav>
      <ul>
        <li><Link to= '/'>Home</Link></li>
        <li><Link to= '/books'>Booklist</Link></li>
      </ul>
    </nav>
<Routes>
  <Route path = '/' element = {<Home/>}></Route>
  <Route path = '/books' element = {<BookList/>}></Route>
  <Route path = '/books/:id' element = {<Book/>}></Route>
  <Route path = '/books/new' element = {<NewBook/>}></Route>
  <Route path = '*' element = {<NotFound/>}>Not Found</Route>
</Routes>

    </>
    
  );
}

export default App;
