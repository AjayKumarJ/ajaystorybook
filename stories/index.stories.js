/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MyButton from './MyButton';
import Welcome from './Welcome';
import FinActiveButton from './FinActiveButton';
import FinHoverButton from './FinHoverButton';
import FinRestingButton from './FinRestingButton';
import FinRestingHoverButton from './FinRestingHoverButton';
import FinOutlineButton from './FinOutlineButton';
import FinOutlineHoverButton from './FinOutlineHoverButton';
import FinOutlineRestingButton from './FinOutlineRestingButton';
import FinOutlineRestingHoverButton from './FinOutlineRestingHoverButton';
storiesOf('Welcome', module).add('to Storybook', () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo('Button') },
}));

storiesOf('Button', module)
  .add('with text', () => ({
    components: { MyButton },
    template: '<my-button @click="action">Hello Button</my-button>',
    methods: { action: action('clicked') },
  }))
  .add('with JSX', () => ({
    components: { MyButton },
    render(h) {
      return <my-button onClick={this.action}>With JSX</my-button>;
    },
    methods: { action: linkTo('clicked') },
  }))
  .add('with some emoji', () => ({
    components: { MyButton },
    template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
    methods: { action: action('clicked') },
  }))
  .add('Finance Active Buttons', () => ({
    components: { FinActiveButton,FinHoverButton, FinRestingButton,FinRestingHoverButton },
    template: '<div><fin-active-button @click="action">ACTIVE</fin-active-button><fin-hover-button @click="action">HOVER</fin-hover-button><fin-resting-button @click="action">RESTING</fin-resting-button><fin-resting-hover-button @click="action">RESTING HOVER</fin-resting-hover-button></div>',
    methods: { action: action('clicked') },
  }))
  .add('Finance Outline Buttons', () => ({
    components: { FinOutlineButton,FinOutlineHoverButton, FinOutlineRestingButton,FinOutlineRestingHoverButton },
    template: '<div><fin-outline-button @click="action">ACTIVE</fin-outline-button><fin-outline-hover-button @click="action">HOVER</fin-outline-hover-button><fin-outline-resting-button @click="action">RESTING</fin-outline-resting-button><fin-outline-resting-hover-button @click="action">RESTING HOVER</fin-outline-resting-hover-button></div>',
    methods: { action: action('clicked') },
  }));
