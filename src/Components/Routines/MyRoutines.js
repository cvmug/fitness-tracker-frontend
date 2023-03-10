import { useEffect } from 'react';
import Header from '../Header'
import DisplayMyRoutines from './DisplayMyRoutines'

export default function MyRoutines({ setIsLoggedIn, setToken, isLoggedIn, token, user, setUser }) {

  useEffect(() => {
    const localToken = window.localStorage.getItem('token');
    setToken(localToken);
    if (localToken) {
      setIsLoggedIn(true);
    }
    if (token) {
      fetch('HTTPS://fitnesstrac-kr.herokuapp.com/api/users/me', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localToken}`,
        },
      })
        .then((response) => response.json())
        .then((result) => {
        })
        .catch((error) => console.log(error));
    }
  }, []);

  return (
    <div>
      <Header
        setIsLoggedIn={setIsLoggedIn}
        setToken={setToken}
        isLoggedIn={isLoggedIn}
        token={token}
        user={user}
        setUser={setUser} />
      <div className='blueSec'></div>
      <div className='leftSection'></div>
      <section className='myRoutinesBody'>
        <DisplayMyRoutines />
      </section>
    </div>
  )
}
