import { Link } from 'react-router-dom'

export function ArticleContentUltra() {

    return (
        <>
        <h1 className='mb-5 border-bottom'>Join ULTRA today!</h1>
        <p className='mb-5'><span className='border border-danger p-3'>This article is restricted to <Link to='/ultra'>MagiStore ULTRA</Link> members.</span></p>
        <p><Link to='/ultra'>Sign up</Link> today for access to this article and all of our ULTRA Premium Content.</p>
        <p className='lead'>ULTRA members also have access to these exciting benefits:</p>
                    <ul className='lh-lg'>
                        <li>Access to <Link to='/content'>exclusive articles</Link> written by the game's top professional players.</li>
                        <li>Free shipping on all <Link to='/store'>orders</Link>.</li>
                        <li>10% off entry fees to all live <Link to='/events'>events</Link>.</li>
                        <li>Priority registration for our Premier Invitational Events.</li>
                        <li>2% extra on any buylist order.</li>
                    </ul>
                    <p>Access to ULTRA starts at just $6.99 per month (billed annually).</p>
        </>
        
    )
}