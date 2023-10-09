import React from 'react'
import Map from '../Map/Map'
import { Button, Collapse } from 'reactstrap'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Restaurants from './Restaurants';
import Academic from './Academic';
import Banks from './Banks'
import Administrative from './Administrative';
import Hostel from './Hostel';
import Sporting from './Sporting';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
  } from 'reactstrap';
import "./Menu.scss"

const Menu = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [open, setOpen] = useState('1');
    const toggle = (id) => {
      if (open === id) {
        setOpen();
      } else {
        setOpen(id);
      }
    };

    const [random, setRandom] = useState('')
    const handleClick = (event) => {
      setRandom(event.target.id)
    }

    var values = random.split(",")
    var latitude = parseFloat(values[0])
    var longitude = parseFloat(values[1])


  return (
    <div className='menu'>
        <div className="side-menu">
            <div className="heading">
                <Button className='button' onClick = {() =>{
                    setIsOpen(!isOpen)
                }} >
                    =
                </Button>
            </div>
                <Collapse isOpen={isOpen} horizontal className='slider'>
                    <div className="location-list">
                    <Accordion open={open} toggle={toggle}>
                     <AccordionItem>
                          <AccordionHeader targetId="1"><span className="heading">
                              Restaurants
                            </span>
                            </AccordionHeader>
                          <AccordionBody accordionId="1">
                            {
                              Restaurants.map(
                                restaurant =>(
                                 <div className="item" onClick={handleClick} id={restaurant.location}>
                                     {restaurant.name}
                                 </div>
                                )
                              )
                            }
                        </AccordionBody>
                        </AccordionItem>
                        <AccordionItem>
                        <AccordionHeader targetId="2"><span className="heading">
                              Administrative Buildings
                            </span></AccordionHeader>
                        <AccordionBody accordionId="2">
                                administrative buildings
                             </AccordionBody>
                         </AccordionItem>
                          <AccordionItem>
                           <AccordionHeader targetId="3"><span className="heading">
                              Academic Buildings
                            </span></AccordionHeader>
                           <AccordionBody accordionId="3">
                             <strong>This is the third item&#39;s accordion body.</strong>
                             You can modify any of this with custom CSS or overriding our default
                             variables. It&#39;s also worth noting that just about any HTML can
                                go within the <code>.accordion-body</code>, though the transition
                             does limit overflow.
                              </AccordionBody>
                         </AccordionItem>
                          <AccordionItem>
                           <AccordionHeader targetId="4"><span className="heading">
                              Banks
                            </span></AccordionHeader>
                           <AccordionBody accordionId="4">
                             <strong>This is the third item&#39;s accordion body.</strong>
                             You can modify any of this with custom CSS or overriding our default
                             variables. It&#39;s also worth noting that just about any HTML can
                                go within the <code>.accordion-body</code>, though the transition
                             does limit overflow.
                              </AccordionBody>
                         </AccordionItem>
                          <AccordionItem>
                           <AccordionHeader targetId="5"><span className="heading">
                              Sporting Areas
                            </span></AccordionHeader>
                           <AccordionBody accordionId="5">
                             <strong>This is the third item&#39;s accordion body.</strong>
                             You can modify any of this with custom CSS or overriding our default
                             variables. It&#39;s also worth noting that just about any HTML can
                                go within the <code>.accordion-body</code>, though the transition
                             does limit overflow.
                              </AccordionBody>
                         </AccordionItem>
                          <AccordionItem>
                           <AccordionHeader targetId="6"><span className="heading">
                              Hostels
                            </span></AccordionHeader>
                           <AccordionBody accordionId="6">
                             <strong>This is the third item&#39;s accordion body.</strong>
                             You can modify any of this with custom CSS or overriding our default
                             variables. It&#39;s also worth noting that just about any HTML can
                                go within the <code>.accordion-body</code>, though the transition
                             does limit overflow.
                              </AccordionBody>
                         </AccordionItem>
                         </Accordion>
                    </div>
                </Collapse>
        </div>
        <Map latitude={latitude} longitude={longitude} />
        
    </div>
  )
}

export default Menu