import React from 'react'
import { RNCamera, FaceDetector } from 'react-native-camera';
import axios from 'axios'

export default class CameraScreen extends React.Component {
    render() {
        return <>
            <RNCamera style={{ flex: 1 }} onBarCodeRead={async (e) => {
                if (e.data.startsWith("modev:authenticateClient")) {
                    let clientCode = e.data.split("=")[1]
                    let result = await axios.post(`https://92cecb951ec9.ngrok.io/authenticateClient?code=${clientCode}`)
                    console.log(result.data)
                }
            }}>

            </RNCamera>
        </>
    }
}