export default {
    name: 'fin-hover-button',
    
    data() {
      return {
        buttonStyles: {       
          border: 'none',   
          borderRadius: '6px',
          backgroundColor: '#f9a11b',
          cursor: 'pointer',
          margin: '20px',
          color: '#ffffff',
          height: '54px',
          width: '213px',
          fontWeight: '600',
          fontFamily: 'Roboto',
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
  