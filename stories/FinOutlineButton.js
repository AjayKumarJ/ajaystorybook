export default {
    name: 'fin-outline-button',
    
    data() {
      return {
        buttonStyles: {       
          border: '2px solid #FFAB2B',   
          borderRadius: '6px',
          backgroundColor: '#ffffff',
          cursor: 'pointer',
          margin: '20px',
          color: '#252631',
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
  