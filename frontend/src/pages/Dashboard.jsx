import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import PractitionerProfileForm from '../components/practitionerProfileForm'
import Spinner from '../components/spinner'
import { getPractitionerProfiles, reset } from '../features/practitionerProfiles/practitionerProfileSlice'
import PractitionerProfileItem from '../components/practitionerProfileItem'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { practitionerUser } = useSelector((state) => state.auth)
  const {practitionerProfiles, isLoading, isError, message} = useSelector((state) => state.practitionerProfiles)

  useEffect(() => {
    if(isError) {
      console.log(message)
    }

    if (!practitionerUser) {
      navigate('/login')
    }

    dispatch(getPractitionerProfiles())

    return () => {
      dispatch(reset())
    }
  }, [practitionerUser, navigate, isError, message, dispatch])

  if(isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='header'>
        <h1>Welcome {practitionerUser && practitionerUser.firstName && practitionerUser.lastName}</h1>
        <p>Profile Dashboard</p>
      </section>

      <PractitionerProfileForm />

      <section className='content'>
        {practitionerProfiles.length > 0 ? (
          <div className="goals">
            {practitionerProfiles.map((practitionerProfile) => (
              <PractitionerProfileItem key={practitionerProfile._id} practitionerProfile={practitionerProfile} />
            ))}
          </div>
        ) : (<h3>You have not made a profile</h3>)}
      </section>
    </>
  )
}

export default Dashboard