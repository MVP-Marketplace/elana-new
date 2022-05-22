import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PractitionerProfileForm from '../components/practitionerProfileForm'

function Dashboard() {
  const navigate = useNavigate()
  const { practitionerUser } = useSelector((state) => state.auth)

  useEffect(() => {
    if (!practitionerUser) {
      navigate('/login')
    }
  }, [practitionerUser, navigate])

  return (
    <>
      <section className='header'>
        <h1>Welcome {practitionerUser && practitionerUser.firstName}</h1>
        <p>Profile Dashboard</p>
      </section>

      <PractitionerProfileForm />
    </>
  )
}

export default Dashboard