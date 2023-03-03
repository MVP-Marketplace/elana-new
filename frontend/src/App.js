import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import {ChoosingACategory} from './pages/FindingAPractitioner/ChoosingACategory';
import {Homescreen} from './pages/HomePage/Homescreen';
import {IndividualPage} from './pages/HomePage/IndividualPage';
import {PractitionerPage } from './pages/HomePage/PractitionerPage';
import {PractitionerLogin} from './pages/Practitioner/PractitionerLogin';
import {PractitionerSignUp} from './pages/Practitioner/PractitionerSignUp';
import {PrivacyPolicy} from './pages/Others/PrivacyPolicy'
import {Terms} from './pages/Others/Terms'
import {Navbar} from './components/Navbar';
import {Footer} from './components/Footer';
import { HomePage } from './pages/HomePage/HomePage';
import { About } from './pages/HomePage/About';
import { NewPractitionerProfile} from './pages/Practitioner/newPractitionerProfile';
import { PractitionerListing } from './pages/FindingAPractitioner/PractitionerListing';
import { PractitionerProfileUserView } from './pages/FindingAPractitioner/PractitionerProfileUserView';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop>
          <Navbar/>
          <Routes>
            <Route path='/homeScreen' element={<Homescreen/>}/>
            <Route path='/' element={<HomePage/>} />
            <Route path='/about' element={<About/>}/>
            <Route path='/individualPage' element={<IndividualPage/>}/>
            <Route path='/practitionerPage' element={<PractitionerPage/>}/>
            <Route path='/terms' element={<Terms/>}/>
            <Route path='/privacyPolicy' element={<PrivacyPolicy/>}/>
            <Route path='/choosingACategory' element={<ChoosingACategory/>}/>
            <Route path='/practitionerSignUp' element={<PractitionerSignUp/>}/>
            <Route path='/practitionerLogin' element={<PractitionerLogin/>}/>
            <Route path='/newPractitionerProfile' element={<NewPractitionerProfile/>}/>
            <Route path='/practitionerListing/:id' element={<PractitionerListing/>}/>
            <Route path='/practitionerProfileUserView/:practitioner_id' element={<PractitionerProfileUserView/>}/>
          </Routes>
      <Footer/>
      </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
