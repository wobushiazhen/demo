// mixins.js

let exampleMixin = {
  data() {
    return {
      message: "Hello from mixin!",
    };
  },
  methods: {
    greet() {
      console.log(this.message);
    },
  },
};
