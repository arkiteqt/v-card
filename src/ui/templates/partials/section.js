const Section = (id,title, content) => {
    const SectionTitle = title ? `<h2 class="section-title">${title}</h2>` : '';
return `<section id="${id}" class="section section-${id}">
    <div class="animate-up animated">
        ${SectionTitle}

        <div class="section-box">
            ${content}
        </div>
    </div>
</section>
<!-- #text-section -->`}

export default Section;