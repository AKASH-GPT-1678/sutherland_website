"use client";
import React from 'react'
import { sampleCards } from '../components/TranformativeStories';
import ServicePage from '../components/servicePage'
import TransformativeStories from '../components/TranformativeStories';


const page = () => {
    return (
    <div>
        <TransformativeStories cards={sampleCards}/>
    </div>
    )
}

export default page
