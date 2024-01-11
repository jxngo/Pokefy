import React from 'react';
import smallJohnny from "../assets/images/johnny-profile-small.png"
import smallRyan from "../assets/images/ryan-profile-small.png"
import smallJohnnycolor from "../assets/images/johnny-profile-small-color.png"
import smallRyancolor from "../assets/images/ryan-profile-small-color.png"
import largeJohnny from "../assets/images/johnny-profile-large.png"
import largeRyan from "../assets/images/ryan-profile-large.png"

function About () {
    return (
        <div>
            <section className="aboutHeader">
                <h1>MEET THE TEAM BEHIND POKIFY</h1>
                <h2>A two man army of friends that came together to create a fun project for all music and Pokemon lovers. Pokify’s main purpose is to showcase our skills and test our knowledge on front and back end development. Click on the icons to learn more about the two friends behind the development and design of Pokify.</h2>
            </section>

            <section className='smallProfilediv'>
                <div className='smallProfile greyimg'>
                    <img src={smallJohnnycolor} alt="small profile picture of Johnny Ngo"></img>
                    <h5>Johnny Ngo</h5>
                    <div className='socialIcons'></div>
                </div>

                <div className='smallProfile greyimg'>
                    <img src={smallRyancolor} alt="small profile picture of Johnny Ngo"></img>
                    <h5>Ryan Tran</h5>
                    <div className='socialIcons'></div>
                </div>

            </section>

            <section className='aboutSection'>
                <div className='aboutLarge'>
                    <img src={largeJohnny} alt="large profile picture of Johnny Ngo"></img>
                    <h1>Johnny Ngo</h1>
                    <h2>Full Stack Developer</h2>
                </div>
                <div className='aboutText'>
                    <h2>MEET JOHNNY NGO</h2>
                    <p></p>
                </div>
            </section>
        </div>
    )
}

export default About