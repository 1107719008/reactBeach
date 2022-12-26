import { Link } from 'react-router-dom';

export default function Island() {
    return (
        <div className="islandbox">
            <Link to={`/category/penghu`}
            style={{ color:"black"}}
            >
                <div className="islandcard"

                >
                    <img className='island-one-background'
                        src="/image/punghue.png"
                        alt='' />
                    <div className="island-font">澎湖</div>
                </div>
            </Link>
            <Link to={`/category/little`}
            style={{ color:"black"}}
            >
                <div className="islandcard">
                    <img className='island-one-background'
                        src="/image/little.png"
                        alt='' />
                    <div className="island-font">小琉球</div>
                </div>
            </Link>
            <Link to={`/category/greenIsland`}
            style={{ color:"black"}}
            >
                <div className="islandcard">
                    <img className='island-one-background'
                        src="/image/greenisland.png"
                        alt='' />
                    <div className="island-font">綠島</div>
                </div>
            </Link>
            <Link to={`/category/lanyu`}
            style={{ color:"black"}}
            >
                <div className="islandcard">
                    <img className='island-one-background'
                        src="/image/blueisland.png"
                        alt='' />
                    <div className="island-font">蘭嶼</div>
                </div>
            </Link>
        </div>
    
        
    )
}