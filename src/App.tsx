import { LoginPage } from "./pages/LoginPage/LoginPage";
import { createBrowserRouter, RouterProvider } from "react-router";
import { MainPage } from "./pages/MainPage/MainPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { RegistrationPage } from './pages/RegistrationPage/RegistrationPage';
import { PostPage } from "./pages/PostPage/PostPage";


const routerConfig = createBrowserRouter([
  {
    path: "/",
   element: <LoginPage/>
 },
  {
    path: "/main",
    element: <MainPage />,
  }
  , {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path:"/registration",
    element:<RegistrationPage/>
  },  {
    path:"/post/:id",
    element:<PostPage/>
  },
])


function App() {
  return (
    <>
      <div className="App">
        <div className="container">
          <RouterProvider router={routerConfig}/>
        </div>
      </div>
    </>
  );
}

export default App;
