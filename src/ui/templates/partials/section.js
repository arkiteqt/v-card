const Section = (id,title, useSectionBox = true, content) => {
    const SectionTitle = title ? `<h2 class="section-title">${title}</h2>` : '';
    const SectionContent = useSectionBox ? `<div class="section-box">${content}</div>` : `${content}`;
return `<section id="${id}" class="section section-${id}">
    <div class="animate-up animated">
        ${SectionTitle}
        ${SectionContent}
    </div>
</section>
<!-- #text-section -->`}

export default Section;