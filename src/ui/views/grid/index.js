const Projects = [{
    categories : ['bridge'],
    imageUrl : 'img/uploads/portfolio/portfolio-thumb-11-289x281.jpg',
    title : 'Suspension Bridge',
    link : 'http://bit.ly/1YtB8he',
    details : {
        title : 'Suspension Bridge - Design Technology',
        paragraphs : [`Suspension bridges in their simplest form were originally made from rope and wood.
        Modern suspension bridges use a box section roadway supported by high tensile
        strength cables.
        In the early nineteenth century, suspension bridges used iron chains for cables. The
        high tensile cables used in most modern suspension
        bridges were introduced in the late nineteenth century.<br/>
        Today, the cables are made of thousands of individual steel wires bound tightly
        together. Steel, which is very strong under tension, is
        an ideal material for cables; a single steel wire, only 0.1 inch thick, can support
        over half a ton without breaking.`, `Light, and strong, suspension bridges can span distances from 2,000 to 7,000 feet far
        longer than any other kind of bridge. They are
        ideal for covering busy waterways.`, `With any bridge project the choice of materials and form usually comes down to cost.
        Suspension bridges tend to be the most expensive to build. A suspension bridge
        suspends the roadway from huge main cables, which extend
        from one end of the bridge to the other. These cables rest on top of high towers and
        have to be securely anchored into the bank at either
        end of the bridge. The towers enable the main cables to be draped over long
        distances. Most of the weight or load of the bridge is
        transferred by the cables to the anchorage systems. These are imbedded in either
        solid rock or huge concrete blocks. Inside the anchorages,
        the cables are spread over a large area to evenly distribute the load and to prevent
        the cables from breaking free.`,`The Arthashastra of Kautilya mentions the construction of dams and bridges.A Mauryan
        bridge near Girnar was surveyed by James Princep.
        The bridge was swept away during a flood, and later repaired by Puspagupta, the
        chief architect of emperor Chandragupta I. The bridge
        also fell under the care of the Yavana Tushaspa, and the Satrap Rudra Daman. The use
        of stronger bridges using plaited bamboo and iron
        chain was visible in India by about the 4th century. A number of bridges, both for
        military and commercial purposes, were constructed by
        the Mughal administration in India.`]
    }
},{
    categories : ['nature', 'photography'],
    title : 'Rocky Mountains'

}]

const Grid = () => { return `<div class="grid">
    <div class="grid-sizer"></div>
      <div class="grid-item size11 bridge">
        <div class="grid-box">
            <figure class="portfolio-figure">
                <img src="img/uploads/portfolio/portfolio-thumb-11-289x281.jpg" alt=""/>
                <figcaption class="portfolio-caption">
                    <div class="portfolio-caption-inner">
                        <h3 class="portfolio-title">Suspension Bridge</h3>
                        <h4 class="portfolio-cat">Bridge</h4>

                        <div class="btn-group">
                            <a class="btn-link" href="http://bit.ly/1YtB8he" target="_blank"><i
                                    class="rsicon rsicon-link"></i></a>
                            <a class="portfolioFancybox btn-zoom" data-fancybox-group="portfolioFancybox2"
                               href="#portfolio2-inline1"><i class="rsicon rsicon-eye"></i></a>
                        </div>
                    </div>
                </figcaption>
            </figure>

            <!-- Start: Portfolio Inline Boxes -->
            <div id="portfolio2-inline1" class="fancybox-inline-box">
                <div class="inline-cont">
                    <h2 class="inline-title">Suspension Bridges - Design Technology</h2>

                    <div class="inline-text">

                    </div>
                </div>
            </div>
            <!-- End: Portfolio Inline Boxes -->
        </div>
    </div>
    <!-- .grid-item -->

    <div class="grid-item size11 nature photography">
        <div class="grid-box">
            <figure class="portfolio-figure">
                <img src="img/uploads/portfolio/portfolio-thumb-08-289x281.jpg" alt=""/>
                <figcaption class="portfolio-caption">
                    <div class="portfolio-caption-inner">
                        <h3 class="portfolio-title">Rocky Mountains</h3>
                        <h4 class="portfolio-cat">Nature, Photography</h4>

                        <div class="btn-group">
                            <a class="btn-link" href="http://bit.ly/1YtB8he" target="_blank"><i
                                    class="rsicon rsicon-link"></i></a>
                            <a class="portfolioFancybox btn-zoom" data-fancybox-group="portfolioFancybox3"
                               href="#portfolio3-inline1"><i class="rsicon rsicon-eye"></i></a>
                            <a class="portfolioFancybox hidden" data-fancybox-group="portfolioFancybox3"
                               href="#portfolio3-inline2"></a>
                            <a class="portfolioFancybox hidden" data-fancybox-group="portfolioFancybox3"
                               href="#portfolio3-inline3"></a>
                        </div>
                    </div>
                </figcaption>
            </figure>

            <!-- Start: Portfolio Inline Boxes -->
            <div id="portfolio3-inline1" class="fancybox-inline-box">
                <div class="inline-embed" data-embed-type="image"
                     data-embed-url="img/uploads/portfolio/portfolio-thumb-08-large.jpg"></div>
            </div>

            <div id="portfolio3-inline2" class="fancybox-inline-box">
                <div class="inline-embed" data-embed-type="image"
                     data-embed-url="img/uploads/portfolio/portfolio-thumb-04-large.jpg"></div>
            </div>

            <div id="portfolio3-inline3" class="fancybox-inline-box">
                <div class="inline-embed" data-embed-type="image"
                     data-embed-url="img/uploads/portfolio/portfolio-thumb-02-large.jpg"></div>
            </div>
            <!-- End: Portfolio Inline Boxes -->
        </div>
    </div>
    <!-- .grid-item -->
</div>

<div class="grid-more">
    <span class="ajax-loader"></span>
    <button class="btn btn-border ripple"><i class="rsicon rsicon-add"></i></button>
</div>`}

export default Grid;