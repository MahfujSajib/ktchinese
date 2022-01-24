import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AutherPort from './page/AutherPort/AutherPort';
import GroupClass from './page/Classes/GroupClass/GroupClass';
import OneonOne from './page/Classes/OneonOne/OneonOne';
import VideoLesson from './page/Classes/VideoLesson/VideoLesson';
import Dashboard from './page/Dashboard/Dashboard';
import FindClasses from './page/FindClasses/FindClasses';
import Header from './page/Header';
import Home from './page/Home/Home';
import Login from './page/Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="findclasses" element={<FindClasses />} />
          <Route path="auther" element={<AutherPort />} />
          <Route path="login" element={<Login />} />
          <Route path="onetoone" element={<OneonOne />} />
          <Route path="groupclass" element={<GroupClass />} />
          <Route path="videolesson" element={<VideoLesson />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
