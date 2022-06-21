import React from 'react';
import { Component } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from '../../components/Carousel';

class Details extends Component {
	constructor(props) {
		super(props);
		this.state = { loading: true };
	}
	async componentDidMount() {
		const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`);
		const json = await res.json();
		this.setState(Object.assign({ loading: false }, json.pets[0]));
	}

	render() {
		if (this.state.loading) {
			return <h2>Ładuje się</h2>;
		}
		const { animal, breed, description, name, images } = this.state;
		return (
			<div>
				<Carousel images={images} />
				<h2>{name}</h2>
				<h2>
					{animal} - {breed} -{' '}
				</h2>
			</div>
		);
	}
}
const Wrappeddetails = () => {
	const params = useParams();
	return <Details params={params} />;
};

export default Wrappeddetails;
