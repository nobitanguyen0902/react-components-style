import { Link, NavLink, Outlet, Route, Routes } from 'react-router-dom';
import { Button, Input } from './components';
import './App.css';

const App = () => {
  return <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/button" element={<Button />} />
      <Route path="/input" element={<Input />} />
      <Route path="*" element={<NoMatch />} />
    </Route>
  </Routes>
}

export default App;

const Layout = (props: any) => {
  return <div className='container-fluid'>
    <Header />
    <div className='main-wrapper'>
      <div className='layout layout-has-sider'>
        <Nav />
        <main className='layout-content'> <Outlet /></main>
      </div>
    </div>
  </div>
}

const Header = () => {
  return <header className='header-page'>
    <div className='row align-items-center'>
      <div className='col-8'>
        <ul className='header-mainmenu'>
          <li>
            <NavLink to={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/changelog'}>ChangeLog</NavLink>
          </li>
          <li>
            <NavLink to={'/designs'}>Designs</NavLink>
          </li>
          <li>
            <NavLink to={'/components'}>Components</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </header>
}

const Nav = () => {
  return <div className='layout-sider'>
    <ul className='main-menu-container'>
      <li className='nav-menu-item'>
        <Link to={'/'} className='nav-menu-text'>Home</Link>
      </li>
      <li className='nav-menu-item'>
        <Link to={'/button'} className='nav-menu-text'>Button</Link>
      </li>
      <li className='nav-menu-item'>
        <Link to={'/input'} className='nav-menu-text'>Input</Link>
      </li>
    </ul>
  </div>
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  )
}