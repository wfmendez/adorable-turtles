import Card from '../card/card.component';
import './card-list.style.css'

const CardList = ({ turtles }) => {
    return (
        <div className='card-list-container'>
            {turtles.map(({ name, turtleId, description, image_url }) => {
                return (
                    <Card key={turtleId} name={name} description={description} imgURL={image_url}> </Card>
                );
            })}
        </div>
    )
}

export default CardList;