import { useEffect, useState } from "react"
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';

const useImagePicker = () => {
  const [file, setFile] = useState<ImagePicker.ImagePickerAsset>();

  const [cameraPermission, setCameraPermission] = useState(false);

  const permissionFunction = async () => {
    const cameraPermission = await Camera.requestCameraPermissionsAsync();
    setCameraPermission(cameraPermission.status === 'granted');

    if (
      cameraPermission.status !== 'granted'
    ) {
      alert('Permission for media access needed.');
    }
  }

  useEffect(() => {
    if(!cameraPermission) {
      permissionFunction();
    }
  }, []);
  
  


  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setFile(result.assets[0]);
    }
  }

  const takePhoto = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setFile(result.assets[0]);
    }
  }


  return {
    file,
    setFile,
    pickImage,
    takePhoto,
  }
}

export default useImagePicker;