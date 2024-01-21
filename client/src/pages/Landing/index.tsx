import SectionContainer from '../../components/SectionContainer';
import ContentContainer from '../../components/ContentContainer';

import LandingHeroImg from '../../assets/landing-hero.svg';

import './assets/style.css';

const LandingPage = () => {
    return (
        <SectionContainer className="landing-hero">
            <ContentContainer className='gray-bg'>
                <div className="flex hero justify-center">
                    <div className="img-container h-full">
                        <img src={LandingHeroImg} className="h-full" alt="" />
                        </div>
                    <div className="text-container flex items-center text-right">
                        <h1>JOB HUNTING SUCKS.</h1>
                    </div>
                </div>
            </ContentContainer>
        </SectionContainer>
    )
};

export default LandingPage;