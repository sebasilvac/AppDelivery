import React, { useState } from 'react';
import { View, Modal, Alert, Text, StyleSheet } from 'react-native';
import { RoundedButton } from '../RoundedButton';

interface ModalPickImageProps {
  openGallery: () => void;
  openCamera: () => void;
  modalUseState: boolean;
  setModalUseState: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalPickImage = ({
  openGallery,
  openCamera,
  modalUseState,
  setModalUseState,
}: ModalPickImageProps) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalUseState}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalUseState(!modalUseState);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>

            <View style={styles.buttonContainer}>
              <RoundedButton
                text="Galería"
                onPress={() => {
                  openGallery();
                  setModalUseState(!modalUseState);
                }}
              />

              <RoundedButton
                text="Cámara"
                onPress={() => {
                  openCamera();
                  setModalUseState(!modalUseState);
                }}
              />
            </View>

          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 300,
    height: 200,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
