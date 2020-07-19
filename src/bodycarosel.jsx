
import React from 'react';
import {Carousel} from 'react-bootstrap'
import './App.css';
import map1 from './assets/image/map1.jpg'
import map2 from './assets/image/map2.jpg';
import map3 from './assets/image/map3.jpg';
import CardDisplay from './cardDisplay';
import {Row,Col} from 'react-bootstrap';


class BodyCarosoul extends React.Component{
    constructor(props){
       super(props)
    }

    ControlledCarousel=()=> {
    
        return (
            <Carousel>
            <Carousel.Item>
              <img
                className=" carosle-display"
                src={map1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carosle-display "
                src={map2}
                alt="Third slide"
              />
          
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carosle-display "
                src={map3}
                alt="Third slide"
              />
          
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        );
      }
    render(){
        return(
           <div>
               {this.ControlledCarousel()}
               <div className='mt-4'>
                 <Row>
               <CardDisplay></CardDisplay>
               </Row>
               </div>
           </div>        )
    }
}



  

  export default BodyCarosoul;