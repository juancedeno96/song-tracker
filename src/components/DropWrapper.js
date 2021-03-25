import React from "react";
import { useDrop } from "react-dnd";
import ITEM_TYPE from '../data/types'
import {statuses} from '../data'

const DropWrapper =({onDrop, children, status})=>{
    const [{isOver}, drop] =useDrop({
        accept: ITEM_TYPE,
        canDrop: (item, monitor)=>{
            const itemIndex =statuses.findIndex(si=>si.status===item.status)
            const statusIndex = status
        }
    })
}
