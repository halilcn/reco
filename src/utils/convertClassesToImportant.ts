const convertClassesToImportant = (classes: string | undefined = ''): string => {
  return classes
    .split(' ')
    .map((className: string) => {
      if (className.split('').includes(':')) return className

      return '!' + className
    })
    .join(' ')
}

export default convertClassesToImportant
