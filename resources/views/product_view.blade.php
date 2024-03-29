@extends('index')
@section('content')

<!-- Start Top Nav -->

<!-- Close Header -->


<!-- Start Banner Hero -->
<div id="template-mo-jassa-hero-carousel" class="carousel slide" data-bs-ride="carousel">
    <ol class="carousel-indicators">
        <li data-bs-target="#template-mo-jassa-hero-carousel" data-bs-slide-to="0" class="active"></li>
        <li data-bs-target="#template-mo-jassa-hero-carousel" data-bs-slide-to="1"></li>
        <li data-bs-target="#template-mo-jassa-hero-carousel" data-bs-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
        <div class="carousel-item active">
            <div class="container">
                <div class="row p-5">
                    <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                        <img class="img-fluid" src="https://therichpost.com/wp-content/uploads/2021/05/banner_img_01.jpg" alt="">
                    </div>
                    <div class="col-lg-6 mb-0 d-flex align-items-center">
                        <div class="text-align-left align-self-center">
                            <h1 class="h1 text-success"><b>Stan Smith</b></h1>
                            <h3 class="h2">Chaussure de sport</h3>
                            <p>
                                L'Adidas Stan Smith est une chaussure de tennis produite par Adidas et sortie en 1964. D'abord appelée Robert Haillet du nom de son concepteur français, elle devient dans les années 1970 la Stan Smith, à la suite de l'accord de la marque avec le joueur de tennis américain.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <a class="carousel-control-prev text-decoration-none w-auto ps-3" href="#template-mo-jassa-hero-carousel" role="button" data-bs-slide="prev">
        <i class="fas fa-chevron-left"></i>
    </a>
    <a class="carousel-control-next text-decoration-none w-auto pe-3" href="#template-mo-jassa-hero-carousel" role="button" data-bs-slide="next">
        <i class="fas fa-chevron-right"></i>
    </a>
</div>
<!-- End Banner Hero -->


<!-- Start Categories of The Month -->
<section class="container py-5">
    <div class="row">
        <div class="col-12 col-md-4 p-5 mt-3">

            <a href="#"><img src="https://therichpost.com/wp-content/uploads/2021/05/category_img_01.jpg" class="rounded-circle img-fluid border"></a>
            <h5 class="text-center mt-3 mb-3">Montre</h5>
            <p class="text-center"> 5800 xof</p>
            <p class="text-center"><a class="btn btn-success text-light my-cart-btn" data-id="1" data-name="montre" data-summary="summary 1" data-price="5800" data-quantity="1" data-image="https://therichpost.com/wp-content/uploads/2021/05/category_img_01.jpg">
                    Acheter
                </a></p>
        </div>
        <div class="col-12 col-md-4 p-5 mt-3">
            <a href="#"><img src="https://therichpost.com/wp-content/uploads/2021/05/category_img_02.jpg" class="rounded-circle img-fluid border"></a>
            <h2 class="h5 text-center mt-3 mb-3">Chaussure</h2>
            <p class="text-center"> 8000 xof</p>
            <p class="text-center"><a class="btn btn-success text-light my-cart-btn" data-id="2" data-name="chaussure" data-summary="summary 2" data-price="8000" data-quantity="1" data-image="https://therichpost.com/wp-content/uploads/2021/05/category_img_02.jpg">Acheter</a></p>
        </div>
        <div class="col-12 col-md-4 p-5 mt-3">
            <a href="#"><img src="https://therichpost.com/wp-content/uploads/2021/05/category_img_03.jpg" class="rounded-circle img-fluid border"></a>
            <h2 class="h5 text-center mt-3 mb-3">photogray</h2>
            <p class="text-center"> 12000 xof</p>
            <p class="text-center"><a class="btn btn-success text-light my-cart-btn" data-id="3" data-name="photogray" data-summary="summary 3" data-price="12000" data-quantity="1" data-image="https://therichpost.com/wp-content/uploads/2021/05/category_img_03.jpg">Acheter</a></p>
        </div>
    </div>
</section>
<!-- End Categories of The Month -->


<!-- Start Featured Product -->
<section class="bg-light">
    <div class="container py-5">
        <div class="row text-center py-3">
            <div class="col-lg-6 m-auto">
                <h1 class="h1">Produit en vedette</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-4 mb-4">
                <div class="card h-100">
                    <a href="#">
                        <img src="https://therichpost.com/wp-content/uploads/2021/05/feature_prod_01.jpg" class="card-img-top" alt="...">
                    </a>
                    <div class="card-body">
                        <ul class="list-unstyled d-flex justify-content-between">
                            <li>
                                <i class="text-warning fa fa-star"></i>
                                <i class="text-warning fa fa-star"></i>
                                <i class="text-warning fa fa-star"></i>
                                <i class="text-muted fa fa-star"></i>
                                <i class="text-muted fa fa-star"></i>
                            </li>
                            <li class="text-muted text-right">$240.00</li>
                        </ul>
                        <a href="#" class="h2 text-decoration-none text-dark">Lorem Ipsum</a>
                        <p class="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.
                        </p>
                        <p class="text-muted">Reviews (24)</p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-4 mb-4">
                <div class="card h-100">
                    <a href="#">
                        <img src="https://therichpost.com/wp-content/uploads/2021/05/feature_prod_02.jpg" class="card-img-top" alt="...">
                    </a>
                    <div class="card-body">
                        <ul class="list-unstyled d-flex justify-content-between">
                            <li>
                                <i class="text-warning fa fa-star"></i>
                                <i class="text-warning fa fa-star"></i>
                                <i class="text-warning fa fa-star"></i>
                                <i class="text-muted fa fa-star"></i>
                                <i class="text-muted fa fa-star"></i>
                            </li>
                            <li class="text-muted text-right">$480.00</li>
                        </ul>
                        <a href="#" class="h2 text-decoration-none text-dark">Lorem Ipsum</a>
                        <p class="card-text">
                            Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum
                        </p>
                        <p class="text-muted">Reviews (48)</p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-4 mb-4">
                <div class="card h-100">
                    <a href="#">
                        <img src="https://therichpost.com/wp-content/uploads/2021/05/feature_prod_03.jpg" class="card-img-top" alt="...">
                    </a>
                    <div class="card-body">
                        <ul class="list-unstyled d-flex justify-content-between">
                            <li>
                                <i class="text-warning fa fa-star"></i>
                                <i class="text-warning fa fa-star"></i>
                                <i class="text-warning fa fa-star"></i>
                                <i class="text-warning fa fa-star"></i>
                                <i class="text-warning fa fa-star"></i>
                            </li>
                            <li class="text-muted text-right">$360.00</li>
                        </ul>
                        <a href="#" class="h2 text-decoration-none text-dark">Lorem Ipsum</a>
                        <p class="card-text">
                            Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum.
                        </p>
                        <p class="text-muted">Reviews (74)</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- End Featured Product -->


<!-- Start Footer -->

<!-- <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js"></script> -->

@endsection