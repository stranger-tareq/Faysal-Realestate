/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

export default function Logo({ className = "h-12", light = false }: LogoProps) {
  const primaryGold = "#c7a14e";
  const darkNavy = "#111a3d";
  
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
      >
        {/* Navy Towers */}
        <path
          d="M90 30L115 50V100L90 85V30Z"
          fill={darkNavy}
          stroke={primaryGold}
          strokeWidth="1"
        />
        <path
          d="M70 60L85 75V115L70 105V60Z"
          fill={darkNavy}
          stroke={primaryGold}
          strokeWidth="1"
        />
        
        {/* Golden Outlines of supplementary buildings */}
        <path
          d="M125 65V120L135 115V70L125 65Z"
          fill="none"
          stroke={primaryGold}
          strokeWidth="2"
        />
        <path
          d="M140 85V130L145 128V88L140 85Z"
          fill="none"
          stroke={primaryGold}
          strokeWidth="1.5"
        />

        {/* The House Roof */}
        <path
          d="M60 125L100 95L140 125L145 130L55 130L60 125Z"
          fill="white"
          stroke={darkNavy}
          strokeWidth="1"
        />
        <path
          d="M60 125L100 95L140 125"
          stroke={primaryGold}
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Window */}
        <rect x="94" y="115" width="5" height="5" fill={primaryGold} />
        <rect x="101" y="115" width="5" height="5" fill={primaryGold} />
        <rect x="94" y="122" width="5" height="5" fill={primaryGold} />
        <rect x="101" y="122" width="5" height="5" fill={primaryGold} />

        {/* Swoosh */}
        <path
          d="M40 145C80 135 120 165 160 145"
          stroke={primaryGold}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M45 150C85 140 125 170 165 150"
          stroke={darkNavy}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      
      <div className="flex flex-col">
        <span className={`font-serif font-bold text-3xl tracking-tight leading-none ${light ? 'text-white' : 'text-zinc-900'}`} style={{ color: light ? 'white' : primaryGold }}>
          FAYSAL
        </span>
        <span className={`text-[12px] font-bold tracking-[0.35em] uppercase ${light ? 'text-zinc-300' : 'text-zinc-500'}`}>
          REAL ESTATE
        </span>
      </div>
    </div>
  );
}
