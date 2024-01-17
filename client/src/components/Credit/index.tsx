

interface CreditPropsI {
    name: string,
    owner: string,
    source: string,
    link: string,
    credit: string,
    desc: string
}

const Credit = ({ name, owner, source, link, credit, desc }: CreditPropsI) => {
    return (
        <div className="credit">
            <img src={credit} alt={desc} className="credit-ex" />
            <div className="info-container">
                <div className="name flex">
                    <h4>name:</h4>
                    <p>{name}</p>
                </div>
                <div className="owner flex">
                    <h4>owner:</h4>
                    <p>{owner}</p>
                </div>
                <div className="details flex">
                    <div className="source"><p>{source}</p></div>
                    <div className="link"><a href={link}>[link]</a></div>
                </div>
            </div>
        </div>
    );
};

export default Credit;