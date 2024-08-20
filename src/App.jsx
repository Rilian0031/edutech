import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./components/auth/Login";
import SignUp from "./components/Pages/SignUp";
import ForgotPassword from "./components/auth/ForgotPassword";
import CourseList from "./components/Pages/CourseList";
import Home from "./components/Pages/Home";
import CourseDetails from "./components/Pages/CourseDetails";
import AddCourse from "./components/Pages/AddCourse";
import Instructor from "./components/Pages/Instructor";
import InstructorDetails from "./components/Pages/InstructorDetails";
import InstructorRegistration from "./components/Pages/InstructorRegistration";
import SelectCourse from "./components/Pages/SelectCourse";
import StudentsRegistration from "./components/Pages/StudentsRegistration";
import Testimonial from "./components/Pages/Testimonial";
import Register from "./components/Pages/Register";
import Anouncements from "./components/auth/DashBoard/Anouncements";
import Assignments from "./components/auth/DashBoard/Assignments";
import DashboardLayout from "./components/auth/DashBoard/DashboardLayouts";
import Extracurriculars from "./components/auth/DashBoard/Extracurriculars";
import Grades from "./components/auth/DashBoard/Grades";
import Schedules from "./components/auth/DashBoard/Schedules";
import ResetPassword from "./components/auth/ResetPassword";
import About from "./components/Pages/About";
import Blog from "./components/Pages/Blog";
import Contact from "./components/Pages/Contact";
import Dashboard from "./components/auth/DashBoard/DashBoard";
import ChatComponent from "./components/ChatComponent";
import Navbar from "./components/Navbar";

function App() {
  const user = true;

  const guestroutes = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/forgotpassword", element: <ForgotPassword /> },
    {path: "/instructorregistration", element: <InstructorRegistration/> }
  ]);

  const loggedinroutes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "signup",
      element: <SignUp />,
    },
    {
      path: "forgotpassword",
      element: <ForgotPassword />,
    },
    {
      path: "courselist",
      element: <CourseList />,
    },
    {
      path: "coursedetails",
      element: <CourseDetails />,
    },
    {
      path: "addcourse",
      element: <AddCourse />,
    },
    {
      path: "instructor",
      element: <Instructor />,
    },
    {
      path: "instructordetails",
      element: <InstructorDetails />,
    },
    {
      path: "instructorregistration",
      element: <InstructorRegistration />,
    },
    {
      path: "selectcourse",
      element: <SelectCourse />,
    },
    {
      path: "studentregistration",
      element: <StudentsRegistration />,
    },
    {
      path: "testimonial",
      element: <Testimonial />,
    },
    {
      path: "register",
      element: <Register />,
    },
    {
      path: "resetpassword",
      element: <ResetPassword />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "blog",
      element: <Blog />,
    },
    {
      path: "contact",
      element: <Contact />,
    },
    {
      path: "chatcomponent",
      element: <ChatComponent />,
    },
    {
      path: "dashboard",
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "grades",
          element: <Grades />,
        },
        {
          path: "assignments",
          element: <Assignments />,
        },
        {
          path: "schedules",
          element: <Schedules />,
        },
        {
          path: "extracurriculars",
          element: <Extracurriculars />,
        },
        {
          path: "announcements",
          element: <Anouncements />,
        },
      ],
    },
  ]);

  return <>
    {/* <Navbar /> */}
    <RouterProvider router={user ? loggedinroutes : guestroutes} />
  </>;
}

export default App;