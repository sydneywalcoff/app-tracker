import './assets/style.css'

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
                <div className="name flex justify-between">
                    <p className='flex'>name: <span>{name}</span></p>
                </div>
                <div className="owner flex justify-between">
                    <p className='flex'>owner: {owner}</p>
                </div>
                <div className="details flex justify-around">
                    <div className="source"><a href={source}>source</a></div>
                    <div className="link"><a href={link}>[link]</a></div>
                </div>
            </div>
        </div>
    );
};

export default Credit;