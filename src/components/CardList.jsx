import Card from './Card.jsx';

const CardList = ({ robots }) => {
    const cardComponent = robots.map((user, i) => {
        return (
            <Card
                key={i}
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