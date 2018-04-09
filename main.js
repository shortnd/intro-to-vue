var app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    image: "./assets/vmSocks-green-onWhite_preview.jpeg",
    inStock: true,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [{
        variantId: 2234,
        variantColor: "green",
        variantImage: './assets/vmSocks-green-onWhite_preview.jpeg'
      },
      {
        variantId: 2235,
        variantColor: 'blue',
        variantImage: './assets/vmSocks-blue-onWhite_preview.jpeg'
      }
    ],
    cart: 0
  },
  methods: {
    addToCart: function () {
      this.cart += 1;
    },
    updateProduct: function (variantImage) {
      this.image = variantImage;
    },
  }
});