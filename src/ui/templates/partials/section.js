
const Section = (id,title) => {
return `<section id="${id}" class="section section-${title}">
    <div class="animate-up animated">
        <h2 class="section-title">${title}</h2>

        <div class="section-box">
            <% section.content %>
        </div>
    </div>
</section>
<!-- #text-section -->`}

export default Section;