const GridItem = () => {
    return `<div class="grid-item size22 photography">
    <div class="grid-box">
        <figure class="portfolio-figure">
            <img src="img/uploads/portfolio/portfolio-thumb-05-610x600.jpg" alt=""/>
            <figcaption class="portfolio-caption">
                <div class="portfolio-caption-inner">
                    <h3 class="portfolio-title">Street Photography</h3>
                    <h4 class="portfolio-cat">Photography</h4>

                    <div class="btn-group">
                        <a class="btn-link" href="http://bit.ly/1YtB8he" target="_blank"><i
                                class="rsicon rsicon-link"></i></a>
                        <a class="portfolioFancybox btn-zoom" data-fancybox-group="portfolioFancybox1"
                           href="#portfolio1-inline1"><i class="rsicon rsicon-eye"></i></a>
                        <a class="portfolioFancybox hidden" data-fancybox-group="portfolioFancybox1"
                           href="#portfolio1-inline2"></a>
                        <a class="portfolioFancybox hidden" data-fancybox-group="portfolioFancybox1"
                           href="#portfolio1-inline3"></a>
                    </div>
                </div>
            </figcaption>
        </figure>

        <!-- Start: Portfolio Inline Boxes -->
        <div id="portfolio1-inline1" class="fancybox-inline-box">
            <div class="inline-embed" data-embed-type="image"
                 data-embed-url="img/uploads/portfolio/portfolio-thumb-05-large.jpg"></div>
            <div class="inline-cont">
                <h2 class="inline-title">Street photography is photography that features the chance
                    encounters and random accidents within public places.</h2>

                <div class="inline-text">
                    <p>Street photography does not necessitate the presence of a street or even the urban
                        environment. Though people usually feature directly, street photography might be
                        absent of people and can be an object or environment where the image projects a
                        decidedly human character in facsimile or aesthetic.</p>
                </div>
            </div>
        </div>

        <div id="portfolio1-inline2" class="fancybox-inline-box">
            <div class="inline-embed" data-embed-type="image"
                 data-embed-url="img/uploads/portfolio/portfolio-thumb-01-large.jpg"></div>
            <div class="inline-cont">
                <div class="inline-text">
                    <h2 class="inline-title">Framing and timing</h2>

                    <p>Framing and timing can be key aspects of the craft with the aim of some street
                        photography being to create images at a decisive or poignant moment. Street
                        photography can focus on emotions displayed, thereby also recording people's history
                        from an emotional point of view.</p>
                </div>
            </div>
        </div>

        <div id="portfolio1-inline3" class="fancybox-inline-box">
            <div class="inline-embed" data-embed-type="iframe"
                 data-embed-url="https://player.vimeo.com/video/118244244"></div>
            <div class="inline-cont">
                <div class="inline-text">
                    <h2 class="inline-title">A Look Into Documenting Street Fashion Photography</h2>

                    <p>HB Nam is an internationally known street fashion photographer. In this Leica Camera
                        Portrait, Nam explains how he started in photography and what photography means to
                        him. For Nam, it's about documenting what's around him and the concentration
                        required to achieve a good shot.</p>
                </div>
            </div>
        </div>
        <!-- End: Portfolio Inline Boxes -->
    </div>
</div>
<!-- .grid-item -->`
}

export default GridItem;