import Projects from '../../../api/db/projects';
import GridItem from './grid-item';
const Grid = () => { 
    const GridItemsHTML = Projects.map((project, index) => {
        return GridItem(project, index)
    });
    return `<div class="grid">
    <div class="grid-sizer"></div>
   ${GridItemsHTML.join('')}
</div>

<div class="grid-more">
    <span class="ajax-loader"></span>
    <button class="btn btn-border ripple"><i class="rsicon rsicon-add"></i></button>
</div>`}

export default Grid;