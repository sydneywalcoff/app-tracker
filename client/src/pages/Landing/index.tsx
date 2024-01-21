import SectionContainer from '../../components/SectionContainer';
import ContentContainer from '../../components/ContentContainer';

import LandingHeroImg from '../../assets/landing-hero.svg';
import ghLogo from '../../assets/github-mark.svg';

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
                <ContentContainer className='text rounded'>
                    <div className="text-container">
                        <p> Are you stuck in an endless cycle of customizing every resume to every job posting just to be ghosted?</p> 
                        <p>And what can you do? How can you improve if you’re just sending applications into the void?</p> 
                        <p>Use AppTrack to find and fill the gaps in your background and get the job of your dreams.</p>
                    </div>
                </ContentContainer>
                <ContentContainer className="list">
                    <>
                        <h2>AppTrack was made to make job tracking <u>easy</u>.</h2>
                        <ul>
                            <li>Document what the job posting and details are to prepare yourself better in interviews.</li>
                            <li>Add notes specific to each application before and during interviews.</li>
                            <li>Use prepared questions in interviews to gain pivotal insights.</li>
                            <li>Keep relevant applications at the top of your mind by filtering out rejected apps.</li>
                            <li>Search function allows you to quickly find applications.</li>
                        </ul>
                    </>
                </ContentContainer>
                <ContentContainer className="repo-link flex items-center justify-end">
                    <>
                        <p>Wanna check <br/>under the hood?</p>
                        <a href="https://github.com/sydneywalcoff/app-tracker"><img src={ghLogo} alt="github logo" className='gh-logo' /></a>
                    </>
                </ContentContainer>
            </>
        </SectionContainer>
    )
};

export default LandingPage;