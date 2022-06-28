import facebook from './icons/facebook.png'
import github from './icons/github.png'
import twitter from './icons/twitter.png'


export default function Footer(){
    return (
        <div className='footer'>
            <div className='footer--icons'>
                <img src={facebook} className='icon'/><img src={twitter} className='icon'/><img src={github} className='icon'/>
            </div>
            <h4>Copyright © Your Website 2022</h4>
        </div>
    )
}