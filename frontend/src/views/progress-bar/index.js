const ProgressBar = () => {
    return `<div class="row">
    <div class="col-sm-6">
        <div class="progress-bar">
            <div class="bar-data">
                <span class="bar-title"><%= skills[row].title %></span>
                <span class="bar-value"><%= skills[row].percentage %></span>
            </div>
            <div class="bar-line">
                <span class="bar-fill" data-width="<%= skills[row].percentage %>"></span>
            </div>
        </div>
    </div>

    <div class="col-sm-6">
        <div class="progress-bar">
            <div class="bar-data">
                <span class="bar-title"><%= skills[row+1].title %></span>
                <span class="bar-value"><%= skills[row+1].percentage %></span>
            </div>
            <div class="bar-line">
                <span class="bar-fill" data-width="<%= skills[row+1].percentage %>"></span>
            </div>
        </div>
    </div>
</div>`}

export default ProgressBar;