const mobileNav = () => {
return `<div class="mobile-nav">
<button class="btn-mobile mobile-nav-close"><i class="rsicon rsicon-close"></i></button>

<div class="mobile-nav-inner">
	<nav id="mobile-nav" class="nav">
		<ul class="clearfix">
		<% menu.forEach(function(item) { %>
			<li><a href="<%= item.link %>"><%= item.name %></a>
			<% if(item.menu){ %>
				<ul>
					<% item.menu.forEach(function(subItem) { %>
					<li><a href="<%= subItem.link %>"><%= subItem.name %></a></li>
					<% }) %>
				</ul>
			<% } %>
			</li>
		<% }); %>
		</ul>
	</nav>
</div>
</div>
<!-- .mobile-nav -->`}

module.exports = mobileNav;