import { Component } from 'react';

class Carousel extends Component {
	state = { active: 0 };
	static defaultProps = {
		images: ['http://pets-images.dev-apis.com/pets/none.jpg'],
	};
	render() {
		const { active } = this.state;
		const { images } = this.props;
		return (
			<div>
        <img src={images[active]} alt="pet" />
        <div>
          {images.map((photo, index) => {
            <img src={ photo }
          })}
        </div>
			</div>
		);
	}
}
export default Carousel;
