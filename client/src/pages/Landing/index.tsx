import SectionContainer from '../../components/SectionContainer';
import ContentContainer from '../../components/ContentContainer';

import LandingHeroImg from '../../assets/landing-hero.svg';

import './assets/style.css';

const LandingPage = () => {
    return (
        <SectionContainer className="landing">
            <>
                <ContentContainer>
                    <div className="flex flex-wrap hero justify-center">
                        <div className="img-container h-full">
                            <img src={LandingHeroImg} className="h-full w-full" alt="" />
                        </div>
                        <div className="text-container flex items-center text-right">
                            <h1>JOB HUNTING SUCKS.</h1>
                        </div>
                    </div>
                </ContentContainer>
                <ContentContainer className='text'>
                    <div className="text-container">
                        <p> Are you stuck in an endless cycle of customizing every resume to every job posting just to be ghosted?</p> 
                        <p>And what can you do? How can you improve if you’re just sending applications into the void?</p> 
                        <p> Use AppTrack to find and fill the gaps in your background and get the job of your dreams.</p>
                    </div>
                </ContentContainer>
            </>
        </SectionContainer>
    )
};

export default LandingPage;