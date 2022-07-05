import React, { useState } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

interface IProps {}

type ScoreType = 0 | 1 | 2 | 3 | 4 | 5

const Rating: React.FC<IProps> = props => {
  const [score, setScore] = useState<ScoreType>(2)
  const [temporaryScore, setTemporaryScore] = useState<ScoreType>(0)

  const LENGTH_SCORE = Array(5).fill(2)

  console.log(LENGTH_SCORE)

  const handleHoverStar = (testScore: ScoreType) => {
    setTemporaryScore(testScore)
  }

  const handleClickStar = () => {
    alert('ookey')
  }

  return (
    <div className="flex text-3xl text-yellow-400 cursor-pointer ">
      {LENGTH_SCORE.map((number, index) => (
        <div
          className="hover:scale-125 transition"
          onMouseOver={() => handleHoverStar((index + 1) as ScoreType)}
          onClick={handleClickStar}>
          {index < score && <AiFillStar className="" />}
          {index >= score && <AiOutlineStar className="" />}
        </div>
      ))}
    </div>
  )
}

export default Rating
