import { RemoveUserLocalUseCase } from '@/Domain/useCases/userLocal/RemoveUserLocal'
import React from 'react'

const ProfileInfoViewModel = () => {
  const handleLogout = async () => {
    await RemoveUserLocalUseCase()
  }

  return {
    handleLogout,
  }
}

export default ProfileInfoViewModel