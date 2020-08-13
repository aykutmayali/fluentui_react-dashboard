import React from 'react';
import {Nav, initializeIcons} from '@fluentui/react';

const links = [
    {
        links:[
            {
                name:'Dashboard',
                url:'/',
                key:'key1',
                iconProps:{
                    iconName:'News',
                    styles: {
                        root: {
                            fontSize:20,
                            color: '#106ebe',
                        }
                    }
                }
            },
            {
                name:'Settings',
                url:'/',
                key:'key2',
                iconProps:{
                    iconName:'PlayerSettings',
                    styles: {
                        root: {
                            fontSize:20,
                            color: '#106ebe',
                        }
                    }
                }
            },
            {
                name:'Transfer',
                url:'/',
                key:'key3',
                iconProps:{
                    iconName:'SwitcherStartEnd',
                    styles: {
                        root: {
                            fontSize:20,
                            color: '#106ebe',
                        }
                    }
                }
            },
            {
                name:'Stats',
                url:'/',
                key:'key4',
                iconProps:{
                    iconName:'StackedLineChart',
                    styles: {
                        root: {
                            fontSize:20,
                            color: '#106ebe',
                        }
                    }
                }
            },
            {
                name:'Beacon',
                url:'/',
                key:'key5',
                iconProps:{
                    iconName:'BeaconSettings',
                    styles: {
                        root: {
                            fontSize:20,
                            color: '#106ebe',
                        }
                    }
                }
            },
            {
                name:'Gateway',
                url:'/',
                key:'key6',
                iconProps:{
                    iconName:'GatewaySettings',
                    styles: {
                        root: {
                            fontSize:20,
                            color: '#106ebe',
                        }
                    }
                }
            }
        ]
    }
]

const navigationStyles ={
    root:{
        height:'100vh',
        boxSizing: 'border-box',
        border: '1px solid #eee',
        overflowY: 'auto',
        paddingTop:'10vh',
    }
}

const Navigation = () => {
    initializeIcons();
    return (
        <Nav 
            groups={links}
            selectedKey="key1"
            styles={navigationStyles}
        />
        )
}

export default Navigation;

