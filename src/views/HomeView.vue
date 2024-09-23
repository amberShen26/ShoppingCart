<script>
import { RouterLink } from 'vue-router';
export default {
    data() {
        return {
            isclicked: false
        }
    },
    mounted() {
        this.initAos();
        this.initSwiper();
        window.onload = this.initLax;
        this.$nextTick(() => {
            this.initLax(); // 確保 DOM 更新後再初始化
        });
    },
    methods: {
        // 初始化 AOS
        initAos() {
            AOS.init();
        },

        // 初始化 Swiper
        initSwiper() {
            new Swiper(".mySwiper", {
                spaceBetween: 30,
                centeredSlides: true,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            });
        },
        // 初始化 lax
        initLax() {
            lax.init();
            lax.addDriver('scrollY', function () {
                return window.scrollY;
            })
            // 添加動畫元素
            this.addLaxElements(); 
        },

        // 添加 Lax 動畫元素
        addLaxElements() {
            lax.addElements('.cro1', {
                scrollY: {
                    translateX: [
                        ["elInY", "elCenterY", "elOutY"],
                        ['screenWidth', 'screenWidth/2', 0],
                    ],
                    translateY: [
                        ["elInY", "elCenterY", "elOutY"],
                        ['screenHeight/10', 'screenHeight/10-200', 'screenHeight/10'],
                    ],
                    scale: [
                        ["elInY", "elCenterY", "elOutY"],
                        [1, 1.5, 1],
                    ]
                }
            });
            lax.addElements('.cro3', {
                scrollY: {
                    translateX: [
                        ["elInY", "elCenterY", "elOutY"],
                        [0, 'screenWidth/2', 'screenWidth'],
                    ],
                    skew: [
                        ["elInY", "elCenterY", "elOutY"],
                        [35, 5, -25],
                    ],
                    blur: [
                        ["elInY", "elCenterY", "elOutY"],
                        [0, 0, 5],
                    ]
                }
            });
        },
        // 監聽路由變化
        beforeRouteUpdate(to, from, next) {
            this.$nextTick(() => {
                // 在路由變化時重新初始化 Lax
                this.initLax(); 
            });
            next();
        },
        clickheart() {
            this.isclicked = !this.isclicked
        }
    },
}
</script>

<template>
    <header class="container-fluid d-flex align-items-center justify-content-center p-0"
        style="background-color: #CBD78A;">
        <section class="swiper mySwiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="@/assets/img/long-straight-road-winter_335224-668.jpg" alt="" class="d-block w-100">
                </div>
                <div class="swiper-slide">
                    <img src="@/assets/img/aerial-view-sandy-beach-with-tourists-swimming-beautiful-clear-sea-water-sumilon-island-beach-landing-near-oslob-cebu-philippines-boost-up-color-processing_1253-981.jpg"
                        alt="" class="d-block w-100">
                </div>
                <div class="swiper-slide">
                    <img src="@/assets/img/1636909645793.jpg" alt="" class="d-block w-100">
                </div>
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-pagination"></div>
        </section>
    </header>
    <main style="background-color: #CBD78A;">
        <section class="row m-0">
            <div class="cro1">
            </div>
        </section>
        <section class="row d-flex justify-content-center m-0">
            <div class="row m-0">
                <p class="fs-1 d-flex justify-content-center m-0 p-2">Why Crocodile Travel?</p>
                <p class="row col-9 col-lg-6 fs-5 fs-md-3 m-auto text-center" data-aos="flip-down">Founded in 1985, with
                    a total of 33
                    physical service locations or flagship stores worldwide, including 15 overseas locations and 18 in
                    Australia.</p>
            </div>
            <div class="col-lg-3 d-flex flex-column align-items-center justify-content-start px-4 py-5"
                data-aos="fade-right">
                <div class="rounded-circle bg-secondary my-circle mb-3">
                    <img src="@/assets/img/firstprize.jpg" alt="" class="my-company-img">
                </div>
                <div class="fs-4 mb-3">The Leading Brand for Travel and Lifestyle Services</div>
                <div class="mb-3">Consecutively awarded the "Golden Travel Award” from Travel Quality Assurance
                    Association (2016~)</div>
            </div>
            <div class="col-lg-3 d-flex flex-column align-items-center justify-content-start px-4 py-5"
                data-aos="fade-up">
                <div class="rounded-circle bg-secondary my-circle mb-3">
                    <img src="@/assets/img/discoverWorld.jpg" alt="" class="my-company-img">
                </div>
                <div class="fs-4 mb-3">Global Diversified Localization Experience</div>
                <div class="mb-3">On average, surpassing 70,000 travel groups per year, serving over a million
                    individuals, Top leader in the industry</div>
            </div>
            <div class="col-lg-3 d-flex flex-column align-items-center justify-content-start px-4 py-5"
                data-aos="fade-left">
                <div class="rounded-circle bg-secondary my-circle mb-3">
                    <img src="@/assets/img/customerservice.jpg" alt="" class="my-company-img">
                </div>
                <div class="fs-4 mb-3">Comprehensive Professional Thoughtful Customer Service Team</div>
                <div class="mb-3">Fast and accurate customer service center provides travel information and high quality
                    service.
                </div>
            </div>
        </section>
        <div class="col d-flex justify-content-center align-items-center pt-0 pb-3">
            <button type="button" class="btn btn-primary">Button</button>
        </div>
        <section class="row m-0">
            <div class="row row-cols-2 d-flex justify-content-center p-3 p-md-0 m-0">
                <div class="col-12 col-md-3 d-flex justify-content-start justify-content-md-end">
                    <p class="fs-1 fw-bold">Experience</p>
                </div>
                <div class="col-12 col-md-6">
                    <p class="fs-5 fs-lg-3 pt-2">
                        Crocodile Travel offer diversified travel products and quick confirmation, with no worries.
                    </p>
                </div>
            </div>
            <div class="text-center">
                <div class="row row-cols-2 m-0">
                    <div class="col">
                        <div class="row row-cols-2 px-1 py-3">
                            <div class="col">
                                <img class="w-100" src="@/assets/img/e6.avif" alt="">
                            </div>
                            <div class="col">
                                <img class="w-100"
                                    src="@/assets/img/female-tourists-hand-have-happy-travel-map_1150-7411.avif" alt="">
                            </div>
                        </div>
                        <div class="row px-1 pb-3">
                            <img class="w-100" src="@/assets/img/premium_photo-1683121768172-67dfdfa69da5.avif" alt="">
                        </div>
                    </div>
                    <div class="col">
                        <div class="row px-1 py-3">
                            <img class="w-100" src="@/assets/img/photo-1500301111609-42f1aa6df72a.avif" alt="">
                        </div>
                        <div class="row row-cols-2 px-1 pb-3">
                            <div class="col">
                                <img class="w-100" src="@/assets/img/premium_photo-1683141079772-acf46d5e2ebb.avif"
                                    alt="">
                            </div>
                            <div class="col">
                                <img class="w-100" src="@/assets/img/premium_photo-1679619554824-9d7c17715f68.avif"
                                    alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="row m-0">
            <div class="row row-cols-2 d-flex justify-content-end p-3 m-0">
                <div class="col-12 d-flex justify-content-center">
                    <p class="fs-1 fw-bold">Pricing</p>
                </div>
                <div class="col-12 d-flex justify-content-center">
                    <p class="fs-5 text-center pt-2">
                        The quotation is valid until March 31st. Please use the form for your reference and feel free to
                        contact us if you have any questions regarding our products.
                    </p>
                </div>
            </div>
        </section>
        <section class="px-2 pt-0 pb-2 px-5">
            <table class="table">
                <thead>
                    <tr>
                        <th class="bg-light" scope="col">#</th>
                        <th class="bg-light" scope="col">Place</th>
                        <th class="bg-light" scope="col">Date</th>
                        <th class="bg-light" scope="col">Price</th>
                        <th class="bg-light" scope="col">Choice</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mongolia</td>
                        <td>2024-06-18 ~ 2024-06-30</td>
                        <td>$123,000</td>
                        <td>
                            <label for="">
                                <input type="radio" name="choice" id="choice1">
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Russia</td>
                        <td>2024-08-02 ~ 2024-08-15</td>
                        <td>$190,500</td>
                        <td>
                            <label for="">
                                <input type="radio" name="choice" id="choice2">
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Abu Dhabi</td>
                        <td>2024-07-20 ~ 2024-08-06</td>
                        <td>$200,900</td>
                        <td>
                            <label for="">
                                <input type="radio" name="choice" id="choice3">
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Scotland</td>
                        <td>2024-08-12 ~ 2024-08-28</td>
                        <td>$168,000</td>
                        <td>
                            <label for="">
                                <input type="radio" name="choice" id="choice4">
                            </label>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="row m-0">
                <div class="col p-0">
                    <div class="col d-flex justify-content-start">
                        <button type="button" class="btn p-0">Learn More »</button>
                    </div>
                </div>
                <div class="col  p-0">
                    <div class="col d-flex justify-content-end">
                        <button class="btn btn-primary" type="button">Button</button>
                    </div>
                </div>
            </div>
        </section>
        <section class="m-2 m-md-5 mt-0 p-0 p-lg-5">
            <div class="row row-cols-2 d-flex justify-content-center p-3 p-md-0 m-0">
                <div class="col-12 col-md-6  d-flex justify-content-start">
                    <p class="fs-1 fw-bold ps-2">Let's schedule a perfect trip</p>
                </div>
                <div class="col-12 col-md-6">
                    <p class="fs-5 fs-lg-3 ps-2 pe-4">
                        Choose an itinerary that matches your departure date, confirm the contents of the travel
                        contract after registration, and fill out relevant information. Complete the booking process by
                        making an online payment. We will also send you a confirmation email for your order from
                        Crocodile Travel.
                    </p>
                </div>
            </div>
            <div class="row m-0">
                <div class="col-12 col-md-3 p-3  d-flex justify-content-center">
                    <div class="card" data-aos="flip-right">
                        <img class="w-100" style="height: 250px;" src="@/assets/img/skii.jpg" alt="">
                        <div class="card-head">
                            <p class="fs-2 p-3 m-0">Skiing</p>
                        </div>
                        <div class="card-body">
                            <p>Skiing is the use of skis to glide on snow for basic transport, a recreational activity,
                                or a competitive winter sport.</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-3 p-3 d-flex justify-content-center">
                    <div class="card" data-aos="flip-right">
                        <img class="w-100" style="height: 250px;" src="@/assets/img/diving.jpg" alt="">
                        <div class="card-head">
                            <p class="fs-2 p-3 m-0">Underwater diving</p>
                        </div>
                        <div class="card-body">
                            <p>Underwater diving, as a human activity, is the practice of descending below the water's
                                surface to interact with the environment.</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-3 p-3 d-flex justify-content-center">
                    <div class="card" data-aos="flip-right">
                        <img class="w-100" style="height: 250px;" src="@/assets/img/hiking.jpg" alt="">
                        <div class="card-head">
                            <p class="fs-2 p-3 m-0">Hiking</p>
                        </div>
                        <div class="card-body">
                            <p>Hiking is a long, vigorous walk, usually on trails or footpaths in the countryside.
                                Walking for pleasure developed in Europe during the eighteenth century.</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-3 p-3 d-flex justify-content-center">
                    <div class="card" data-aos="flip-right">
                        <img class="w-100" style="height: 250px;" src="@/assets/img/golf.avif" alt="">
                        <div class="card-head">
                            <p class="fs-2 p-3 m-0">Golf</p>
                        </div>
                        <div class="card-body">
                            <p>Golf is a club-and-ball sport in which players use various clubs to hit a ball into a
                                series of holes on a course in as few strokes as possible.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="m-0 p-3 m-lg-5 p-lg-5">
            <div class="row d-flex justify-content-center">
                <div class="col-12 col-lg-3 d-flex align-items-center">
                    <img class="w-100" src="@/assets/img/guide1.jpg" alt="" data-aos="flip-left">
                </div>
                <div class="col-12 col-lg-7">
                    <div class="guide name">
                        <p class="fs-2">Jenny Chou</p>
                    </div>
                    <div class="guide expericence">
                        <ol class="list-group list-group-numbered">
                            <li class="list-group-item">Passionate Historical Tour Guide with extensive experience and
                                full responsibility for escorting individuals or groups on cruises and sightseeing
                                tours.</li>
                            <li class="list-group-item">Highly specialized in conducting in-depth research on a variety
                                of topics, including site history, local lifestyle and cuisine, and client’s preference
                                to design the most appropriate plan. </li>
                            <li class="list-group-item">Historical Tour Guide with a strong passion for exploring
                                ancient Greek landmarks and archeological sites.</li>
                        </ol>
                    </div>
                    <button type="button" class="btn p-0">Learn More »</button>
                </div>
            </div>
            <hr>
            <div class="row d-flex justify-content-center">
                <div class="col-12 col-lg-3 d-flex align-items-center order-1">
                    <img class="w-100" src="@/assets/img/guide2.jpg" alt="" data-aos="flip-left">
                </div>
                <div class="col-12 col-lg-7">
                    <div class="guide name">
                        <p class="fs-2">Jeff Chang</p>
                    </div>
                    <div class="guide expericence">
                        <ol class="list-group list-group-numbered">
                            <li class="list-group-item">Experienced Tour Guide fluent in English, Chinese, and Japanese,
                                and knowledgeable in Asian food culture.</li>
                            <li class="list-group-item">Energetic Tour Guide with 8 years of experience in planning and
                                leading tours for foreigners to Hanoi. An active member of PTGAC (Professional Tour
                                Guides Association of California).</li>
                            <li class="list-group-item">Key skills include motivating participants to overcome their
                                personal obstacles, fostering a cheerful environment, and providing knowledge of
                                specific areas.</li>
                        </ol>
                    </div>
                    <button type="button" class="btn p-0">Learn More »</button>
                </div>
            </div>
            <hr>
            <div class="row d-flex justify-content-center">
                <div class="col-12 col-lg-3 d-flex align-items-center">
                    <img class="w-100" src="@/assets/img/guide3.jpg" alt="" data-aos="flip-left">
                </div>
                <div class="col-12 col-lg-7">
                    <div class="guide name">
                        <p class="fs-2">Jessica Hong</p>
                    </div>
                    <div class="guide expericence">
                        <ol class="list-group list-group-numbered">
                            <li class="list-group-item">Energetic local Tour Guide in San Francisco for 8 years.</li>
                            <li class="list-group-item">CPR-certified Hiking Guide with 5 years of experience in leading
                                and navigating groups of hikers through the Angels Landing, Zion National Park, and
                                Shenandoah National Park.</li>
                            <li class="list-group-item">Highly skilled in designing and planning personalized tours
                                while offering great customer service. Possess exceptional communication and
                                story-telling skills to engage tourists during the visit.</li>
                        </ol>
                    </div>
                    <button type="button" class="btn p-0">Learn More »</button>
                </div>
            </div>
            <div class="col d-flex justify-content-center mt-4">
                <button class="btn btn-primary" type="button">Button</button>
            </div>
        </section>
        <section class="ms-2 me-2 ms-md-5 me-md-5 p-md-5">
            <div class="row d-flex justify-content-center p-md-3 mb-3 mx-0">
                <div class="col-12 col-lg-6 d-flex align-items-center">
                    <img class="w-100" src="@/assets/img/f3fb975fddfc926997459848d476cbf6.jpg" alt="">
                </div>
                <div class="col-12 col-lg-6">
                    <div class="guide name">
                        <p class="fs-6 m-1">Tour Name</p>
                        <p class="fs-4 fs-lg-2 fw-bold">Celebrate New Year's Eve in Sydney</p>
                    </div>
                    <div class="review row">
                        <div class="star col ps-3 pe-0 d-flex justify-content-start">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star-half-full checked"></span>
                            <span class="ps-2 pe-2">(123 reviews)</span>
                            <i class="me-2 bi bi-twitter-x"></i>
                            <i class="me-2 bi bi-facebook"></i>
                            <i class="me-2 bi bi-instagram"></i>
                        </div>
                    </div>
                    <div class="guide expericence mb-2">
                        <p>Sydney New Year's Eve is an annual New Year's Eve fireworks event in Sydney, New South Wales,
                            Australia. As one of the first major cities to celebrate the New Year, the event is
                            widely-viewed in Australia and worldwide. Organizers have estimated the annual in-person
                            attendance of the event to be around 1.5 to 1.6 million, with tourists accounting for a
                            large portion of its attendees.</p>
                    </div>
                    <hr>
                    <div class="col d-flex justify-content-between">
                        <span class="fs-5">$16,8950</span>
                        <div class="like">
                            <button type="button" class="btn btn-primary">Button</button>
                            <button class="ms-1 btn-heart" @click="clickheart" :class="{ 'click-heart': isclicked }">
                                <i class="bi bi-suit-heart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="travel box">
                <div class="row m-0">
                    <div class="col-12 col-lg-6 col-xl-3 p-3 d-flex justify-content-center">
                        <div class="card">
                            <img class="w-100" style="height: 250px;" src="@/assets/img/travel1.avif" alt="">
                            <div class="card-head">
                                <p class="fs-2 p-3">New Zealand</p>
                            </div>
                            <div class="card-body">
                                <p class="fs-5">Auckland is a large metropolitan city in the North Island of New
                                    Zealand.</p>
                                <p class="fs-6">$130,290</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 col-xl-3 p-3 d-flex justify-content-center">
                        <div class="card">
                            <img class="w-100" style="height: 250px;" src="@/assets/img/travel2.jpg" alt="">
                            <div class="card-head">
                                <p class="fs-2 p-3">Japan</p>
                            </div>
                            <div class="card-body">
                                <p class="fs-5">Hokkado is the second-largest island of Japan and comprises the largest
                                    and northernmost prefecture, making up its own region.</p>
                                <p class="fs-6">$90,850</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 col-xl-3 p-3 d-flex justify-content-center">
                        <div class="card">
                            <img class="w-100" style="height: 250px;" src="@/assets/img/travel3.jpg" alt="">
                            <div class="card-head">
                                <p class="fs-2 p-3">Russia</p>
                            </div>
                            <div class="card-body">
                                <p class="fs-5">Saint Petersburg, formerly known as Petrograd and later Leningrad, is
                                    the second-largest city in Russia after Moscow.</p>
                                <p class="fs-6">$190,500</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 col-xl-3 p-3 d-flex justify-content-center">
                        <div class="card">
                            <img class="w-100" style="height: 250px;" src="@/assets/img/travel4.jpg" alt="">
                            <div class="card-head">
                                <p class="fs-2 p-3">Mongolia</p>
                            </div>
                            <div class="card-body">
                                <p class="fs-5">Ulaanbaatar was founded in 1639 as a nomadic Buddhist monastic centre,
                                    changing location 28 times, and was permanently settled at its modern location in
                                    1778.</p>
                                <p class="fs-6">$123,000</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row m-0">
                    <div class="col-12 col-lg-6 col-xl-3 p-3 d-flex justify-content-center">
                        <div class="card">
                            <img class="w-100" style="height: 250px;" src="@/assets/img/travel5.jpg" alt="">
                            <div class="card-head">
                                <p class="fs-2 p-3">Yemen</p>
                            </div>
                            <div class="card-body">
                                <p class="fs-5">Sanaa is one of the highest capital cities in the world and is next to
                                    the Sarawat Mountains of Jabal An-Nabi Shu'ayb and Jabal Tiyal, considered to be the
                                    highest mountains in the Arabian Peninsula.</p>
                                <p class="fs-6">$180,230</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 col-xl-3 p-3 d-flex justify-content-center">
                        <div class="card">
                            <img class="w-100" style="height: 250px;" src="@/assets/img/travel6.jpg" alt="">
                            <div class="card-head">
                                <p class="fs-2 p-3">Abu Dhabi</p>
                            </div>
                            <div class="card-body">
                                <p class="fs-5">Abu Dhabi is located on an island in the Persian Gulf, off the Central
                                    West Coast. Most of the city and the Emirate reside on the mainland connected to the
                                    rest of the country.</p>
                                <p class="fs-6">$200,900</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 col-xl-3 p-3 d-flex justify-content-center">
                        <div class="card">
                            <img class="w-100" style="height: 250px;" src="@/assets/img/travel7.jpg" alt="">
                            <div class="card-head">
                                <p class="fs-2 p-3">Scotland</p>
                            </div>
                            <div class="card-body">
                                <p class="fs-5">Scotland is a country that is part of the United Kingdom. It contains
                                    nearly one-third of the United Kingdom's land area.</p>
                                <p class="fs-6">$168,000</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 col-xl-3 p-3 d-flex justify-content-center">
                        <div class="card">
                            <img class="w-100" style="height: 250px;" src="@/assets/img/travel8.jpg" alt="">
                            <div class="card-head">
                                <p class="fs-2 p-3">Rovaniemi</p>
                            </div>
                            <div class="card-body">
                                <p class="fs-5">Rovaniemi is the main regional centre of Lapland, and the Rovaniemi
                                    Airport is the second busiest airport in Finland.</p>
                                <p class="fs-6">$223,000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="row m-0">
            <div class="cro3">
            </div>
        </section>
        <section class="map" id="map">
            <div class="row m-0">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5411.026020984099!2d151.1801075815632!3d-33.897563924022585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b037411b0adb%3A0x69c73e5db7492216!2sAsylum%20Seekers%20Centre!5e0!3m2!1szh-TW!2stw!4v1721322817319!5m2!1szh-TW!2stw"
                    width="600" height="750" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="keyInfo bg-white p-3" id="keyInfo">
                <form>
                    <div class="mb-3">
                        <p class="fs-3">Feedback</p>
                        <p class="fs-6">If you have any questions or comments, please don't hesitate to contact us.</p>
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Message</label>
                        <input type="password" class="form-control" id="exampleInputPassword1">
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                    <p class="fs-6 mt-2">Thank you very much for the valuable advice, we will send this to relevant
                        departments.</p>
                </form>
            </div>
        </section>
    </main>
</template>

<style>
body {
    overflow-x: hidden;
}

.my-drop-after::after {
    display: none;
}

#my-dropdown-menu {
    left: -120px;
}

.my-main-height {
    height: 70%;
}

.my-circle-font {
    width: 25px;
    height: 25px;
    background-color: #a6ba42;
}

.my-company-img {
    width: 75px;
    height: 75px;
    border-radius: 50px;
}

.cro1 {
    width: 200px;
    height: 200px;
    background-image: url(@/assets/img/cro3.png);
    background-size: cover;
    z-index: 9;
}

@media(max-width: 767px) {
    .cro1 {
        width: 150px;
        height: 150px;
    }
}

@media(max-width: 575px) {
    .cro1 {
        width: 100px;
        height: 100px;
    }
}

.cro3 {
    width: 200px;
    height: 200px;
    background-image: url(@/assets/img/cro2.png);
    background-size: cover;
    z-index: 9;
    overflow-x: hidden;
}

.my-exp1-img {
    width: 500px;
    height: 300px;
}

.my-exp2-img {
    width: 600px;
    height: 30px;
}

.my-product-img {
    width: 50px;
    height: 50px;
    border: #a6ba42 3px dashed;
}

.my-button {
    width: 25px;
    height: 25px;
}

.icon-link {
    text-decoration: none;
    /* 去除底線 */
}

a {
    text-decoration: none;
    color: black;
}

.checked {
    color: orange;
}

#map {
    position: relative;
}

#keyInfo {
    width: 20%;
    position: absolute;
    left: 60%;
    top: 10%;
}

@media(max-width: 1319px) {
    #keyInfo {
        width: 60%;
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        top: 50%;
    }
}

@media(max-width: 767px) {
    #keyInfo {
        width: 80%;
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        top: 50%;
    }
}

.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
}

.btn-heart {
    width: 2rem;
    height: 2rem;
}

.click-heart {
    background-color: rgb(232, 99, 46)
}
</style>