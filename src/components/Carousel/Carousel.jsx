import { Component } from 'react';

class Carousel extends Component {
	state = { active: 0 };
	static defaultProps = {
		images: ['http://pets-images.dev-apis.com/pets/none.jpg'],
	};
	render() {
		const { active } = this.state;
		const { images } = this.props;
		const handleClick = e => {
			this.setState({
				active: +e.target.dataset.index,
			});
		};
		return (
			<div>
				<img src={images[active]} alt="pet" />
				<div>
					{images.map((photo, index) => (
						<img
							key={photo}
							src={photo}
							onClick={handleClick}
							alt="pic"
							data-set={index}
							className={index === active ? 'active' : ''}
						/>
					))}
				</div>
			</div>
		);
	}
}
export default Carousel;
