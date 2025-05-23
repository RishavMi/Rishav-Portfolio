import { HeroContainer, HeroBg, HeroInnerContainer, HeroLeftContainer, Title, TextLoop, Span, SubTitle, HeroRightContainer, Img } from './BannerStyles';
import { Bio } from '../../Data/DataConstants';
import HeroBgAnimation from '../HeroBgAnimation';
import Typewriter from 'typewriter-effect';
import Avatar from "../../assets/Avatar.jpg"

const Banner = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer>
                    <HeroLeftContainer id="Left">
                        <Title>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        {/* <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton> */}
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">
                        <Img src={Avatar} alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default Banner