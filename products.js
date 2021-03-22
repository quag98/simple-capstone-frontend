/* global Vue, axios */

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello from JavaScript!",
      products: [],
      name: "",
      price: "",
      description: "",
      imageUrl: "",
    };
  },
  created() {
    axios
      .get("http://localhost:3000/api/products")
      .then(response => {
        console.log(response.data);
        this.products = response.data;
      });
  },
  methods: {
    createProduct: function () {
      var params = { name: this.name, price: this.price, description: this.description, image_url: this.imageUrl };
      axios.post("http://localhost:3000/api/products", params).then(response => {
        console.log(response.data);
        this.products.push(response.data);
        this.name = "";
        this.price = "";
        this.description = "";
        this.imageUrl = "";
      });
    },
    updateProduct: function () {

    }
  }
});