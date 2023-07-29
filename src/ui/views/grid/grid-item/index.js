const GridItem = (item, index) => {
    const categoryClasses = item.categories.join('');
    const imageURL = item.imageUrl;
    console.log(index);
    let fancyBoxBtns = '';
    if(item.inlineBoxes.length > 0){
        for(let i = 0; i < item.inlineBoxes.length; i++){
            const fancyBoxClass = i > 0 ? 'hidden' : 'btn-zoom';
            const fancyBoxGroup = `portfolioFancybox${index}`;
            const fancyBoxLink = `portfolio${index}-inline${i}`;

            fancyBoxBtns += `<a class="portfolioFancybox ${fancyBoxClass}" data-fancybox-group="${fancyBoxGroup}"
            href="#${fancyBoxLink}">${i>0 ? '' : `<i class="rsicon rsicon-eye"></i>`}</a>`
        }
    }

    let fancyBoxInlineBoxes = '';
    for(let i = 0 ; i < item.inlineBoxes.length; i++){
        const fancyBoxLink = `portfolio${index}-inline${i}`;
        const inlineEmbedHTML = item.inlineBoxes[i].embed ? ` <div class="inline-embed" data-embed-type="${item.inlineBoxes[i].embed.type}"
        data-embed-url="${item.inlineBoxes[i].embed.url}"></div>` : '';

        const inlineTitle = item.inlineBoxes[i].title ? `<h2 class="inline-title">${item.inlineBoxes[i].title}</h2>` : '';

        const inlineText = item.inlineBoxes[i].text ? `<div class="inline-text">${item.inlineBoxes[i].text}</div>` : '';

        fancyBoxInlineBoxes += `<div id="${fancyBoxLink}" class="fancybox-inline-box">
        ${inlineEmbedHTML}
        <div class="inline-cont">
            ${inlineTitle}

            ${inlineText}
        </div>
    </div>`
    }

    return `<div class="grid-item size${item.size} ${categoryClasses}">
    <div class="grid-box">
        <figure class="portfolio-figure">
            <img src="${imageURL}" alt=""/>
            <figcaption class="portfolio-caption">
                <div class="portfolio-caption-inner">
                    <h3 class="portfolio-title">${item.title}</h3>
                    <h4 class="portfolio-cat">${categoryClasses}</h4>

                    <div class="btn-group">
                        <a class="btn-link" href="${item.link}" target="_blank"><i
                                class="rsicon rsicon-link"></i></a>
                        ${fancyBoxBtns}
                    </div>
                </div>
            </figcaption>
        </figure>

        <!-- Start: Portfolio Inline Boxes -->
        ${fancyBoxInlineBoxes}
        <!-- End: Portfolio Inline Boxes -->
    </div>
</div>
<!-- .grid-item -->`
}

export default GridItem;