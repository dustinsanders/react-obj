import transform from '../../../src'
import JSXComponent from './JSXComponent'

const StatelessComponent = ({ text }) => transform({
  comp: 'div',
  className: 'my-stateless-componet',
  children: [
    {
      comp: JSXComponent,
      className: 'my-custom-component',
      text,
    },
  ],
})

export default StatelessComponent
