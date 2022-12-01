import {Route, Routes, NavLink , Link, useRoutes} from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import BookList from './pages/BookList'
import BookLayout from './pages/BookLayout'
import Book from './pages/Book'
import NewBook from './pages/NewBook'
import BookRoutes from './pages/BookRoutes'


function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <Home/>
    }
  ]);
  return (
    <>

    {element}
    
    <nav>
      <ul>
        <li><NavLink style = {({isActive}) => {
                return isActive ? {color:"red"} : {}
        }}
         to= '/' replace>Home</NavLink></li>
        <li><NavLink to= '/books'>Booklist</NavLink></li>
      </ul>
    </nav>
<Routes>
<Route path = '/' element = {<Home/>}/>
  <Route path = '/books/*' element= {<BookRoutes/>}/>
  <Route path = '*' element = {<NotFound/>}/>
</Routes>

    </>
    
  );
}

export default App;
