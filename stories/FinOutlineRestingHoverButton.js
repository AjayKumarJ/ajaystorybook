export default {
    name: 'fin-outline-resting-hover-button',
    
    data() {
      return {
        buttonStyles: {       
          border: '2px solid #E8ECEF',   
          borderRadius: '6px',
          backgroundColor: '#ffffff',
          cursor: 'pointer',
          margin: '20px',
          color: '#FFAB2B',
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
        {{abc}}<slot></slot>
      </button>
    `,
  
    methods: {
      onClick() {
        this.$emit('click');
      },
    },
  };
  