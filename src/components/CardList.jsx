import Card from './Card.jsx';

const CardList = ({ robots }) => {
    const cardComponent = robots.map((robot, i) => {
        return (
            <Card
                key={i}
                id={i}
                name={robots[i].name}
                email={robots[i].email}
            />
        );
    });

    return (
        <>
            {cardComponent}
        </>
    )
};

export default CardList;