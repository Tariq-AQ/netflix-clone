import faqsData from '../fixtures/faqs.json'
import React from 'react'
import {Accordion} from '../components'

export function FaqsContainer(){
    return(
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            {faqsData.map(item=>
                <Accordion.Item>
                    <Accordion.Header key={item.id}>{item.header}</Accordion.Header>
                    <Accordion.Body key={item.id}>{item.body}</Accordion.Body>
                </Accordion.Item>
                )}
            
        
        </Accordion>
    )
}
  