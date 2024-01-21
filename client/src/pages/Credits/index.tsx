import SectionContainer from '../../components/SectionContainer';
import ContentContainer from '../../components/ContentContainer';
import Credit from '../../components/Credit';

const Credits = () => {
    const credits = [
        {
            name: 'The Horrors Persist',
            desc: 'A hamster with pink sunglasses atop its head driving a pink toy car',
            owner: 'me',
            source: 'facebook',
            link: 'facebook.com',
            credit: 'https://imageproxy.ifunny.co/crop:x-20,resize:640x,quality:90x75/images/0f12d86f053802aa518d8fdad596203bf25024d5491a71799aa6276a78ab633f_1.jpg'
        },
        {
            name: 'The Horrors Persist',
            desc: 'A hamster with pink sunglasses atop its head driving a pink toy car',
            owner: 'me',
            source: 'facebook',
            link: 'facebook.com',
            credit: 'https://imageproxy.ifunny.co/crop:x-20,resize:640x,quality:90x75/images/0f12d86f053802aa518d8fdad596203bf25024d5491a71799aa6276a78ab633f_1.jpg'
        },
        {
            name: 'The Horrors Persist',
            desc: 'A hamster with pink sunglasses atop its head driving a pink toy car',
            owner: 'me',
            source: 'facebook',
            link: 'facebook.com',
            credit: 'https://imageproxy.ifunny.co/crop:x-20,resize:640x,quality:90x75/images/0f12d86f053802aa518d8fdad596203bf25024d5491a71799aa6276a78ab633f_1.jpg'
        },
        {
            name: 'The Horrors Persist',
            desc: 'A hamster with pink sunglasses atop its head driving a pink toy car',
            owner: 'me',
            source: 'facebook',
            link: 'facebook.com',
            credit: 'https://imageproxy.ifunny.co/crop:x-20,resize:640x,quality:90x75/images/0f12d86f053802aa518d8fdad596203bf25024d5491a71799aa6276a78ab633f_1.jpg'
        },
        {
            name: 'The Horrors Persist',
            desc: 'A hamster with pink sunglasses atop its head driving a pink toy car',
            owner: 'me',
            source: 'facebook',
            link: 'facebook.com',
            credit: 'https://imageproxy.ifunny.co/crop:x-20,resize:640x,quality:90x75/images/0f12d86f053802aa518d8fdad596203bf25024d5491a71799aa6276a78ab633f_1.jpg'
        },
        {
            name: 'The Horrors Persist',
            desc: 'A hamster with pink sunglasses atop its head driving a pink toy car',
            owner: 'me',
            source: 'facebook',
            link: 'facebook.com',
            credit: 'https://imageproxy.ifunny.co/crop:x-20,resize:640x,quality:90x75/images/0f12d86f053802aa518d8fdad596203bf25024d5491a71799aa6276a78ab633f_1.jpg'
        },
    ];
    return (
        <SectionContainer>
            <ContentContainer>
                <>
                    <h2>Credits</h2>
                    <div className="credit-container flex flex-wrap justify-start">
                        {credits.map((credit)=> <Credit name={credit.name} desc={credit.desc} artist={credit.owner} source={credit.source} link={credit.link} credit={credit.credit} />)}
                    </div>
                </>
            </ContentContainer>
        </SectionContainer>
    );
};

export default Credits;
