import faqsData from '../fixtures/faqs.json'
import React from 'react'
import {Accordion} from '../components'
import OptForm from './opt-form'

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
            
        <OptForm>
            <OptForm.Input placeholder='Email address'/>
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Break/>
            <OptForm.Text>Ready to watch? Enter your email to create or restart your membership</OptForm.Text>
        </OptForm>
        </Accordion>
    )
}
  