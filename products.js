/* global Vue, axios */

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello from JavaScript!",
      products: [],
    };
  },
  created() {
    axios
      .get("http://localhost:3000/api/products")
      .then(response => {
        console.log(response.data);
        this.products = response.data;
      });
  }
});