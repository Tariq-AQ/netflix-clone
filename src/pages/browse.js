import React from "react";
import { BrowseContainer } from "../containers/browse";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import { useContent } from "../hooks";
import selectionMap from "../utils/selection-map";


export default function Browse(){
    const {series}= useContent('series')
    const {films}= useContent('films')
    const slides = selectionMap({series, films})

    console.log(slides)

    return <BrowseContainer slides={slides} />
}