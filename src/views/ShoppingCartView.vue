<script>
export default {
  data() {
    return {
      // 物件內放陣列
      cartData: {
        products: [
          { id: '2314', name: '雪梨跨年', price: 169500, count: 1, image: 'src/assets/img/f3fb975fddfc926997459848d476cbf6.jpg' },
          { id: '4957', name: '機票升等', price: 35000, count: 1, image: 'src/assets/img/buisnessClass.jpg' },
          { id: '3195', name: '加購行程', price: 6000, count: 1, image: 'src/assets/img/cruise.jpg' },
        ],
        methods: {

        },
        userData: {

        },
      }
    }
  },
  computed: {
    totalPrice() {
      const total = this.cartData.products.reduce((acc, product) => {
        acc += product.price * product.count
        return acc
      }, 0);
      return total
    },
    totalAmount() {
      const totalCount = this.cartData.products.reduce((acc, product) => {
        acc += product.count
        return acc
      }, 0);
      return totalCount
    }
  },
  mounted() {
    console.log(this.cartData.products.find(product => product.id === '2314'));
  },
  methods: {
    setData() {
      const snowTrip = this.cartData.products.find(product => product.id === '2314');
      if (snowTrip && snowTrip.count === 0) {
        alert('最低需選擇一個主行程');
        return;
      }
      const jsonData = JSON.stringify(this.cartData);
      localStorage.setItem('shoppingCart', jsonData);
      this.$router.push({ name: 'payment' });
    }
  }
}
</script>

<template>
  <main>
    <div class="container-fluid p-5" style="background-color: #CBD78A;">
      <div class="container text-center p-3 bg-body-tertiary">
        <section class="d-flex justify-content-start">
          <p class="fs-2 fw-bold">購物車</p>
        </section>
        <section class="m-0">
          <div class="row">
            <div class="col-2 p-0 d-flex flex-column align-items-center">
              <div class="rounded-circle mb-2 d-flex justify-content-start align-items-center my-circle-font">
                <p class="p-0 m-2">1</p>
              </div>
              <span class="text-center">確認購物車</span>
            </div>
            <div class="col-2 mt-4">
              <div style="height: 25%;" class="progress" role="progressbar" aria-label="Success example"
                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-success" style="width: 25%"></div>
              </div>
            </div>
            <div class="col-2 p-0 d-flex flex-column align-items-center">
              <div class="rounded-circle mb-2 d-flex justify-content-start align-items-center my-circle-font">
                <p class="p-0 m-2">2</p>
              </div>
              <span class="text-center">付款與配送</span>
            </div>
            <div class="col-1 p-0 mt-4">
              <div style="height: 25%;" class="progress" role="progressbar" aria-label="Success example"
                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-success" style="width: 0%"></div>
              </div>
            </div>
            <div class="col-2 p-0 d-flex flex-column align-items-center">
              <div class="rounded-circle mb-2 d-flex justify-content-start align-items-center my-circle-font">
                <p class="p-0 m-2">3</p>
              </div>
              <span class="text-center">填寫資料</span>
            </div>
            <div class="col-1 px-0 mt-4">
              <div style="height: 25%;" class="progress" role="progressbar" aria-label="Success example"
                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-success" style="width: 0%"></div>
              </div>
            </div>
            <div class="col-2 p-0 d-flex flex-column align-items-center">
              <div class="rounded-circle mb-2 d-flex justify-content-start align-items-center my-circle-font">
                <p class="p-0 m-2">4</p>
              </div>
              <span class="text-center">完成訂單</span>
            </div>
          </div>
        </section>
        <hr class="mt-5">
        <section class="d-flex justify-content-start">
          <p class="fs-5 fw-bold">訂單明細</p>
        </section>
        <!-- 商品1 -->
        <div v-for="products in cartData.products" :key="products.id" class="d-flex flex-wrap align-items-center">
          <img :src="`${products.image}`" class="rounded-circle my-product-img me-2" alt="...">
          <span class="col-2">
            <p class="d-flex flex-wrap m-0 fs-6">{{ products.name }}</p>
            <p class="d-flex m-0 fw-lighter">#{{ products.id }}</p>
          </span>
          <div class="col d-flex justify-content-end align-items-center">
            <input @click="products.count > 0 ? products.count-- : 0" type="button" class="my-button me-1 border-0"
              id="tp-minus-btn" value="-">
            <input v-model="products.count" type="button" class="my-button border-2" id="tp-total" value="1"
              style="width: 40px; height: 30px">
            <input @click="products.count++" type="button" class="my-button ms-1 me-3 border-0" id="tp-plus-btn"
              value="+">
          </div>
          <span class="col-10 col-sm-2 d-flex justify-content-end align-items-center" id="tp-price">${{ products.price
            }}</span>
        </div>
        <hr>
        <div class="row">
          <div class="col-9 d-flex justify-content-end">
            <span>數量：</span>
          </div>
          <div class="col-3 d-flex justify-content-end"><span id="total-amount">{{ totalAmount }}</span></div>
        </div>
        <div class="row">
          <div class="col-9 d-flex justify-content-end">
            <span>小記：</span>
          </div>
          <div class="col-3 d-flex justify-content-end"><span id="product-price">${{ totalPrice }}</span></div>
        </div>
        <div class="row">
          <div class="col-9 d-flex justify-content-end">
            <span>運費：</span>
          </div>
          <div class="col-3 d-flex justify-content-end"><span id="delivery-fee" value="60">$60</span></div>
        </div>
        <div class="row">
          <div class="col-9 d-flex justify-content-end">
            <span>總計：</span>
          </div>
          <div class="col-3 d-flex justify-content-end"><span id="total-price">${{ totalPrice + 60 }}</span></div>
        </div>
        <hr>
        <div class="row">
          <div class="col-12 col-sm-6 d-flex justify-content-center justify-content-sm-start mb-2 mb-sm-0">
            <RouterLink to="/" class="icon-link">
              <i class="bi bi-arrow-left d-flex align-items-center"></i>
              返回購物
            </RouterLink>
          </div>
          <div class="col-12 col-sm-6 d-flex justify-content-center justify-content-sm-end">
            <button @click="setData" type="button" class="btn btn-primary btn"
              style="width: 150px; height: 35px;">下一步</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style></style>