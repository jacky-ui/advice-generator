import './AdviceCard.scss';
import desktopDivider from '../../assets/images/pattern-divider-desktop.svg';
import mobileDivider from '../../assets/images/pattern-divider-mobile.svg';

function AdviceCard() {
    return(
        <section className='card'>
            <h2 className='card__header'>Advice #117</h2>
            <p className='card__text'></p>
            <img 
                src={desktopDivider}
                alt=''
            />
        </section>
    )
};

export default AdviceCard;