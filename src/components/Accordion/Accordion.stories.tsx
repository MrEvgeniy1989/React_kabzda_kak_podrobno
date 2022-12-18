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
const onClickCallback = action('some item was clicked')


export const MenuCollapsedMode = () => <Accordion
    titleValue={'Menu'}
    onChange={callback}
    collapsed={true}
    items={[]}
    onClick={onClickCallback}
/>

export const UsersUnCollapsedMode = () => <Accordion
    titleValue={'Users'}
    onChange={callback}
    collapsed={false}
    items={[{title: 'Dimych', value: 1}, {title: 'Valera', value: 2}, {title: 'Artem', value: 3}, {title: 'Victor', value: 4}]}
    onClick={onClickCallback}
/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion
        titleValue={'Users'}
        onChange={() => setValue(!value)}
        collapsed={value}
        items={[{title: 'Dimych', value: 1}, {title: 'Valera', value: 2}, {title: 'Artem', value: 3}, {title: 'Victor', value: 4}]}
        onClick={(id)=>{alert(`user with ID ${id} should be happy`)}}
    />
}