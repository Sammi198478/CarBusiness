import {Col, Row} from 'react-bootstrap'

const bestSellingItems = [
    {
        img:"img/Bitmap1.png",
        name:"Subaru",
        price:"from $40k"
    },
    {
        img:"img/Bitmap2.png",
        name:"Volkswagen",
        price:"from $15k"
    },
    {
        img:"img/Bitmap3.png",
        name:"Toyota",
        price:"from $27k"
    },
    {
        img:"img/logo4.png",
        name:"Mercedes-Benz",
        price:"from $60k"
    },
    {
        img:"img/Bitmap5.png",
        name:"Hyundai",
        price:"from $30k"
    },
    {
        img:"img/logo6.png",
        name:"Infiniti",
        price:"from $54k"
    },
]

const BestSelling = ()=>{
    return(
        <>
        <div className="container" style={{paddingTop:"86px"}}>
            <h1 className="text-center fw-bold mb-5">Explore best selling car makes</h1>
            <Row className='d-flex justify-content-center'style={{paddingTop:"50px"}}>
              {bestSellingItems.map(
                ({img, name, price}) =>(
                    <Col  md={4} className='SellingCard'>
                        <div className='vw-add'>
                            <img src={img} alt="" className='vw-logo w-[100px]'/>
                            <div>\
                                <div className='vw-text'>{name}</div>
                                <div className='vw-price'>{price}</div>
                            </div>
                        </div>

                    
                    </Col>

                )
              ) }  
            </Row>

        </div>
        
        </>
    )
}

export default BestSelling ;