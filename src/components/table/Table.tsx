import classNames from 'classnames'
import React, { useState } from 'react'

import convertClassesToImportant from '../../utils/convertClassesToImportant'

export type optionTypes = string | number

export interface ITitles {}

//todo:table içine child olarak row ekleme
//todo:table içine child olarak title ekleme

export interface IProps extends React.ComponentProps<'div'> {}

const Select: React.FC<IProps> = props => {
  const { className, ...componentProps } = props

  return <div></div>
}

export default Select
