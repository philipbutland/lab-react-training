import CardNumber from "./CardNumber"
import Expires from "./Expires"

function CreditCard(props) {
    console.log(props.cardDetails)

    return(
        <div>
            <h2>Credit Cards</h2>
            <div className="creditCardHolder">
                {props.cardDetails.map((oneCard) => {
                    console.log(oneCard)
                    return(
                        <div className="creditCard" 
                         style={{
                             backgroundColor: oneCard.bgColor, 
                             color: oneCard.color}}>

                            <div className="cardType">{oneCard.type}</div>
                            <CardNumber number={oneCard.number} />
                            <Expires month={oneCard.expirationMonth} year={oneCard.expirationYear}  bank={oneCard.bank} />
                            <div className="cardExpiry">{oneCard.owner}</div>
                        </div>
                        )
                    })}
            </div>

        </div>
)}

export default CreditCard