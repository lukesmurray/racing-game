import { useStore, mutation } from '../store'
import { useState } from 'react'
import { getLeaderBoardData, insertTime } from '../utils/data/leaderboard'
import { Item } from './LeaderBoard'

export const Finished = () => {
  const LOCAL_STORAGE_KEY = 'racing-pmndrs-name'
  const [name, setName] = useState('')
  const finished = useStore((state) => state.finished)
  const readableTime = (finished / 1000).toFixed(2)
  const [savedName, setSavedName] = useState(window.localStorage.getItem(LOCAL_STORAGE_KEY))
  const [leaderBoard, setLeaderBoard] = useState(null)
  const [position, setPosition] = useState(null)

  const sendTime = async () => {
    const newTime = await insertTime({
      time: finished,
      name: savedName,
    })

    const leaderboardData = await getLeaderBoardData()
    setLeaderBoard(leaderboardData)
    setPosition(leaderboardData.findIndex((l) => l.id === newTime[0].id) + 1)
  }

  const setUsername = (e) => {
    e.preventDefault()

    window.localStorage.setItem(LOCAL_STORAGE_KEY, name)
    setSavedName(name)
  }

  if (leaderBoard) {
    return (
      <div className="finished">
        <h1> You are number #{position}</h1>
        <ul className="leaderboard">
          {leaderBoard.map((score) => (
            <Item {...score} key={score.id} />
          ))}
        </ul>
        <Restart />
      </div>
    )
  }

  return (
    <div className="finished">
      <h1>Good job! Your time was {readableTime}</h1>
      {!savedName ? (
        <form className="name-form" onSubmit={setUsername}>
          <h2>You belong in our leaderboards! </h2>
          <label htmlFor="name">What is your name?</label>
          <div>
            <input required maxLength={10} minLength={2} id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
            <button className="popup-item-key">Add me</button>
          </div>
        </form>
      ) : (
        <button className="popup-item-key add-me" onClick={sendTime}>
          Add me to the leaderboard
        </button>
      )}
      <Restart />
    </div>
  )
}

const Restart = () => {
  const set = useStore((state) => state.set)
  const cleanState = () =>
    set((state) => ((mutation.start = 0), (mutation.finish = 0), { ...state, finished: false, controls: { ...state.controls, reset: true } }))

  return (
    <button className="restart" onClick={cleanState}>
      <div>Restart</div>
    </button>
  )
}
