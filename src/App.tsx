import React from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import {OnOff} from './components/OnOff/OnOff';
import {Rating} from './components/Rating/Rating';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';

function App() {
    return (
        <div>
            <Accordion titleValue={'Menu'} collapsed={true}/>
            <Accordion titleValue={'Users'}collapsed={false}/>
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>

            {/*<OnOff onOffValue={true}/>*/}
            {/*<OnOff onOffValue={false}/>*/}
            <OnOff/>
            <OnOff/>

            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledAccordion titleValue={'Users'}/>

            <UncontrolledRating/>
        </div>
    );
}

type PageTitlePropsTitle = {
    title: string;
}

function PageTitle(props: PageTitlePropsTitle) {
    console.log('PageTitle rendering')
    return <h1>{props.title}</h1>
}

export default App;
