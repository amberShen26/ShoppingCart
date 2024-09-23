<script>
    export default {

    };
</script>

<template>
    <nav class="navbar navbar-expand-lg" style="background-color: #a6ba42;">
        <div class="container-fluid">
            <img src="@/assets/img/travel-logo.jpg" class="ms-3 me-3 img-thumbnail" alt="..." width="60" height="60">
            <RouterLink class="navbar-brand" to="/">
                <p class="font-monospace my-1" style="font-size: 20px;">Crocodile Travel</p>
            </RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="my-1 nav-link active d-flex justify-content-center" aria-current="page" href="#">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="my-1 nav-link d-flex justify-content-center" href="#">Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a class="my-1 nav-link d-flex justify-content-center" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="my-1 nav-link d-flex justify-content-center" href="./mainpage.html#map">Contact</a>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/shoppingCart" class="nav-link d-flex justify-content-center">
                            <i class="bi bi-cart-check-fill" style="font-size: 24px;"></i>
                        </RouterLink>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle my-drop-after d-flex justify-content-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi bi-person-circle" style="font-size: 24px;"></i>
                        </a>
                        <ul id="my-dropdown-menu" class="dropdown-menu">
                            <li><RouterLink class="dropdown-item d-flex justify-content-center" to="/login">Login</RouterLink></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style>
    .my-drop-after::after{
        display: none;
    }
    #my-dropdown-menu{
        left: -120px;
    }
    .my-main-height{
        height: 70%;  
    }
    .my-circle-font{
        width: 25px;
        height: 25px;
        background-color: #a6ba42;
    }
    .my-product-img{
        width: 50px;
        height: 50px;
        border: #a6ba42 3px dashed;
    }
    .my-button{
        width: 25px;
        height: 25px;
    }
    .icon-link {
        text-decoration: none; 
      /* 去除底線 */
    }
    a{
        text-decoration: none;
        color: black;
    }
</style>