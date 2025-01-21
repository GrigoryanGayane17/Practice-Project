import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import homeJson from '../assets/JSONS/home.json'

function Home(props) {
    return (<div>
        <Header/>

        <div className={'container'}>
            <div className={'row'}>
                <div style={{
                    padding: '100px 50px', display: 'flex', justifyContent: 'center', alignItems: 'center',
                }} className={'col-lg-5 col-md-12 col-sm-12'}>
                    <div>
                        <h1 style={{fontSize: '80px', fontWeight: '800',color:'#1f2645'}}>{homeJson[0].sectionName}</h1>
                        <p style={{fontSize: "20px", marginTop: '25px'}}>
                            {homeJson[0].mainText} </p>
                        <button className={'home-section1-btn'}>{homeJson[0].link}</button>
                    </div>

                </div>
                <div style={{
                    padding: '100px 50px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                    zIndex: '200'
                }} className={'col-lg-7 col-md-12 col-sm-12'}>
                    <img className={'home-section1-img'}
                         src={'https://assets.nicepagecdn.com/d2cc3eaa/308685/images/df-min.jpg'}/>
                    <div className={'home-section1-absolute-div1'}></div>
                    <div className={'home-section1-absolute-div2'}></div>
                </div>
            </div>
        </div>

        <div className={'container-fluid home-section2'}>
            <div className={'row'}>
                <div style={{padding: '100px 30px'}} className={'col-12'}>
                    <h1 style={{fontWeight: '800', fontSize: '60px', textAlign: 'center'}}>{homeJson[1].sectionName}</h1>
                </div>
            </div>
            <div className={'row'}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    padding: '50px 30px'
                }}
                     className={'col-12'}>
                    <div className={'home-section2-div'}>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <img className={'home-section2-div-img'} style={{width: '70px', height: '70px'}}
                                 src={'https://assets.nicepagecdn.com/d2cc3eaa/308685/images/ec0be216.png'}/>
                        </div>
                        <h2 style={{textAlign: 'center', marginTop: '30px', color: '#1f2543'}}>{homeJson[1].square_divs.text_1}</h2>
                    </div>

                    <div className={'home-section2-div'}>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <img className={'home-section2-div-img'} style={{width: '70px', height: '70px'}}
                                 src={'https://assets.nicepagecdn.com/d2cc3eaa/308685/images/245a2f13.png'}/>
                        </div>
                        <h2 style={{textAlign: 'center', marginTop: '30px', color: '#1f2543'}}>{homeJson[1].square_divs.text_2}</h2>
                    </div>
                    <div className={'home-section2-div'}>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <img className={'home-section2-div-img'} style={{width: '70px', height: '70px'}}
                                 src={'https://assets.nicepagecdn.com/d2cc3eaa/308685/images/96972e44.png'}/>
                        </div>
                        <h2 style={{textAlign: 'center', marginTop: '30px', color: '#1f2543'}}>{homeJson[1].square_divs.text_3}</h2>
                    </div>

                    <div className={'home-section2-div'}>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <img className={'home-section2-div-img'} style={{width: '70px', height: '70px'}}
                                 src={'https://assets.nicepagecdn.com/d2cc3eaa/308685/images/0ae08100.png'}/>
                        </div>
                        <h2 style={{textAlign: 'center', marginTop: '30px', color: '#1f2543'}}>{homeJson[1].square_divs.text_4}</h2>
                    </div>
                </div>
            </div>

            <div className={'row'}>
                <div style={{padding: '100px 50px'}} className={'col-lg-6 col-md-12 col-sm-12'}>
                    <h1 style={{
                        color: 'white',
                        fontSize: '50px',
                        fontWeight: '800',
                        marginBottom: '15px'
                    }}>{homeJson[2].sectionName}</h1>
                    <p style={{color: 'white', fontSize: '20px'}}>{homeJson[2].under_text}</p>
                    <div>
                        <p style={{color: 'white', fontSize: '25px'}}>✔ {homeJson[2].correct_texts_col1.text_1}</p>
                        <p style={{color: 'white', fontSize: '25px'}}>✔ {homeJson[2].correct_texts_col1.text_2}</p>
                        <p style={{color: 'white', fontSize: '25px'}}>✔ {homeJson[2].correct_texts_col1.text_3}</p>
                    </div>
                </div>
                <div style={{padding: '100px 50px'}} className={'col-lg-6 col-md-12 col-sm-12'}>
                    <h2 style={{
                        color: 'white',
                        fontSize: '40px',
                        fontWeight: '500',
                        marginBottom: '15px',
                        lineHeight: '80px'
                    }}>{homeJson[2].text_col_2}</h2>
                </div>
            </div>
        </div>

        <div className={'container-fluid home-section3'}>
            <div className={'row'}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '0 50px 100px 50px',
                    position: 'relative'
                }} className={'col-12'}>
                    <img className={'home-section3-img'}
                         src={'https://assets.nicepagecdn.com/d2cc3eaa/308685/images/Untitled-1e.jpg'}/>
                    <div className={'home-section3-absolute-div1'}></div>
                    <div className={'home-section3-absolute-div2'}>
                        <h1 style={{fontSize: '40px', fontWeight: '700'}}>{homeJson[3].sectionName}</h1>
                        <p style={{fontSize: '20px'}}>
                            {homeJson[3].mainText}</p>
                        <button className={'home-section3-btn'}>{homeJson[3].button}</button>
                    </div>
                </div>
            </div>
        </div>


        <div className={'container'}>
            <div style={{padding: '100px 0 100px 0'}} className={'row'}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    position: 'relative',
                    height: '80vh',
                    padding: '20px'
                }}
                     className={'col-lg-4 col-md-6 col-sm-12'}>
                    <img style={{width: '100%', objectFit: 'cover'}}
                         src={'https://assets.nicepagecdn.com/d2cc3eaa/308685/images/business-executives-discussing-w.jpg'}/>
                    <div style={{position: 'absolute', bottom: '0', color: 'white', padding: '30px'}}>
                        <h2 style={{fontWeight: '700'}}>Need help right now?</h2>
                        <p style={{fontSize: '30px'}}>Call 123-456-4340 and press option 2 to speak with a counselor
                            24/7/365</p>
                        <a className={'home-section5-link'} href={'#'}>Crisis Services</a>
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', height: '80vh', padding: ' 20px '}}
                     className={'col-lg-4 col-md-6 col-sm-12'}>
                    <div style={{color: 'white'}}>
                        <img style={{width: '100%', height: '226px', objectFit: 'cover'}}
                             src={'https://assets.nicepagecdn.com/d2cc3eaa/308685/images/people-chairs-communicatingqq.jpg'}/>
                        <div style={{backgroundColor: '#1f2645', padding: '30px'}}>
                            <h2 style={{fontWeight: '500'}}>Just need someone to listen?</h2>
                            <p style={{fontSize: '25px'}}>Try a Peer Counselor! They're here to listen and support.</p>
                            <a className={'home-section5-link'} href={'#'}>Peer Counselors</a>

                        </div>
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', height: '80vh', padding: ' 20px '}}
                     className={'col-lg-4 col-md-12 col-sm-12'}>
                    <div>
                        <div style={{backgroundColor: '#e3c4b7', padding: '30px'}}>
                            <h2>Looking for a private space?</h2>
                            <p>We have tips and instructions on how to book private spaces on campus for virtual
                                appointments.</p>
                            <a style={{color: 'black', fontSize: '20px', fontWeight: '700'}} href={'#'}>Peer
                                Counselors</a>
                        </div>
                        <div style={{padding: '40px'}}>
                            <h2 style={{fontWeight: '700'}}>Group Therapy is back!</h2>
                            <p style={{fontSize: '20px'}}>The Counseling Center has a wide variety of services for
                                students, including powerful
                                group therapy</p>
                            <a style={{color: 'black', fontSize: '20px', fontWeight: '700'}} href={'#'}>Try Our
                                Groups</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={'container'}>
            <div className={'row'}>
                <div style={{
                    padding: '50px 0 100px 0',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                }} className={'col-lg-6 col-md-12 col-sm-12'}>
                    <img className={'home-section6-img'}
                         src={'https://assets.nicepagecdn.com/d2cc3eaa/308685/images/full-shot-group-people-therapy_2.jpg'}/>
                    <div className={'home-section6-absolute-div1'}></div>
                    <div className={'home-section6-absolute-div2'}></div>
                </div>
                <div style={{
                    padding: '50px',
                    display: 'flex',
                    alignItems: 'center',
                }} className={'col-lg-6 col-md-12 col-sm-12'}>
                    <div>
                        <h1 style={{fontSize: '45px', fontWeight: '700'}}>Psychology and Counselling Services</h1>
                        <p style={{fontSize: '20px', lineHeight: '40px'}}>Psychology and Counselling Services offer
                            professional support for mental health and emotional challenges. Through personalized
                            sessions, trained therapists help individuals manage stress, anxiety, depression, and life
                            transitions, promoting overall well-being and personal growth.</p>
                        <button className={'home-section3-btn'}>learn more</button>
                    </div>
                </div>
            </div>
        </div>

        <div className={'container-fluid'}>
            <div className={'row'}>
                <div style={{
                    padding: '100px',
                    backgroundImage: `url('https://assets.nicepagecdn.com/d2cc3eaa/308685/images/medium-shot-people-sitting-chairs43.jpg')`,
                    display: 'flex',
                    justifyContent: 'flex-end',
                    backgroundPosition: 'center'
                }} className={'col-12'}>
                    <div className={'home-section4-div'}>
                        <h1 style={{textAlign: 'center', fontSize: '40px', fontWeight: '500'}}>What is Group
                            Therapy?</h1>
                        <p style={{fontSize: '20px', textAlign: 'center', lineHeight: '40px'}}>
                            Group therapy is a supportive space where individuals share experiences and learn from each
                            other, guided by a trained therapist to promote healing and growth.</p>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <button className={'home-section3-btn'}>learn more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className={'container-fluid'}>
            <div style={{position: 'relative'}} className={'row'}>
                <div style={{padding: '100px 0', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                     className={'col-12'}>
                    <div className={'home-section7-div'}>
                        <div className={'home-section7-div-div'}>
                            <div style={{padding: '50px', width: '400px'}}>
                                <h1 style={{fontSize: '40px', fontWeight: '700'}}>Understanding group therapy</h1>
                            </div>
                            <div style={{padding: '50px', width: '500px'}}>

                                <p style={{fontSize: '20px', lineHeight: '40px'}}>Understanding group therapy involves
                                    recognizing it as a powerful and supportive form of therapy where individuals facing
                                    similar challenges come together to share their experiences, gain insights, and
                                    support one another. Led by a trained therapist, group therapy creates a safe and
                                    structured environment for personal growth.</p>
                                <button className={'home-section3-btn'}>learn more</button>
                            </div>
                        </div>

                        <div style={{padding: '0 50px 0 50px'}}>
                            <img style={{width: '100%'}}
                                 src={'https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/30e8f4ca27b75c6e84c868d2/srter-min.jpg'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer/>
    </div>);
}

export default Home;