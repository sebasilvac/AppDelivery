import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'

interface ItemRoleProps {
  role: string,
  description: string,
  img: any
}

export const ItemRole = ({
  role,
}: ItemRoleProps) => {
  return <TouchableOpacity>
    <View>
      <Image source={require('@/assets/admin.png')} width={10} height={10} />
    </View>
  </TouchableOpacity>
}
