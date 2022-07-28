# reco

The reco is a basic react component library to develop a faster, easier app.
It doesn't have all the components yet that it has to.
So it is named basic library.

Make sure to have installed [tailwindcss](https://tailwindcss.com) before you use it because it uses tailwind for the style

## Installation

reco is available to use.

```npm
npm install @halilcn/reco
```

Here is an example of an app that uses the Button component of reco

```typescript jsx
import { Button } from '@halilcn/reco'
import React, { useState } from 'react'

interface IProps {}

const Page: React.FC<IProps> = props => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleClick = () => {
    setIsLoading(true)
    //some process...
    setIsLoading(false)
  }

  return (
    <Button onClick={handleClick} loading={isLoading}>
      Test Button
    </Button>
  )
}

export default Page
```

Each component has a few mandatory and non-mandatory props. The following is a documentation to use reco easier.

## Documentation

All the components are written with tailwindcss for style.
So you can change the style of almost all the components using tailwindcss.
Also, entire props have a description and allow common props(eg: classNames, onClick).

There is a table for props of each component with a description.
There are also a few examples to understand easier.

### Examples

- You can change the style of it using the classnames of tailwindcss.

```typescript jsx
 return (
        <Button className="bg-red-400">Test Button</Button>
    );
```

- Example for AutoComplete component

```typescript jsx
const [isLoading, setIsLoading] = useState<boolean>(false)
const [isDisabled, setIsDisabled] = useState<boolean>(false)

const options = [{value: 'test-value', text: 'test-text'}]

const handleSelect = (selectedOptionValue: string | number) => {
setIsLoading(true)
//some process with selectedOptionValue...
setIsLoading(false)
}

return (
<AutoComplete
changeSelectedOption={handleSelect}
options={options}
disabled={isDisabled}
loading={isLoading}/>
);
```

- Example for Popup component

```typescript jsx
const [isEnable, setIsEnable] = useState<boolean>(false)

const togglePopup = () => {
  setIsEnable(!isEnable)
}

return (
  <div>
    <Popup title='Test Popup' enable={isEnable} togglePopup={togglePopup}>
      <div className="p-5 font-bold">
        Test Popup
      </div>
    </Popup>
    <Button onClick={togglePopup} disabled={isEnable}>Show Popup</Button>
  </div>
);
```

### Components

### _Button Component_

The button component provides a button html element.

| Prop        | Type      | Description    |
| :---------- | :-------- | :------------- |
| `children`  | `any`     | content        |
| `disabled?` | `boolean` | disable status |
| `loading?`  | `boolean` | loading status |

### _Auto Complete Component_

The auto complete component provides a dropdown that has different features like auto complete, default selected option and filter options.

| Prop                   | Type                                            | Description                        |
| :--------------------- | :---------------------------------------------- | :--------------------------------- |
| `changeSelectedOption` | `(selectedOptionValue: string, number) => void` | callback function for changed data |
| `disabled?`            | `boolean`                                       | disable status                     |
| `loading?`             | `boolean`                                       | loading status                     |

### _Checkbox Component_

The checkbox component provides the user select one or more options of a limited number of choices

| Prop        | Type      | Description    |
| :---------- | :-------- | :------------- |
| `id`        | `string`  | unique key     |
| `children?` | `any`     | content        |
| `disabled?` | `boolean` | disable status |
| `loading?`  | `boolean` | laoding status |

### _Icon Checkbox Component_

The icon checkbox component provides the user select one or more options of a limited number of choices with icon

| Prop        | Type      | Description    |
| :---------- | :-------- | :------------- |
| `id`        | `string`  | unique key     |
| `children`  | `any`     | icon content   |
| `checked?`  | `any`     | checked status |
| `disabled?` | `boolean` | disable status |
| `loading?`  | `boolean` | laoding status |

### _Input Component_

The Input component provides custom input html element that has particular styles for special occasions .

| Prop        | Type      | Description              |
| :---------- | :-------- | :----------------------- |
| `title?`    | `string`  | title                    |
| `hasError?` | `boolean` | errors to disable status |
| `disabled?` | `boolean` | disable status           |
| `loading?`  | `boolean` | loading status           |

### _Popup Component_

The popup component provides a container popup that enables to use everywhere.

| Prop          | Type         | Description                         |
| :------------ | :----------- | :---------------------------------- |
| `children`    | `any`        | content                             |
| `enable`      | `boolean`    | enable status                       |
| `title`       | `boolean`    | title                               |
| `togglePopup` | `() => void` | callback function for enable status |

### _Rating Component_

The Rating component provides a custom rating structure that allows voting from 0 to 5

| Prop            | Type                                     | Description                         |
| :-------------- | :--------------------------------------- | :---------------------------------- |
| `onChange`      | `(startScore: 0, 1, 2, 3, 4, 5) => void` | callback function for changed data  |
| `defaultScore?` | `0, 1, 2, 3, 4, 5`                       | default score at the beginning      |
| `disabled?`     | `boolean`                                | disabled status                     |
| `readOnly?`     | `boolean`                                | read only status to disabled status |

### _Select Component_

The select component provides a custom html select element.

| Prop                         | Type                                          | Description                           |
| :--------------------------- | :-------------------------------------------- | :------------------------------------ |
| `changeOption`               | `(selectedOptionValue: optionTypes) => void`  | callback function for selected option |
| `options`                    | `[{value:string,number, text:string,number}]` | options to render                     |
| `defaultSelectedOptionText?` | `string,number`                               | default option text at the beginning  |
| `disabled?`                  | `boolean`                                     | disabled status                       |
| `loading?`                   | `boolean`                                     | loading status                        |

### _Table Component_

The table component provides a custom table structure completely that has a few features like sorting and custom data type

| Prop            | Type                                                                                  | Description         |
| :-------------- | :------------------------------------------------------------------------------------ | :------------------ |
| `rows`          | `[{field:string, headerName:string, type:string-number-date,sortingActive?:boolean}]` | option rows         |
| `columns?`      | `any[]`                                                                               | option columns      |
| `rowsStyle?`    | `string`                                                                              | custom row style    |
| `columnsStyle?` | `string`                                                                              | custom column style |
