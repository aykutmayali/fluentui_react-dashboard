import React from 'react';
import {DetailsList} from '@fluentui/react';
import {mergeStyleSets} from 'office-ui-fabric-react/lib/Styling';
import 'office-ui-fabric-react/dist/css/fabric.css';

const operations =[
    {
        from:'0000 0210 7529 4751 8475',
        to:'0000 0214 7458 8569 8547',
        amount: '$1 254',
        date: '20-05-2020',
    },
    {
        from:'0000 0210 7529 4751 8475',
        to:'0000 0214 7458 8569 8547',
        amount: '$8 254',
        date: '20-05-2020',
    },
    {
        from:'0000 0210 7529 4751 8475',
        to:'0000 0214 7458 8569 8547',
        amount: '$9 254',
        date: '20-05-2020',
    },
    {
        from:'0000 0210 7529 4751 8475',
        to:'0000 0214 7458 8569 8547',
        amount: '$1 254',
        date: '28-05-2020',
    },
    {
        from:'0000 0210 7529 4751 8475',
        to:'0000 0214 7458 8569 8547',
        amount: '$6 254',
        date: '11-05-2020',
    }
]

const columns=[
    {key: 'column1',name:'From',fieldName: 'from',minWidth: 100, maxWidth:'300',isResizable: true},
    {key: 'column2',name:'To',fieldName: 'to',minWidth: 100, maxWidth:'300',isResizable: true},
    {key: 'column3',name:'Amount',fieldName: 'amount',minWidth: 100, maxWidth:'300',isResizable: true},
    {key: 'column4',name:'Date',fieldName: 'date',minWidth: 100, maxWidth:'300',isResizable: true},
]

const classNames= mergeStyleSets({
    table:{
        margin: 'auto',
    }
});

const OperationsTable =() =>{
    return(
        <div data-is-scrollable={true}>
            <div className={'s-Grid-col ms-sm9 ms-xl9 ${classNames.table}'}>
                <DetailsList 
                    items={operations}
                    columns={columns}
                    selectionMode={0}
                />
            </div>
        </div>
    );
};

export default OperationsTable;