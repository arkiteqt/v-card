import Header from '../header';
import Footer from '../footer';

const Wrapper = () => {
	return `${Header()}
	<div class="content">
		<div class="container">
			
		</div>
	</div>
	${Footer()}`
}

export default Wrapper;