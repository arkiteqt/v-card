const Section = (id,title, content) => {
return `<section id="${id}" class="section section-${id}">
    <div class="animate-up animated">
        <h2 class="section-title">${title}</h2>

        <div class="section-box">
            ${content}
        </div>
    </div>
</section>
<!-- #text-section -->`}

export default Section;