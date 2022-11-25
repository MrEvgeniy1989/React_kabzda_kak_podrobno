import React, {useState} from 'react';

type UncontrolledAccordionPropsType = {
    titleValue: string;
    // collapsed: boolean;
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {

    const [collapsed, setCollapsed] = useState<boolean>(false)

    const callBackHandler = () => {
      return setCollapsed(!collapsed)
    }

    return (
        <div>
            <AccordionTitle title={props.titleValue} callBack={callBackHandler}/>
            {!collapsed && <AccordionBody/>}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string;
    callBack: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.callBack}>-- {props.title} --</h3>
    );
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}