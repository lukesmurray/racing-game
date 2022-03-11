import { useEffect, useRef } from 'react'
import { PositionalAudio } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { MathUtils } from 'three'

import type { PositionalAudio as PositionalAudioImpl } from 'three'

import { mutation, useStore } from '../../store'
import accelerateUrl from '../../assets/sounds/accelerate.mp3'

const { lerp } = MathUtils

export const AccelerateAudio = () => {
  const ref = useRef<PositionalAudioImpl>(null)
  const maxSpeed = useStore(({ vehicleConfig: { maxSpeed } }) => maxSpeed)

  const getVolume = () => (2 * mutation.speed) / maxSpeed

  useFrame((_, delta) => {
    ref.current?.setVolume(getVolume())
    ref.current?.setPlaybackRate(lerp(ref.current.playbackRate, mutation.rpmTarget + 0.5, delta * 10))
  })

  useEffect(() => {
    if (ref.current && !ref.current.isPlaying) {
      ref.current.setVolume(getVolume())
      ref.current.play()
    }
    return () => {
      if (ref.current && ref.current.isPlaying) ref.current.stop()
    }
  }, [])

  return <PositionalAudio ref={ref} url={accelerateUrl} loop distance={5} />
}
