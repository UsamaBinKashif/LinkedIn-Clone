import React from 'react'
import { Avatar } from '@mui/material'
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';
function HeaderOptions({Title, Icon, avatar, onClick}) {
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className='header__options'>
      {Icon && <Icon className="header__options--icon" />}
      {avatar && (<Avatar className="header__options--icon" src={user?.photoURL} sx={{ width: 24, height: 24}}>{user?.email[0]}</Avatar>)}
      <h3 className='header__options--title' >{Title}</h3>
    </div>
  )
}

export default HeaderOptions
