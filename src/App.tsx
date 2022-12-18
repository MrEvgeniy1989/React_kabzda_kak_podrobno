import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {UncontrolledOnOff} from './components/UncontrolledOnOff/UncontrolledOnOff';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import {OnOff} from './components/OnOff/OnOff';


function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [onOffValue, setOnOffValue] = useState<boolean>(false)

    return (
        <div className={"App"}>
            {/*<Accordion titleValue={'Menu'} collapsed={true}/>*/}
            {/*<Accordion titleValue={'Users'}collapsed={false}/>*/}
            {/*Article 2*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}

            {/*/!*<UncontrolledOnOff onOffValue={true}/>*!/*/}
            {/*/!*<UncontrolledOnOff onOffValue={false}/>*!/*/}
            {/*<UncontrolledOnOff/>*/}
            {/*<UncontrolledOnOff/>*/}
            {/*<UncontrolledAccordion titleValue={'Menu'}/>*/}
            {/*<UncontrolledRating/>*/}
            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/*<UncontrolledRating/>*/}
            <Accordion titleValue={'Menu'} collapsed={accordionCollapsed} onChange={setAccordionCollapsed} />
            <UncontrolledOnOff onChange={setOnOffValue}/> {onOffValue.toString()}
            <OnOff value={onOffValue} onClick={setOnOffValue}/>
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
