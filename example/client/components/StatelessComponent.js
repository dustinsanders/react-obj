import transform from '../../../src'
import CustomComponent from './CustomComponent'

const StatelessComponent = ({ text }) => transform({
  comp: 'div',
  className: 'my-stateless-componet',
  children: [
    {
      comp: CustomComponent,
      className: 'my-custom-component',
      text,
    },
  ],
})

export default StatelessComponent
