import Header from '../Header';
import Footer from '../Footer';

const Wrapper = () => {
	return `
	<div class="wrapper">
		${Header}
		<div class="content">
			<div class="container">
				
			</div>
		</div>
		${Footer}
	</div>`
}

export default Wrapper;