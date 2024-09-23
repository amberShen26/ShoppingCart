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
            if (!this.cartData.userData.name) {
                alert('請填寫姓名')
                return
            } else if (!this.cartData.userData.phone) {
                alert('請填寫電話')
                return
            } else if (!this.cartData.userData.email) {
                alert('請填寫Email')
                return
            } else if (!this.cartData.userData.city) {
                alert('請填寫城市')
                return
            } else if (!this.cartData.userData.postCode) {
                alert('請填寫郵遞區號')
                return
            } else if (!this.cartData.userData.address) {
                alert('請填寫地址')
                return
            }
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
                                <div class="progress-bar bg-success" style="width: 25%"></div>
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
                    <p class="fs-5 fw-bold">寄送資料</p>
                </section>
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label mt-2 mb-2 fw-light d-flex ">姓名</label>
                        <input v-model="cartData.userData.name" type="text" class="form-control" id="exampleInputName" placeholder="Jonathan Pratt">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label mt-2 mb-2 fw-light d-flex ">電話</label>
                        <input v-model="cartData.userData.phone" type="text" class="form-control" id="exampleInputPhone" placeholder="+61 510-379-0426">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label mt-2 mb-2 fw-light d-flex ">Email</label>
                        <input v-model="cartData.userData.email" type="email" class="form-control" id="exampleInputEmail1"
                            placeholder="Crocodile_Travel@cct.org.au">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label mt-2 mb-2 fw-light d-flex ">地址</label>
                        <div class="row row-cols-2">
                            <div class="col-6">
                                <input v-model="cartData.userData.city" type="text" class="form-control" id="exampleInputCity" placeholder="City">
                            </div>
                            <div class="col-6">
                                <input v-model="cartData.userData.postCode" type="text" class="form-control" id="exampleInputPostCode"
                                    placeholder="PostCode">
                            </div>
                        </div>
                        <input v-model="cartData.userData.address" type="text" class="mt-2 form-control" id="exampleInputAddress" placeholder="Address">
                    </div>
                </form>
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
                        <RouterLink to="/payment" class="icon-link">
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