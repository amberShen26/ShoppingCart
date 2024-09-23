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
                userData:{
                    name: '',
                    phone: '',
                    email: '',
                    city: '',
                    postCode: '',
                    address: '',
                }
            },
            totalAmount: 0,
            totalPrice: 0,
            theAddress: '',
        };
    },
    created() {
        const jsonData = localStorage.getItem('shoppingCart');
        if (jsonData) {
            try{
                this.cartData = JSON.parse(jsonData);
                this.calculateTotal();
                this.getTheAddress();
            } catch (error) {
                console.error(error);
            }
        }
    },
    mounted() {
        console.log(this.cartData.products);
    },
    methods: {
        setData(){
            // if (this.cartData.methods.pay === '' || this.cartData.methods.delivery === '') {
            //     alert('請確認資料是否有填寫')
            //     return
            // }
            const jsonData = localStorage.getItem('shoppingCart');
            try {
                const cartData = JSON.parse(jsonData) || {};
                cartData.userData = this.cartData.userData;
                // 資料重新整理好後，再裝回去
                localStorage.setItem('shoppingCart', JSON.stringify(cartData));
                this.$router.push({ name: 'finish' });
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
        },
        getTheAddress() {
            this.theAddress = `${this.cartData.userData.city} ${this.cartData.userData.postCode} ${this.cartData.userData.address}`;
        }
    }
}
</script>

<template>
    <main>
        <div class="container-fluid p-sm-5" style="background-color: #CBD78A;">
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
                                <div class="progress-bar bg-success" style="width: 100%"></div>
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
                                <div class="progress-bar bg-success" style="width: 100%"></div>
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
                    <p class="fs-5 fw-bold">訂單明細</p>
                </section>
                <!-- 商品1 -->
                <div v-for="products in cartData.products" :key="products.id" class="d-flex flex-wrap align-items-center">
                    <img :src="`${products.image}`" class="rounded-circle my-product-img me-2"
                        alt="...">
                    <span class="col">
                        <p class="d-flex flex-wrap m-0 fs-6">{{ products.name }}</p>
                        <p class="d-flex m-0 fw-lighter">#{{ products.id }}</p>
                    </span>
                    <div class="col d-flex justify-content-end align-items-center">
                        <!-- <input type="button" class="my-button me-1 border-0" id="tp-minus-btn" value="-"> -->
                        <p class="my-button border-2 me-3" id="tp-total" style="width: 50px; height: 30px">X {{ products.count }}</p>
                        <!-- <input type="button" class="my-button ms-1 me-3 border-0" id="tp-plus-btn" value="+"> -->
                    </div>
                    <span class="d-flex justify-content-end align-items-center" id="tp-price">${{ products.price }}</span>
                </div>
                <hr>

                <section class="mt-4 d-flex justify-content-start">
                    <p class="fs-5 fw-bold">寄送資料</p>
                </section>
                <div class="rowmt-2 mb-2">
                    <div class="d-flex justify-content-start">
                        <p>姓名：{{ cartData.userData.name }}</p>
                    </div>
                </div>
                <div class="row mt-2 mb-2">
                    <div class="d-flex justify-content-start">
                        <p>電話：{{ cartData.userData.phone }}</p>
                    </div>
                </div>
                <div class="rowmt-2 mb-2">
                    <div class="d-flex justify-content-start">
                        <p>Email：{{ cartData.userData.email }}</p>
                    </div>
                </div>
                <div class="row mt-2 mb-2">
                    <div class="d-flex justify-content-start">
                        <p>地址：{{ theAddress }}</p>
                    </div>
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
                    <div class="d-flex justify-content-end">
                        <RouterLink to="/">
                            <button type="button" class="btn btn-primary btn"
                                style="width: 150px; height: 35px;">返回首頁</button>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style></style>