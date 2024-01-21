

import ContentContainer from '../../components/ContentContainer';

import LandingHeroImg from '../../assets/landing-hero.svg';

import './assets/style.css';

const LandingPage = () => {

    return (
        <ContentContainer className='gray-bg'>
            <div className="flex hero">
                <div className="img-container">
                    <img src={LandingHeroImg} alt="" />
                    </div>
                <div className="text-container">
                    <h1>JOB HUNTING SUCKS</h1>
                </div>
            </div>
        </ContentContainer>
    )
};

export default LandingPage;