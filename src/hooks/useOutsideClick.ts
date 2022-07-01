import { MutableRefObject, useEffect } from 'react'

const useOutsideClick = (ref: MutableRefObject<any>, handleEvent: () => void) => {
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) handleEvent()
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])
}

export default useOutsideClick
