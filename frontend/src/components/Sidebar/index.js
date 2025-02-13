const Sidebar = () => {
    return `<button class="btn-sidebar btn-sidebar-close"><i class="rsicon rsicon-close"></i></button>

    <div class="widget-area">
        <aside class="widget widget-profile">
            <div class="profile-photo">
                <img src="img/uploads/rs-photo-v2.jpg" alt="Robert Smith"/>
            </div>
            <div class="profile-info">
                <h2 class="profile-title">Robert Smith</h2>

                <h3 class="profile-position">Developer and Startup entrepreneur</h3>
            </div>
        </aside>
        <!-- .widget-profile -->

        <aside class="widget widget_search">
            <h2 class="widget-title">Search</h2>

            <form class="search-form">
                <label class="ripple">
                    <span class="screen-reader-text">Search for:</span>
                    <input class="search-field" type="search" placeholder="Search">
                </label>
                <input type="submit" class="search-submit" value="Search">
            </form>
        </aside>
        <!-- .widget_search -->

        <aside class="widget widget_contact">
            <h2 class="widget-title">Contact Me</h2>

            <form class="rsForm" action="php/mailsender.php" method="post">
                <div class="input-field">
                    <label>Name</label>
                    <input type="text" name="rsName" value="">
                    <span class="line"></span>
                </div>

                <div class="input-field">
                    <label>Email</label>
                    <input type="email" name="rsEmail" value="">
                    <span class="line"></span>
                </div>

                <div class="input-field">
                    <label>Subject</label>
                    <input type="text" name="rsSubject" value="">
                    <span class="line"></span>
                </div>

                <div class="input-field">
                    <label>Message</label>
                    <textarea rows="4" name="rsMessage"></textarea>
                    <span class="line"></span>
                </div>
                
                <div class="check-field">
                    <input type="checkbox" name="rsPivacyPolicy" id="rsPivacyPolicyWidget">
                    <label for="rsPivacyPolicy">I have read the Privacy Policy note.</label>
                </div>

                <span class="btn-outer btn-primary-outer ripple">
                    <input class="rsFormSubmit btn btn-lg btn-primary" type="submit" value="Send">
                </span>
            </form>
        </aside>
        <!-- .widget_contact -->

        <aside class="widget widget-popuplar-posts">
            <h2 class="widget-title">Popular posts</h2>
            <ul>
                <li>
                    <div class="post-media"><a href=""><img src="img/uploads/thumb-78x56-1.jpg" alt=""/></a></div>
                    <h3 class="post-title"><a href="">Standard Post Format With Featured Image</a></h3>

                    <div class="post-info"><a href=""><i class="rsicon rsicon-comments"></i>56 comments</a></div>
                </li>
                <li>
                    <div class="post-media"><a href=""><img src="img/uploads/thumb-78x56-2.jpg" alt=""/></a></div>
                    <h3 class="post-title"><a href="">Standard Post Format With Featured Image</a></h3>

                    <div class="post-info"><a href=""><i class="rsicon rsicon-comments"></i>56 comments</a></div>
                </li>
                <li>
                    <div class="post-media"><a href=""><img src="img/uploads/thumb-78x56-3.jpg" alt=""/></a></div>
                    <h3 class="post-title"><a href="">Standard Post Format With Featured Image</a></h3>

                    <div class="post-info"><a href=""><i class="rsicon rsicon-comments"></i>56 comments</a></div>
                </li>
            </ul>
        </aside>
        <!-- .widget-popuplar-posts -->

        <aside class="widget widget_tag_cloud">
            <h2 class="widget-title">Tag Cloud</h2>

            <div class="tagcloud">
                <a href="" title="1 topic">Business</a>
                <a href="" title="9 topics">City</a>
                <a href="" title="10 topics">Creative</a>
                <a href="" title="6 topics">Fashion</a>
                <a href="" title="2 topics">Music</a>
                <a href="" title="5 topics">News</a>
                <a href="" title="9 topics">Peoples</a>
            </div>
        </aside>
        <!-- .widget_tag_cloud -->

        <aside class="widget widget-recent-posts">
            <h2 class="widget-title">Recent posts</h2>
            <ul>
                <li>
                    <div class="post-tag">
                        <a href="">#Photo</a>
                        <a href="">#Architect</a>
                    </div>
                    <h3 class="post-title"><a href="">Standard Post Format With Featured Image</a></h3>

                    <div class="post-info"><a href=""><i class="rsicon rsicon-comments"></i>56 comments</a></div>
                </li>
                <li>
                    <div class="post-tag">
                        <a href="">#Photo</a>
                        <a href="">#Architect</a>
                    </div>
                    <h3 class="post-title"><a href="">Standard Post Format With Featured Image</a></h3>

                    <div class="post-info"><a href=""><i class="rsicon rsicon-comments"></i>56 comments</a></div>
                </li>
                <li>
                    <div class="post-tag">
                        <a href="">#Photo</a>
                        <a href="">#Architect</a>
                    </div>
                    <h3 class="post-title"><a href="">Standard Post Format With Featured Image</a></h3>

                    <div class="post-info"><a href=""><i class="rsicon rsicon-comments"></i>56 comments</a></div>
                </li>
            </ul>
        </aside>
        <!-- .widget-recent-posts -->

        <aside class="widget widget_categories">
            <h2 class="widget-title">Categories</h2>
            <ul>
                <li><a href="" title="Architecture Category Posts">Architecture</a> (9)</li>
                <li><a href="" title="Business Category Posts">Business</a> (16)</li>
                <li><a href="" title="Creative Category Posts">Creative</a> (18)</li>
                <li><a href="" title="Design Category Posts">Design</a> (10)</li>
                <li><a href="" title="Development Category Posts">Development</a> (14)</li>
                <li><a href="" title="Education Category Posts">Education</a> (9)</li>
            </ul>
        </aside>
        <!-- .widget_categories -->
    </div>
    <!-- .widget-area -->
<!-- .sidebar -->`
}

export const createSidebar = (settings) => {
  const sidebar = document.createElement('div');
  const elementClasses = ['sidebar sidebar-fixed'];
  sidebar.className = elementClasses.join(' ');
  sidebar.insertAdjacentHTML('beforeend', Sidebar());

  return sidebar;
};
