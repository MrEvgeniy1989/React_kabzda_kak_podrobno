import React, {useState} from 'react';
import {Accordion, AccordionPropsType} from './Accordion';
import {action} from '@storybook/addon-actions';
import Button from '@storybook/react/dist/ts3.9/demo/Button';
import {Story} from '@storybook/react';

export default {
    title: 'Accordion',
    component: Accordion,
};

const callback = action('accordion mode change event fired')


export const MenuCollapsedMode = () => <Accordion titleValue={'Menu'} onClick={callback} collapsed={true}/>
export const UsersUnCollapsedMode = () => <Accordion titleValue={'Users'} onClick={callback} collapsed={false}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={'Users'} onClick={()=>setValue(!value)} collapsed={value}/>

}