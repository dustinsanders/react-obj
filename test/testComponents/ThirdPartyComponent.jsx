import React from 'react'
import Select from 'react-select'

const options = [
  { value: 1, label: 'one' },
  { value: 2, label: 'two' },
]

const onChange = () => console.log('i am changing')
const name = 'select-name'
const value = 'one'

const jsx = (
  <div>
    <div>
      <span>
        <h1>nested heading</h1>
      </span>
    </div>
    <Select
      name={name}
      value={value}
      options={options}
      onChange={onChange}
    />
  </div>
)

const rob = {
  comp: 'div',
  children: [
    {
      comp: 'div',
      children: [
        {
          comp: 'span',
          children: [
            {
              comp: 'h1',
              children: 'nested heading',
            },
          ],
        },
      ],
    },
    {
      comp: Select,
      name,
      onChange,
      options,
      value,
    },
  ],
}

export { jsx, rob }
