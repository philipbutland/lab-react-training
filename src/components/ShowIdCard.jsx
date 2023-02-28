import CardImage from './CardImage';
import CardText from './CardText';

const IDCard = [
  {
    lastName: 'Doe',
    firstName: 'John',
    gender: 'male',
    height: 178,
    birth: Date('1992-07-14'),
    picture: 'https://randomuser.me/api/portraits/men/44.jpg',
  },
  {
    lastName: 'Obrien',
    firstName: 'Dolores',
    gender: 'female',
    height: 172,
    birth: Date('1988-05-11'),
    picture: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
];

function ShowIdCard() {

 return(
    <div>
        <h2>ID Info</h2>
        {IDCard.map((oneCard) => {
            return(
                <div className='IdAll'>
                    <CardImage image={oneCard.picture} />
                    <CardText {...oneCard} />
                    <br />
                </div>
            )
        })}
    </div>
  )}
;

export default ShowIdCard;
