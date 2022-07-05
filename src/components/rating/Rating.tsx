import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

interface IProps {
  onChange: (startScore: ScoreType) => void
  defaultScore?: ScoreType
  disabled?: boolean
  readOnly?: boolean
}

type ScoreType = 0 | 1 | 2 | 3 | 4 | 5

const Rating: React.FC<IProps> = props => {
  const { onChange, defaultScore, disabled, readOnly } = props
  const SCORE_LENGTH = Array(5).fill(0)

  const [score, setScore] = useState<ScoreType>(0)
  const [temporaryScore, setTemporaryScore] = useState<ScoreType | null>(null)

  useEffect(() => {
    if (defaultScore) setScore(defaultScore)
  }, [])

  const handleMouseOverStar = (starScore: ScoreType) => {
    setTemporaryScore(starScore)
  }

  const handleMouseLeaveStar = () => {
    setTemporaryScore(null)
  }

  const handleClickStar = (starScore: ScoreType) => {
    if (score === starScore) {
      setScore(0)
      onChange(0)
      return
    }

    onChange(starScore)
    setScore(starScore)
  }

  const ratingContainerClass = classNames('flex text-3xl text-yellow-400 cursor-pointer', {
    'pointer-events-none opacity-60': disabled,
    'pointer-events-none': readOnly,
  })

  const ratingClass = classNames('hover:scale-125 transition')

  return (
    <div className={ratingContainerClass}>
      {SCORE_LENGTH.map((number, index) => (
        <div
          className={ratingClass}
          onMouseOver={() => handleMouseOverStar((index + 1) as ScoreType)}
          onMouseLeave={handleMouseLeaveStar}
          onClick={() => handleClickStar((index + 1) as ScoreType)}>
          {temporaryScore !== null && index < temporaryScore && <AiFillStar />}
          {temporaryScore !== null && index >= temporaryScore && <AiOutlineStar />}

          {temporaryScore === null && index < score && <AiFillStar />}
          {temporaryScore === null && index >= score && <AiOutlineStar />}
        </div>
      ))}
    </div>
  )
}

export default Rating
