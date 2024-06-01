import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Button, Input } from './components';
// export const history = createBrowserHistory();

// const RouteWithLayout = ({ component: Component, layout: Layout, ...rest }) => (
//   <Route {...rest} render={props => (
//     <Layout>
//       <Component {...props} />
//     </Layout>
//   )} />
// )

const App = () => {
  return <div className="App">
    <div>
      <Button />
    </div>
    <div>
      <Input />
    </div>
  </div>

  // return <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<Home />} />
  //     <Route path="/about" element={<h2>About</h2>} />
  //     <Route path="/blog/*" element={<BlogApp />} />
  //     <Route path="/users/*" element={<UserApp />} />
  //   </Routes>
  // </BrowserRouter>

  // function Home() {
  //   return (
  //     <>
  //       <h1>Welcome!</h1>
  //       <p>
  //         Check out the <Link to="/blog">blog</Link> or the{" "}
  //         <Link to="users">users</Link> section
  //       </p>
  //     </>
  //   );
  // }

  // function BlogApp() {
  //   return (
  //     <Routes>
  //       <Route index element={<h1>Blog Index</h1>} />
  //       <Route path="posts" element={<h1>Blog Posts</h1>} />
  //     </Routes>
  //   );
  // }

  // function UserApp() {
  //   return (
  //     <Routes>
  //       <Route index element={<h1>Users Index</h1>} />
  //     </Routes>
  //   );
  // }
}

export default App;
