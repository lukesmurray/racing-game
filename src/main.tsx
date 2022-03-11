import ReactDOM from 'react-dom'
import { useGLTF, useTexture } from '@react-three/drei'
import 'inter-ui'
import './styles.css'
import { App } from './App'
import trackDracoUrl from './assets/models/track-draco.glb'
import chassisDracoUrl from './assets/models/chassis-draco.glb'
import wheelDracoUrl from './assets/models/wheel-draco.glb'
import heightMapUrl from './assets/textures/heightmap_1024.png'

useTexture.preload(heightMapUrl)
useGLTF.preload(trackDracoUrl)
useGLTF.preload(chassisDracoUrl)
useGLTF.preload(wheelDracoUrl)

ReactDOM.render(<App />, document.getElementById('root'))
