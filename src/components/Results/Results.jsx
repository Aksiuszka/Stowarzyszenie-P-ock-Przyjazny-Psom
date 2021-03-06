import Pet from '../../modules/Pet/Pet';

const Results = ({pets})=>{
return(
    <div>
    {!pets.length ? ( <h1>Nie ma tu Twojego pupila!</h1>) : (
            pets.map((pet) => (
				<Pet
					name={pet.name}
					animal={pet.animal}
					breed={pet.breed}
					key={pet.id}
                    images = {pet.images}
                    location = {`${pet.city}`}
                    id={pet.id}
				/>
			))
        )
    }
    </div>
)
}
export default Results;
