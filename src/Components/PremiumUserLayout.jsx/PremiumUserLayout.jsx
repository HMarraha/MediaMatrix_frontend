import React, {useEffect,useState} from 'react'
import { Navigate, Outlet ,Link} from 'react-router-dom'
import { useStateContext } from '../../Contextapi/contextProvider'
import axiosClient from '../../Axios/axios'
import logo from '../../assets/logo.png'
import { FaPortrait } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa'
import { Button } from '@mui/material'
import Footer from '../GuestLayout/GuestHomeComponents/Footer'
import AccountCircle from '@mui/icons-material/AccountCircle'
const PremiumUserLayout = () => {
  const {user,setUser} = useStateContext()
  const [logout,setLogout] = useState(true)
  const [error,setError] = useState()
  const [loading,setLoading] = useState(true)
  useEffect(()=> {
    const getUser = async () => {
      try {
        const response = await axiosClient.get('/users/user')
        console.log(response.data)
        setUser(response.data)

      } catch(error) {
        console.error(error)
      }
    }
    getUser()
  },[])
  useEffect(() => {
    if (user) setLoading(false)
    else setLoading(true)
  }, [user])
  const handleLogout = () => {
    setLogout(prevLogout => !prevLogout)
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosClient.post('/users/logout');
      console.log(response)
      setUser(null)
    } catch (error) {
      setError(error.message);
      console.error(error);
    }
  };
  const logoutstyle = {
    visibility: logout ? "hidden" : "visible",
    transform: logout ? "translateY(-5%)" : "translateY(5%)",
    transition: logout ? "0s" : "150ms ease-out",
    opacity: logout ? "0" : "1",
  }
  if (loading) return <></>
  return (
    <>
       <nav className='navbar'>
        <div className='logo'>
            <Link to='/home'><img src={logo} alt="" /></Link>
        </div>
        <ul className="buttons">
            <div className='premiumbuttons'>
                <Link to='/watch' style={{textDecoration: 'none'}}><li className='premiumbutton'>Watch</li></Link>
                <Link to='/supersearch' style={{textDecoration: 'none'}}><li className='premiumbutton'>SuperSearch</li></Link>
            </div>
            <div onClick={handleLogout} className="profiledisplay">
                        <h1 className="profilename">{user.username}</h1>
                        <i className="profileicon"><AccountCircle style={{fontSize: '50px', color:'#BE3144', boxShadow: '1px 1px 1px 1px black', borderRadius: '30px', marginLeft: '0.5rem'}} /></i>
                        <div style={logoutstyle} className="logout">
                            <Link to="/premiumprofile">
                                <Button className="profilebtn" style={{width : '15rem',height: '3rem',backgroundColor:'#BE3144'}} variant="contained">Profile</Button>
                            </Link>
                                <Button className="signout" onClick={handleSubmit} style={{width : '15rem',marginTop: '1rem',height: '3rem',backgroundColor:'#BE3144'}} variant="contained">Sign out</Button>
                                <div style={{textAlign:'center'}} className="logoutinfo">
                                    <Link to='/assign' style={{textDecoration:'none'}}><h1 className="profilename">{user.username}</h1></Link>
                                    <p className="profileemail">{user.email}</p>
                                    <FaStar color='#BE3144'/>
                                </div>
                        </div>
                    </div>
        </ul>
    </nav>
      <Outlet />
      <Footer/>
    </>
  );
}

export default PremiumUserLayout