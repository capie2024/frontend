<script setup>
import { ref, onMounted } from "vue";
import { loadScript } from "@paypal/paypal-js";
import axios from "axios";
import sweetalert from "sweetalert2";

onMounted(async () => {
  try {
    const paypal = await loadScript({
      "client-id":
        "AfYXwzdA45JeQ0BQdmptnOLBi01qoZ-CzooPxnmh7WD56ufGdgNZzSzVHthz2C-zTgMMOc49gaLSaBA3",
    });

    await paypal
      .Buttons({
        fundingSource: paypal.FUNDING.PAYPAL,
        style: {
          layout: "vertical",
          color: "black",
          shape: "rect",
          label: "pay",
        },
        async createOrder() {
          const response = await fetch("http://localhost:3000/api/create-paypal-order", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({
              item: '英雄會員',
              amount: 12
            }),
          });

          const order = await response.json();

          return order.id;
        },
        async onApprove(data, actions){
          const order = await actions.order.capture();

          const response = await fetch("http://localhost:3000/api/get-paypal-order", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({
              orderID: order.id,
            }),
          });

          const result = await response.json();

          console.log(result.data);
          console.log(result);
          if(result.data){
            
          }
        }

      })
      .render("#paypal-button-container");
  } catch (error) {
    console.log(error);
  }
});
</script>
<template>
  <div id="paypal-button-container"></div>
</template>

<style scoped></style>
