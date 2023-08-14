import Header from '../header';
import Footer from '../footer';

const Wrapper = () => {
	return `
	<div class="wrapper">
		${Header()}
		<div class="content">
			<div class="container">
				
			</div>
		</div>
		${Footer()}
	</div>`
}

export default Wrapper;