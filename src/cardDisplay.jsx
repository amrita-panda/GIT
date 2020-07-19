import React from 'react';
import carddata from './card';
import {Card,Col} from 'react-bootstrap';

class CardDisplay extends React.Component{
    constructor(){
        super();
    }
    render(){
        console.log(carddata)
        return(
           carddata.map((ele)=>{
               return(  
                <Col><Card style={{ width: '18rem',height:'300px' }}>
                <Card.Img variant="top" src={ele.img} />
                <Card.Body>
                  <Card.Title>{ele.name}</Card.Title>
                  <Card.Text>
                    {ele.desc}
                  </Card.Text>
                </Card.Body>
                </Card>
                </Col>
               )
           }) 
               

           

        )
    }
}
export default CardDisplay;