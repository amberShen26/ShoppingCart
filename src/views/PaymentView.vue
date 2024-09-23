<script>
import { RouterLink } from 'vue-router';
export default {
    data(){
        return {
            cartData:{
                products:[],
                methods:{
                    pay: '',
                    delivery: '',
                },
            },
            totalAmount: 0,
            totalPrice: 0
        };
    },
    created() {
        const jsonData = localStorage.getItem('shoppingCart');
        if (jsonData) {
            try{
                this.cartData = JSON.parse(jsonData);
                this.calculateTotal();
            } catch (error) {
                console.error(error);
            }
        }
    },
    methods: {
        setData(){
            if (!this.cartData.methods.pay ) {
                alert('請選擇付款方式')
                return
            } else if (!this.cartData.methods.delivery) {
                alert('請選擇配送方式')
                return
            }
            const jsonData = localStorage.getItem('shoppingCart');
            try {
                const cartData = JSON.parse(jsonData) || {};
                cartData.methods = this.cartData.methods;
                // 資料重新整理好後，再裝回去
                localStorage.setItem('shoppingCart', JSON.stringify(cartData));
                this.$router.push({ name: 'filldata' });
            } catch (error) {
                console.error(error);
            }
        },
        calculateTotal() {
            this.totalAmount = this.cartData.products.reduce((acc, product) => {
                acc += product.count
                return acc
            }, 0);
            this.totalPrice = this.cartData.products.reduce((acc, product) => {
                acc += product.price * product.count
                return acc
            }, 0);
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
                            <div
                                class="rounded-circle mb-2 d-flex justify-content-start align-items-center my-circle-font">
                                <p class="p-0 m-2">1</p>
                            </div>
                            <span class="text-center">確認購物車</span>
                        </div>
                        <div class="col-2 mt-4">
                            <div style="height: 25%;" class="progress" role="progressbar" aria-label="Success example"
                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar bg-success" style="width: 100%"></div>
                            </div>
                        </div>
                        <div class="col-2 p-0 d-flex flex-column align-items-center">
                            <div
                                class="rounded-circle mb-2 d-flex justify-content-start align-items-center my-circle-font">
                                <p class="p-0 m-2">2</p>
                            </div>
                            <span class="text-center">付款與配送</span>
                        </div>
                        <div class="col-1 p-0 mt-4">
                            <div style="height: 25%;" class="progress" role="progressbar" aria-label="Success example"
                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar bg-success" style="width: 25%"></div>
                            </div>
                        </div>
                        <div class="col-2 p-0 d-flex flex-column align-items-center">
                            <div
                                class="rounded-circle mb-2 d-flex justify-content-start align-items-center my-circle-font">
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
                            <div
                                class="rounded-circle mb-2 d-flex justify-content-start align-items-center my-circle-font">
                                <p class="p-0 m-2">4</p>
                            </div>
                            <span class="text-center">完成訂單</span>
                        </div>
                    </div>
                </section>
                <hr class="mt-5">
                <section class="d-flex justify-content-start">
                    <p class="fs-5 fw-bold">付款方式</p>
                </section>
                <div class="form-check">
                    <input v-model="cartData.methods.pay" value="信用卡付款" class="form-check-input" type="radio" name="paymentmethod" id="paymentmethod1">
                    <label class="form-check-label mt-2 mb-2 d-flex justify-content-start" for="paymentmethod1">
                        信用卡付款
                    </label>
                </div>
                <hr>
                <div class="form-check">
                    <input v-model="cartData.methods.pay" value="網路ATM" class="form-check-input" type="radio" name="paymentmethod" id="paymentmethod2">
                    <label class="form-check-label mt-2 mb-2 d-flex justify-content-start" for="paymentmethod2">
                        網路ATM
                    </label>
                </div>
                <hr>
                <div class="form-check">
                    <input v-model="cartData.methods.pay" value="超商代碼" class="form-check-input" type="radio" name="paymentmethod" id="paymentmethod3">
                    <label class="form-check-label mt-2 mb-2 d-flex justify-content-start" for="paymentmethod3">
                        超商代碼
                    </label>
                </div>
                <hr>
                <section class="d-flex justify-content-start">
                    <p class="fs-5 fw-bold">運送方式</p>
                </section>
                <div class="form-check">
                    <input v-model="cartData.methods.delivery" value="黑貓宅配" class="form-check-input" type="radio" name="deliverymethod" id="deliverymethod1">
                    <label class="form-check-label mt-2 mb-2 d-flex justify-content-start" for="deliverymethod1">
                        黑貓宅配
                    </label>
                </div>
                <hr>
                <div class="form-check">
                    <input v-model="cartData.methods.delivery" value="超商店到店" class="form-check-input" type="radio" name="deliverymethod" id="deliverymethod2">
                    <label class="form-check-label mt-2 mb-2 d-flex justify-content-start" for="deliverymethod2">
                        超商店到店
                    </label>
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
                        <RouterLink to="/shoppingcart" class="icon-link">
                            <i class="bi bi-arrow-left d-flex align-items-center"></i>
                            上一步
                        </RouterLink>
                    </div>
                    <div class="col-12 col-sm-6 d-flex justify-content-center justify-content-sm-end">
                        <button @click="setData" type="button" class="btn btn-primary btn" style="width: 150px; height: 35px;"
                            id="next-step">下一步</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style></style>