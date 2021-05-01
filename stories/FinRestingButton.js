export default {
    name: 'fin-resting-button',
    
    data() {
      return {
        buttonStyles: {       
          border: 'none',   
          borderRadius: '6px',
          backgroundColor: '#F2F4F6',
          cursor: 'pointer',
          margin: '20px',
          color: '#778CA2',
          fontWeight: '600',
          height: '54px',
          width: '213px',
          fontFamily: 'Roboto',
          fontSize: '16px',
          lineHeight: '17px',
          display: 'block',
        },
      };
    },
  
    template: `
      <button :style="buttonStyles" @click="onClick">
        {{abc}}<slot></slot>
      </button>
    `,
  
    methods: {
      onClick() {
        this.$emit('click');
      },
    },
  };
  