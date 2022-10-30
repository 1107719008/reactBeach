import { Link } from 'react-router-dom';

export default function Island() {
    return (
        <div className="islandbox">
            <Link to={`/category/澎湖`}
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
            <Link to={`/category/小琉球`}
            style={{ color:"black"}}
            >
                <div className="islandcard">
                    <img className='island-one-background'
                        src="/image/little.png"
                        alt='' />
                    <div className="island-font">小琉球</div>
                </div>
            </Link>
            <Link to={`/category/綠島`}
            style={{ color:"black"}}
            >
                <div className="islandcard">
                    <img className='island-one-background'
                        src="/image/greenisland.png"
                        alt='' />
                    <div className="island-font">綠島</div>
                </div>
            </Link>
            <Link to={`/category/蘭嶼`}
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