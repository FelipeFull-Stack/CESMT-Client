
function Home() {
    return (
        <>
            <div class="elementor-widget-container">
                <div class="elementor-image-carousel-wrapper swiper-container swiper-container-fade swiper-container-initialized swiper-container-horizontal" dir="ltr">
                    <div class="elementor-image-carousel swiper-wrapper swiper-image-stretch" style="transition-duration: 0ms;">
                        <div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="1" style="width: 907px; transition-duration: 0ms; opacity: 0; transform: translate3d(0px, 0px, 0px);">
                            <img decoding="async" class="swiper-slide-image" src="http://cesmt.dominiotemporario.com/wp-content/uploads/2020/06/Sem-título-3.png" alt="Sem título-3" />
                        </div>
                        <div class="swiper-slide swiper-slide-prev swiper-slide-duplicate-next" data-swiper-slide-index="0" style="width: 907px; transition-duration: 0ms; opacity: 0; transform: translate3d(-907px, 0px, 0px);">
                            <img decoding="async" class="swiper-slide-image" src="http://cesmt.dominiotemporario.com/wp-content/uploads/2020/06/4.png" alt="4" />
                        </div>
                        <div class="swiper-slide swiper-slide-active" data-swiper-slide-index="1" style="width: 907px; transition-duration: 0ms; opacity: 1; transform: translate3d(-1814px, 0px, 0px);">
                            <img decoding="async" class="swiper-slide-image" src="http://cesmt.dominiotemporario.com/wp-content/uploads/2020/06/Sem-título-3.png" alt="Sem título-3" />
                        </div>
                        <div class="swiper-slide swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev" data-swiper-slide-index="0" style="width: 907px; transition-duration: 0ms; opacity: 0; transform: translate3d(-2721px, 0px, 0px);">
                            <img decoding="async" class="swiper-slide-image" src="http://cesmt.dominiotemporario.com/wp-content/uploads/2020/06/4.png" alt="4" />
                        </div>
                    </div>
                    <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
                        <span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 1"></span>
                        <span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button" aria-label="Go to slide 2"></span>
                    </div>
                    <div class="elementor-swiper-button elementor-swiper-button-prev" tabindex="0" role="button" aria-label="Previous slide">
                        <i class="eicon-chevron-left" aria-hidden="true"></i>
                        <span class="elementor-screen-only">Anterior</span>
                    </div>
                    <div class="elementor-swiper-button elementor-swiper-button-next" tabindex="0" role="button" aria-label="Next slide">
                        <i class="eicon-chevron-right" aria-hidden="true"></i>
                        <span class="elementor-screen-only">Próximo</span>
                    </div>
                    <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
            </div>
        </>
    );
}

export { Home }