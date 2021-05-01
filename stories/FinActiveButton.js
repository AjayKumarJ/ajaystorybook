export default {
    name: 'fin-active-button',
    
    data() {
      return {
        buttonStyles: {       
          border: 'none',   
          borderRadius: '6px',
          backgroundColor: '#FFAB2B',
          cursor: 'pointer',
          margin: '20px',
          color: '#ffffff',
          height: '54px',
          width: '213px',
          fontFamily: 'Roboto',
          fontWeight: '600',
          fontSize: '16px',
          lineHeight: '17px',
          display: 'block',
        },
      };
    },
  
    template: `
      <button :style="buttonStyles" @click="onClick">
        <slot></slot>
      </button>
    `,
  
    methods: {
      onClick() {
        this.$emit('click');
      },
    },
  };
  