import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri'; 
import * as GiIcons from 'react-icons/gi'; 

export const sideBarData =[
    {
        title: 'Home',
        path: '/',
        icon: 'RiIcons.RiHome2Fill',
        cName: 'nav-text'
    },
    {
        title: 'Villains',
        path: '/villains',
        icon: 'GiIcons.GiAnimalSkull',
        cName: 'nav-text'
    },
    {
        title: 'Heroes',
        path: '/heroes',
        icon: 'GiIcons.GiBatMask',
        cName: 'nav-text'
    },
    {
        title: 'PossibleThreats',
        path: '/possiblethreats',
        icon: 'GiIcons.GiBrute',
        cName: 'nav-text'
    },
    {
        title: 'Equipment',
        path: '/equipment',
        icon: 'GiIcons.GiApc',
        cName: 'nav-text'
    },
]