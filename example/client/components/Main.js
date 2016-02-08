import transform from '../../../src'
import CustomComponent from './CustomComponent'
import StatelessComponent from './StatelessComponent'

const Main = () => transform({
  comp: 'div',
  className: 'my-div',
  children: [
    {
      comp: 'div',
      className: 'inner-div',
      children: [
        {
          comp: 'span',
        },
        {
          comp: 'div',
          onClick: () => { console.log('clicking my div') },
          children: 'click me',
        },
      ],
    },
    {
      comp: 'div',
      className: 'second-div',
      children: ['first', 'second', 'third'].map(text => ({
        comp: 'div',
        key: text,
        children: `this is the ${text} mapped child`,
      })),
    },
    {
      comp: StatelessComponent,
      text: 'should work',
    },
  ],
})

export default Main
