//# Creo la pagina VEU
const { createApp } = Vue;

const myApp = createApp({
  data() {
    return {
      lengthEmails: 10,
      emails: [],
    };
  },
  methods: {
    getEmails() {
      for (let i = 0; i < this.lengthEmails; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
          this.emails.push(res.data.response);
        });
      }
    },
  },
  created() {
    this.getEmails();
  },
});

//# La monto  in pagina
myApp.mount('#root');
