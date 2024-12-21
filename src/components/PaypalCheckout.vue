<script setup>
import { ref, onMounted } from "vue";
import { loadScript } from "@paypal/paypal-js";
import axios from "axios";
import sweetalert from "sweetalert2";

const API_URL = import.meta.env.VITE_API_URL
const PAYPAL_CLIENT_ID = import.meta.env.VITE_PAYPAL_CLIENT_ID

const emit = defineEmits(["update-isheromember"]);

onMounted(async () => {

  try {
    const paypal = await loadScript({
      "client-id": PAYPAL_CLIENT_ID,
    });

    await paypal
      .Buttons({
        fundingSource: paypal.FUNDING.PAYPAL,
        style: {
          layout: "vertical",
          color: "black",
          shape: "rect",
          label: "pay",
          borderRadius: 12,
          disableMaxHeight: true,
        },
        async createOrder() {
          const response = await fetch(
            `${ API_URL }/api/create-paypal-order`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
              body: JSON.stringify({
                item: "英雄會員",
                amount: 12,
              }),
            }
          );
          const { order } = await response.json();

          return order.id;          
        },
        async onApprove(data, actions) {
          const order = await actions.order.capture();

          if (order.status === "COMPLETED") {
            sweetalert.fire({
              icon: "success",
              title: "付款成功",
            });
            const userToken = localStorage.getItem("token");

            try {
              const res = await axios.post(
                `${ API_URL }/api/save-paypal-order`,
                {
                  order: order,
                },
                {
                  headers: {
                    Authorization: `Bearer ${userToken}`,
                  },
                }
              );

              emit("update-isheromember", true);
            } catch (error) {
              console.log(error);
            }
          } else if (order.status !== "COMPLETED") {
            sweetalert.fire({
              icon: "error",
              title: "付款失敗，請重新嘗試",
            });
          }
        },
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

<style scoped>
  #paypal-button-container {
    width: 100%;
    height: 40px;
    box-sizing: border-box;
  }
</style>
