import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {ChoosingACategory} from './pages/FindingAPractitioner/ChoosingACategory';
import {PractitionerListing} from './pages/FindingAPractitioner/PractitionerListing';
import {Homescreen} from './pages/HomePage/Homescreen';
import {AboutPage} from './pages/HomePage/AboutPage';
import {IndividualPage} from './pages/HomePage/IndividualPage';
import {PractitionerPage } from './pages/HomePage/PractitionerPage';
import {PractitionerLogin} from './pages/Practitioner/PractitionerLogin';
import {PractitionerCreateProfile} from './pages/Practitioner/PractitionerCreateProfile';
import {PractitionerProfile} from './pages/Practitioner/PractitionerProfile';
import {PractitionerEditProfile} from './pages/Practitioner/PractitionerEditProfile';
import {PractitionerSignUp} from './pages/Practitioner/PractitionerSignUp';
import {PrivacyPolicy} from './pages/Others/PrivacyPolicy'
import {Terms} from './pages/Others/Terms'
import {Navbar} from './components/Navbar';

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Homescreen/>}/>
            <Route path='/aboutPage' element={<AboutPage/>}/>
            <Route path='/individualPage' element={<IndividualPage/>}/>
            <Route path='/practitionerPage' element={<PractitionerPage/>}/>
            <Route path='/privacyPolicy' element={<PrivacyPolicy/>}/>
            <Route path='/terms' element={<Terms/>}/>
            <Route path='/choosingACategory' element={<ChoosingACategory/>}/>
            <Route path='/practitionerListing' element={<PractitionerListing/>}/>
            <Route path='/practitionerLogin' element={<PractitionerLogin/>}/>
            <Route path='/practitionerCreateProfile' element={<PractitionerCreateProfile/>}/>
            <Route path='/practitionerProfile' element={<PractitionerProfile/>}/>
            <Route path='/practitionerEditProfile/:id' element={<PractitionerEditProfile/>}/>
            <Route path='/practitionerSignUp' element={<PractitionerSignUp/>}/>
          </Routes>
        </div>
      </Router>
      <ToastContainer/>
    </>
  );
}

export default App;
