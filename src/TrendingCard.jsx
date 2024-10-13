import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'

const Trendings = [
    {
        img: "img/Img.png",
        title: "Used 2019 Audi S4 Premium Plus",
        miles: "11,475 Miles",
        transmission: "AWD",
        cylinders: "4-Cylinder Turbo",
        price: "$41,400"
    },
    {
        img: "img/Img2.png",
        title: "2013 Subaru Forester Premium Plus",
        miles: "40,475 Miles",
        transmission: "AWD",
        cylinders: "4-Cylinder Turbo",
        price: "$22,500"
    },
    {
        img: "img/Img3.png",
        title: "Used 2010 BMW X3 Sport Package",
        miles: "20,850 Miles",
        transmission: "RWD",
        cylinders: "4-Cylinder Turbo",
        price: "$39,200"
    }
]

export const Trending = () => {
    return (
        <>
            <div className='container'>
                <h1 className='text-center fw-bold HeadingMargin'>Trending near you</h1>
                <Row className="d-flex justify-content-center">
                    {Trendings.map(
                        ({ img, title, miles, transmission, cylinders, price }, index) => (
                            <Col key={index}>
                                <Card style={{ width: "25rem", border: "none" }}>
                                    <Card.Img variant='top' src={img} />
                                    <Card.Body>
                                        <Card.Title>{title}</Card.Title>
                                        <Card.Text className='opacity-500 CardText'>
                                            {miles}
                                        </Card.Text>
                                        <Card.Text className='opacity-500 CardText'>
                                            {cylinders} . {transmission}
                                        </Card.Text>
                                        <div className="d-flex flex-row gap-3">
                                            <Button variant="primary" className="fw-bold priceBtn">{price}</Button>
                                            <Button variant="secondary" className="fw-bold bestSeller">Bestseller</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    )}
                </Row>
            </div>
        </>
    )
}

export default Trending


