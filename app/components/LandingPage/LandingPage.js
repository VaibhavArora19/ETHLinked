import classes from './LandingPage.module.css';

const LandingPage = () => {
    return <div className={classes.bgHero}>
    <div className= {classes.intro}>
    <h1 className= {classes.heading}>Welcome to Ethlinked 👋</h1>
    <p className= {classes.bioData}>Ethlinked is a decentralized web app built on Ethereum Network ✨</p>
    </div>
    </div>
};

export default LandingPage;

