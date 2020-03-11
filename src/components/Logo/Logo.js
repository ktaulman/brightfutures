import React,{useState} from 'react';
export default function Logo(){
    return( 
        <svg width="243px" height="35px" viewBox="0 0 243 35" version="1.1" xmlns="http://www.w3.org/2000/svg">

            <defs>
                <filter x="-4.9%" y="-31.6%" width="109.7%" height="163.2%" filterUnits="objectBoundingBox" id="filter-1">
                    <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                    <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                    <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix>
                    <feMerge>
                        <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                        <feMergeNode in="SourceGraphic"></feMergeNode>
                    </feMerge>
                </filter>
            </defs>
            <g id="Iphone" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" font-family="Roboto-Light, Roboto" font-weight="300">
                <g id="Home" transform="translate(-15.000000, -15.000000)">
                    <g id="Logo-Icon-+-Title" filter="url(#filter-1)" transform="translate(15.000000, 12.000000)">
                        <text id="dance-company" fill="#AC6F62" font-size="16">
                            <tspan x="131" y="34">dance company</tspan>
                        </text>
                        <text id="ALWAYS-WANTED-TO" fill="#62AC9A" font-size="18" letter-spacing="0.15">
                            <tspan x="0" y="17">ALWAYS WANTED TO</tspan>
                        </text>
                    </g>
                </g>
            </g>
        </svg>
    )
}


