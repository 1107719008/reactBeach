import { Card,Row,Col } from "antd"
import { Link } from 'react-router-dom';
import IntroItem from './IntroItem'

export default function IntroList({ introitem }) {
    return (
        <Card
            hoverable
            className='intro-card'
            cover={<img alt={introitem.name} src={introitem.cover} style={{objectFit: 'cover', height:"15rem", borderRadius:'20px 20px 0 0 ',}} />}
        >
            <Link to={`/introitems/${introitem.id}`}></Link>
            <div className='intro-colum'>
                <h3 className="intro-category-name">{introitem.category}</h3>
                <span className="intro-name">{introitem.name}</span>
            </div>          
        </Card>
    //     <Row gutter={[32, 32]}>
    //     {introitems.map(introitem => (
    //         <Col 
    //           key={introitem.id} 
    //           sm={{ span: 24 }} 
    //           lg={{ span: 12 }}
    //           xl={{ span: 12 }}
    //           xxl={{ span: 12 }}
    //         >
    //           <IntroItem introitem={introitem}/>
    //         </Col>
    //       ))}
    //   </Row>
    );
}