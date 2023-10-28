"use client";

import React, { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../../template";

export const Bus: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M8.5 19V21.2C8.5 21.48 8.5 21.62 8.4455 21.727C8.39757 21.8211 8.32108 21.8976 8.227 21.9455C8.12004 22 7.98003 22 7.7 22H5.8C5.51997 22 5.37996 22 5.273 21.9455C5.17892 21.8976 5.10243 21.8211 5.0545 21.727C5 21.62 5 21.48 5 21.2V19M19 19V21.2C19 21.48 19 21.62 18.9455 21.727C18.8976 21.8211 18.8211 21.8976 18.727 21.9455C18.62 22 18.48 22 18.2 22H16.3C16.02 22 15.88 22 15.773 21.9455C15.6789 21.8976 15.6024 21.8211 15.5545 21.727C15.5 21.62 15.5 21.48 15.5 21.2V19M3 12H21M3 5.5H21M6.5 15.5H8M16 15.5H17.5M7.8 19H16.2C17.8802 19 18.7202 19 19.362 18.673C19.9265 18.3854 20.3854 17.9265 20.673 17.362C21 16.7202 21 15.8802 21 14.2V6.8C21 5.11984 21 4.27976 20.673 3.63803C20.3854 3.07354 19.9265 2.6146 19.362 2.32698C18.7202 2 17.8802 2 16.2 2H7.8C6.11984 2 5.27976 2 4.63803 2.32698C4.07354 2.6146 3.6146 3.07354 3.32698 3.63803C3 4.27976 3 5.11984 3 6.8V14.2C3 15.8802 3 16.7202 3.32698 17.362C3.6146 17.9265 4.07354 18.3854 4.63803 18.673C5.27976 19 6.11984 19 7.8 19Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const Compass01: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12H20M12 22C6.47715 22 2 17.5228 2 12M12 22V20M2 12C2 6.47715 6.47715 2 12 2M2 12H4M12 2V4M19.0711 19.0711L17.6569 17.6569M6.34315 6.34315L4.92893 4.92893M17.6569 6.34315L19.0711 4.92893M4.92893 19.0711L6.34315 17.6569M8 12L10.5 10.5L12 8L13.5 10.5L16 12L13.5 13.5L12 16L10.5 13.5L8 12Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const Compass02: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M22 12H20M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M19.0711 19.0711L17.6569 17.6569M4 12H2M2 12C2 17.5228 6.47715 22 12 22M2 12C2 6.47715 6.47715 2 12 2M6.34315 6.34315L4.92893 4.92893M12 4V2M17.6569 6.34315L19.0711 4.92893M12 22V20M4.92893 19.0711L6.34315 17.6569M12 8L16 12L12 16L8 12L12 8Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const Compass03: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        {...pathProps}
      />
      <Path
        d="M14.7221 8.26596C15.2107 8.10312 15.4549 8.02169 15.6174 8.07962C15.7587 8.13003 15.87 8.24127 15.9204 8.38263C15.9783 8.54507 15.8969 8.78935 15.734 9.27789L14.2465 13.7405C14.2001 13.8797 14.1769 13.9492 14.1374 14.007C14.1024 14.0582 14.0582 14.1024 14.007 14.1374C13.9492 14.1769 13.8797 14.2001 13.7405 14.2465L9.27789 15.734C8.78935 15.8969 8.54507 15.9783 8.38263 15.9204C8.24127 15.87 8.13003 15.7587 8.07962 15.6174C8.02169 15.4549 8.10312 15.2107 8.26596 14.7221L9.75351 10.2595C9.79989 10.1203 9.82308 10.0508 9.8626 9.99299C9.8976 9.94182 9.94182 9.8976 9.99299 9.8626C10.0508 9.82308 10.1203 9.79989 10.2595 9.75351L14.7221 8.26596Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const Flag01: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M4 15C4 15 5 14 8 14C11 14 13 16 16 16C19 16 20 15 20 15V3C20 3 19 4 16 4C13 4 11 2 8 2C5 2 4 3 4 3L4 22"
        {...pathProps}
      />
    </SVG>
  );
};

export const Flag02: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M4 15C4 15 5 14 8 14C11 14 13 16 16 16C19 16 20 15 20 15V4C20 4 19 5 16 5C13 5 11 3 8 3C5 3 4 4 4 4M4 22L4 2"
        {...pathProps}
      />
    </SVG>
  );
};

export const Flag03: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M4 13H19.587C20.0495 13 20.2808 13 20.4128 12.903C20.528 12.8185 20.6015 12.6887 20.6147 12.5464C20.63 12.3833 20.511 12.185 20.273 11.7884L18.247 8.4116C18.1572 8.26195 18.1123 8.18712 18.0947 8.10724C18.0792 8.03659 18.0792 7.96341 18.0947 7.89276C18.1123 7.81288 18.1572 7.73805 18.247 7.5884L20.273 4.2116C20.511 3.81503 20.63 3.61674 20.6147 3.45359C20.6015 3.31133 20.528 3.18154 20.4128 3.09698C20.2808 3 20.0495 3 19.587 3H4L4 21"
        {...pathProps}
      />
    </SVG>
  );
};

export const Flag04: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M13.5 6.5H19.7056C20.1342 6.5 20.3485 6.5 20.4776 6.59027C20.5903 6.6691 20.6655 6.79086 20.6856 6.92692C20.7086 7.08273 20.6128 7.27442 20.4211 7.65777L19.1688 10.1623C19.1068 10.2864 19.0758 10.3485 19.0626 10.4137C19.051 10.4714 19.0496 10.5308 19.0586 10.5891C19.0688 10.6548 19.097 10.7182 19.1533 10.845L20.5 13.8751C20.6667 14.25 20.75 14.4374 20.7227 14.5888C20.6988 14.721 20.6227 14.8381 20.5116 14.9136C20.3844 15 20.1793 15 19.769 15H12.1C11.5399 15 11.2599 15 11.046 14.891C10.8578 14.7951 10.7049 14.6422 10.609 14.454C10.5 14.2401 10.5 13.9601 10.5 13.4V11M3 21L3 3.5M3 11H11.9C12.4601 11 12.7401 11 12.954 10.891C13.1422 10.7951 13.2951 10.6422 13.391 10.454C13.5 10.2401 13.5 9.96005 13.5 9.4V4.1C13.5 3.53995 13.5 3.25992 13.391 3.04601C13.2951 2.85785 13.1422 2.70487 12.954 2.60899C12.7401 2.5 12.4601 2.5 11.9 2.5L4.6 2.5C4.03995 2.5 3.75992 2.5 3.54601 2.60899C3.35785 2.70487 3.20487 2.85785 3.10899 3.04601C3 3.25992 3 3.53995 3 4.1V11Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const Flag05: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M14.1111 6.72217H20.1404C20.5877 6.72217 20.8114 6.72217 20.9422 6.81621C21.0563 6.89826 21.1306 7.02456 21.1469 7.16416C21.1656 7.32417 21.057 7.51967 20.8398 7.91068L19.3702 10.5559C19.2914 10.6977 19.252 10.7686 19.2366 10.8437C19.2229 10.9101 19.2229 10.9787 19.2366 11.0451C19.252 11.1202 19.2914 11.1911 19.3702 11.3329L20.8398 13.9781C21.057 14.3691 21.1656 14.5646 21.1469 14.7246C21.1306 14.8642 21.0563 14.9905 20.9422 15.0726C20.8114 15.1666 20.5877 15.1666 20.1404 15.1666H12.5445C11.9844 15.1666 11.7044 15.1666 11.4905 15.0576C11.3023 14.9617 11.1493 14.8088 11.0535 14.6206C10.9445 14.4067 10.9445 14.1267 10.9445 13.5666V10.9444M7.25004 21.5002L3.02782 4.61133M4.6112 10.9444H12.5112C13.0712 10.9444 13.3512 10.9444 13.5651 10.8355C13.7533 10.7396 13.9063 10.5866 14.0022 10.3984C14.1112 10.1845 14.1112 9.9045 14.1112 9.34445V4.1C14.1112 3.53995 14.1112 3.25992 14.0022 3.04601C13.9063 2.85785 13.7533 2.70487 13.5651 2.60899C13.3512 2.5 13.0712 2.5 12.5112 2.5H4.54927C3.85075 2.5 3.50149 2.5 3.2626 2.64474C3.05323 2.77159 2.89767 2.97084 2.82538 3.20472C2.74291 3.47158 2.82762 3.81041 2.99704 4.48807L4.6112 10.9444Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const Flag06: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M4 21L4 4M4 13H11.4C11.9601 13 12.2401 13 12.454 12.891C12.6422 12.7951 12.7951 12.6422 12.891 12.454C13 12.2401 13 11.9601 13 11.4V4.6C13 4.03995 13 3.75992 12.891 3.54601C12.7951 3.35785 12.6422 3.20487 12.454 3.10899C12.2401 3 11.9601 3 11.4 3H5.6C5.03995 3 4.75992 3 4.54601 3.10899C4.35785 3.20487 4.20487 3.35785 4.10899 3.54601C4 3.75992 4 4.03995 4 4.6V13ZM13 5H19.4C19.9601 5 20.2401 5 20.454 5.10899C20.6422 5.20487 20.7951 5.35785 20.891 5.54601C21 5.75992 21 6.03995 21 6.6V13.4C21 13.9601 21 14.2401 20.891 14.454C20.7951 14.6422 20.6422 14.7951 20.454 14.891C20.2401 15 19.9601 15 19.4 15H14.6C14.0399 15 13.7599 15 13.546 14.891C13.3578 14.7951 13.2049 14.6422 13.109 14.454C13 14.2401 13 13.9601 13 13.4V5Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const Globe01: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M2 12H22M2 12C2 17.5228 6.47715 22 12 22M2 12C2 6.47715 6.47715 2 12 2M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22M12 2C9.49872 4.73835 8.07725 8.29203 8 12C8.07725 15.708 9.49872 19.2616 12 22"
        {...pathProps}
      />
    </SVG>
  );
};

export const Globe02: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22M12 2C9.49872 4.73835 8.07725 8.29203 8 12C8.07725 15.708 9.49872 19.2616 12 22M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22M2.50002 9H21.5M2.5 15H21.5"
        {...pathProps}
      />
    </SVG>
  );
};

export const Globe03: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M12 2C15 4 15.9228 8.29203 16 12C15.9228 15.708 15 20 12 22M12 2C9 4 8.07725 8.29203 8 12C8.07725 15.708 9 20 12 22M12 2C6.47715 2 2 6.47715 2 12M12 2C17.5228 2 22 6.47715 22 12M12 22C17.5229 22 22 17.5228 22 12M12 22C6.47716 22 2 17.5228 2 12M22 12C20 15 15.708 15.9228 12 16C8.29203 15.9228 4 15 2 12M22 12C20 9 15.708 8.07725 12 8C8.29203 8.07725 4 9 2 12"
        {...pathProps}
      />
    </SVG>
  );
};

export const Globe04: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M3.07598 7.48282L7.36402 10.5457C7.58715 10.705 7.69872 10.7847 7.81548 10.8031C7.91821 10.8192 8.02343 10.8029 8.11648 10.7565C8.22223 10.7037 8.30449 10.594 8.46901 10.3747L9.37511 9.16652C9.42164 9.10448 9.4449 9.07347 9.47224 9.04671C9.49652 9.02295 9.52315 9.00173 9.55173 8.98338C9.58392 8.9627 9.61935 8.94696 9.6902 8.91546L13.5588 7.19609C13.7192 7.12482 13.7993 7.08918 13.8598 7.03352C13.9133 6.9843 13.9554 6.924 13.9832 6.85684C14.0146 6.78091 14.0204 6.69336 14.0321 6.51826L14.3154 2.2694M13.5 13.5L16.116 14.6211C16.4195 14.7512 16.5713 14.8163 16.6517 14.9243C16.7222 15.0191 16.7569 15.1358 16.7496 15.2537C16.7413 15.3881 16.6497 15.5255 16.4665 15.8002L15.2375 17.6438C15.1507 17.774 15.1072 17.8391 15.0499 17.8863C14.9991 17.928 14.9406 17.9593 14.8777 17.9784C14.8067 18 14.7284 18 14.5719 18H12.5766C12.3693 18 12.2656 18 12.1774 17.9653C12.0995 17.9347 12.0305 17.885 11.9768 17.8208C11.916 17.7481 11.8832 17.6497 11.8177 17.453L11.1048 15.3144C11.0661 15.1983 11.0468 15.1403 11.0417 15.0814C11.0372 15.0291 11.0409 14.9764 11.0528 14.9253C11.0662 14.8677 11.0935 14.813 11.1482 14.7036L11.6897 13.6206C11.7997 13.4005 11.8547 13.2905 11.9395 13.2222C12.0141 13.162 12.1046 13.1246 12.1999 13.1143C12.3081 13.1027 12.4248 13.1416 12.6582 13.2194L13.5 13.5ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const Globe05: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M15 2.4578C14.053 2.16035 13.0452 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 10.2847 21.5681 8.67022 20.8071 7.25945M17 5.75H17.005M10.5001 21.8883L10.5002 19.6849C10.5002 19.5656 10.5429 19.4502 10.6205 19.3596L13.1063 16.4594C13.3106 16.2211 13.2473 15.8556 12.9748 15.6999L10.1185 14.0677C10.0409 14.0234 9.97663 13.9591 9.93234 13.8814L8.07046 10.6186C7.97356 10.4488 7.78657 10.3511 7.59183 10.3684L2.06418 10.8607M21 6C21 8.20914 19 10 17 12C15 10 13 8.20914 13 6C13 3.79086 14.7909 2 17 2C19.2091 2 21 3.79086 21 6ZM17.25 5.75C17.25 5.88807 17.1381 6 17 6C16.8619 6 16.75 5.88807 16.75 5.75C16.75 5.61193 16.8619 5.5 17 5.5C17.1381 5.5 17.25 5.61193 17.25 5.75Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const Globe06: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M2.68675 15.6451L4.59494 14.5435C4.6983 14.4839 4.8196 14.4631 4.9369 14.4851L8.6914 15.1878C8.99995 15.2455 9.28478 15.008 9.28338 14.6941L9.26876 11.4045C9.26836 11.3151 9.29193 11.2272 9.33701 11.15L11.2317 7.90621C11.3303 7.73739 11.3215 7.52658 11.2091 7.3666L8.01892 2.82568M19.0002 4.85905C13.5002 7.50004 16.5 11 17.5002 11.5C19.3773 12.4384 21.9876 12.5 21.9876 12.5C21.9958 12.3344 22 12.1677 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C12.1677 22 12.3344 21.9959 12.5 21.9877M16.7578 21.9398L13.591 13.591L21.9398 16.7578L18.2376 18.2376L16.7578 21.9398Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const Luggage01: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M8 22V20M9.5 15V7M16 22V20M14.5 15V7M8.8 20H15.2C16.8802 20 17.7202 20 18.362 19.673C18.9265 19.3854 19.3854 18.9265 19.673 18.362C20 17.7202 20 16.8802 20 15.2V6.8C20 5.11984 20 4.27976 19.673 3.63803C19.3854 3.07354 18.9265 2.6146 18.362 2.32698C17.7202 2 16.8802 2 15.2 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V15.2C4 16.8802 4 17.7202 4.32698 18.362C4.6146 18.9265 5.07354 19.3854 5.63803 19.673C6.27976 20 7.11984 20 8.8 20Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const Luggage02: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M16 7C16 6.07003 16 5.60504 15.8978 5.22354C15.6204 4.18827 14.8117 3.37962 13.7765 3.10222C13.395 3 12.93 3 12 3C11.07 3 10.605 3 10.2235 3.10222C9.18827 3.37962 8.37962 4.18827 8.10222 5.22354C8 5.60504 8 6.07003 8 7M12.8 17.5H17.7C17.98 17.5 18.12 17.5 18.227 17.4455C18.3211 17.3976 18.3976 17.3211 18.4455 17.227C18.5 17.12 18.5 16.98 18.5 16.7V14.3C18.5 14.02 18.5 13.88 18.4455 13.773C18.3976 13.6789 18.3211 13.6024 18.227 13.5545C18.12 13.5 17.98 13.5 17.7 13.5H12.8C12.52 13.5 12.38 13.5 12.273 13.5545C12.1789 13.6024 12.1024 13.6789 12.0545 13.773C12 13.88 12 14.02 12 14.3V16.7C12 16.98 12 17.12 12.0545 17.227C12.1024 17.3211 12.1789 17.3976 12.273 17.4455C12.38 17.5 12.52 17.5 12.8 17.5ZM6.8 21H17.2C18.8802 21 19.7202 21 20.362 20.673C20.9265 20.3854 21.3854 19.9265 21.673 19.362C22 18.7202 22 17.8802 22 16.2V11.8C22 10.1198 22 9.27976 21.673 8.63803C21.3854 8.07354 20.9265 7.6146 20.362 7.32698C19.7202 7 18.8802 7 17.2 7H6.8C5.11984 7 4.27976 7 3.63803 7.32698C3.07354 7.6146 2.6146 8.07354 2.32698 8.63803C2 9.27976 2 10.1198 2 11.8V16.2C2 17.8802 2 18.7202 2.32698 19.362C2.6146 19.9265 3.07354 20.3854 3.63803 20.673C4.27976 21 5.11984 21 6.8 21Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const Luggage03: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M8 21V7C8 6.07003 8 5.60504 8.10222 5.22354C8.37962 4.18827 9.18827 3.37962 10.2235 3.10222C10.605 3 11.07 3 12 3C12.93 3 13.395 3 13.7765 3.10222C14.8117 3.37962 15.6204 4.18827 15.8978 5.22354C16 5.60504 16 6.07003 16 7V13.5M16 17.5V21M6.8 21H17.2C18.8802 21 19.7202 21 20.362 20.673C20.9265 20.3854 21.3854 19.9265 21.673 19.362C22 18.7202 22 17.8802 22 16.2V11.8C22 10.1198 22 9.27976 21.673 8.63803C21.3854 8.07354 20.9265 7.6146 20.362 7.32698C19.7202 7 18.8802 7 17.2 7H6.8C5.11984 7 4.27976 7 3.63803 7.32698C3.07354 7.6146 2.6146 8.07354 2.32698 8.63803C2 9.27976 2 10.1198 2 11.8V16.2C2 17.8802 2 18.7202 2.32698 19.362C2.6146 19.9265 3.07354 20.3854 3.63803 20.673C4.27976 21 5.11984 21 6.8 21ZM12.8 17.5H17.7C17.98 17.5 18.12 17.5 18.227 17.4455C18.3211 17.3976 18.3976 17.3211 18.4455 17.227C18.5 17.12 18.5 16.98 18.5 16.7V14.3C18.5 14.02 18.5 13.88 18.4455 13.773C18.3976 13.6789 18.3211 13.6024 18.227 13.5545C18.12 13.5 17.98 13.5 17.7 13.5H12.8C12.52 13.5 12.38 13.5 12.273 13.5545C12.1789 13.6024 12.1024 13.6789 12.0545 13.773C12 13.88 12 14.02 12 14.3V16.7C12 16.98 12 17.12 12.0545 17.227C12.1024 17.3211 12.1789 17.3976 12.273 17.4455C12.38 17.5 12.52 17.5 12.8 17.5Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const Map01: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M9 18L2 22V6L9 2M9 18L16 22M9 18V2M16 22L22 18V2L16 6M16 22V6M16 6L9 2"
        {...pathProps}
      />
    </SVG>
  );
};

export const Map02: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M8 3L16 21M3 17L12 12M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const Mark: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M20 12C20 16.4183 16.4183 20 12 20M20 12C20 7.58172 16.4183 4 12 4M20 12H22M12 20C7.58172 20 4 16.4183 4 12M12 20V22M4 12C4 7.58172 7.58172 4 12 4M4 12H2M12 4V2M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const MarkerPin01: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
        {...pathProps}
      />
      <Path d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z" />
    </SVG>
  );
};

export const MarkerPin02: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M12 12.5C13.6569 12.5 15 11.1569 15 9.5C15 7.84315 13.6569 6.5 12 6.5C10.3431 6.5 9 7.84315 9 9.5C9 11.1569 10.3431 12.5 12 12.5Z"
        {...pathProps}
      />
      <Path d="M12 22C14 18 20 15.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 15.4183 10 18 12 22Z" />
    </SVG>
  );
};

export const MarkerPin03: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M12 22C13 17 20 16.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 16.4183 11 17 12 22Z"
        {...pathProps}
      />
      <Path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" />
    </SVG>
  );
};

export const MarkerPin04: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M5 14.2864C3.14864 15.1031 2 16.2412 2 17.5C2 19.9853 6.47715 22 12 22C17.5228 22 22 19.9853 22 17.5C22 16.2412 20.8514 15.1031 19 14.2864M18 8C18 12.0637 13.5 14 12 17C10.5 14 6 12.0637 6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8ZM13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const MarkerPin05: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M16 13.3744C19.5318 14.0688 22 15.6547 22 17.5C22 19.9853 17.5228 22 12 22C6.47715 22 2 19.9853 2 17.5C2 15.6547 4.46819 14.0688 8 13.3744M12 17V3L17.3177 6.27244C17.7056 6.51114 17.8995 6.63049 17.9614 6.78085C18.0154 6.912 18.0111 7.0599 17.9497 7.18771C17.8792 7.33426 17.6787 7.44222 17.2777 7.65815L12 10 "
        {...pathProps}
      />
    </SVG>
  );
};

export const MarkerPin06: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M16 13.3744C19.5318 14.0688 22 15.6547 22 17.5C22 19.9853 17.5228 22 12 22C6.47715 22 2 19.9853 2 17.5C2 15.6547 4.46819 14.0688 8 13.3744M12 17V9M12 9C13.6569 9 15 7.65685 15 6C15 4.34315 13.6569 3 12 3C10.3431 3 9 4.34315 9 6C9 7.65685 10.3431 9 12 9Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const NavigationPointer01: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M3.41345 10.7445C2.81811 10.513 2.52043 10.3972 2.43353 10.2304C2.35819 10.0858 2.35809 9.91354 2.43326 9.76886C2.51997 9.60195 2.8175 9.48584 3.41258 9.25361L20.3003 2.66327C20.8375 2.45364 21.1061 2.34883 21.2777 2.40616C21.4268 2.45596 21.5437 2.57292 21.5935 2.72197C21.6509 2.8936 21.5461 3.16219 21.3364 3.69937L14.7461 20.5871C14.5139 21.1822 14.3977 21.4797 14.2308 21.5664C14.0862 21.6416 13.9139 21.6415 13.7693 21.5662C13.6025 21.4793 13.4867 21.1816 13.2552 20.5862L10.6271 13.8282C10.5801 13.7074 10.5566 13.647 10.5203 13.5961C10.4881 13.551 10.4487 13.5115 10.4036 13.4794C10.3527 13.4431 10.2923 13.4196 10.1715 13.3726L3.41345 10.7445Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const NavigationPointer02: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M5.03685 21.3253C4.45216 21.5826 4.15982 21.7112 3.98042 21.6547C3.8249 21.6057 3.70303 21.484 3.65387 21.3285C3.59717 21.1492 3.72545 20.8567 3.98203 20.2717L11.2634 3.6702C11.495 3.14212 11.6108 2.87808 11.7727 2.79727C11.9133 2.72708 12.0787 2.72708 12.2193 2.79727C12.3812 2.87808 12.497 3.14212 12.7287 3.6702L20.01 20.2717C20.2666 20.8567 20.3949 21.1492 20.3382 21.3285C20.289 21.484 20.1671 21.6057 20.0116 21.6547C19.8322 21.7112 19.5399 21.5826 18.9552 21.3253L12.3182 18.405C12.1995 18.3528 12.1402 18.3267 12.0785 18.3164C12.0239 18.3072 11.9681 18.3072 11.9135 18.3164C11.8519 18.3267 11.7925 18.3528 11.6738 18.405L5.03685 21.3253Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const NavigationPointerOff01: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M11.337 6.16115L20.3003 2.66327C20.8375 2.45364 21.1061 2.34883 21.2777 2.40616C21.4268 2.45596 21.5437 2.57292 21.5935 2.72197C21.6509 2.8936 21.5461 3.16219 21.3364 3.69937L17.8274 12.6913M16.3857 16.3857L14.7461 20.5871C14.5139 21.1822 14.3977 21.4797 14.2308 21.5664C14.0862 21.6416 13.9139 21.6415 13.7693 21.5662C13.6025 21.4793 13.4867 21.1816 13.2552 20.5862L10.6271 13.8282C10.5801 13.7074 10.5566 13.647 10.5203 13.5961C10.4881 13.551 10.4487 13.5115 10.4036 13.4794C10.3527 13.4431 10.2923 13.4196 10.1715 13.3726L3.41345 10.7445C2.81811 10.513 2.52043 10.3972 2.43353 10.2304C2.35819 10.0858 2.35809 9.91354 2.43326 9.76885C2.51997 9.60195 2.8175 9.48584 3.41258 9.25361L7.61748 7.61268M20.9995 21.0002L2.99952 3.00017"
        {...pathProps}
      />
    </SVG>
  );
};

export const NavigationPointerOff02: FC = ({
  pathProps,
  ...props
}: SVGComponentProps) => {
  return (
    <SVG {...props}>
      <Path
        d="M10.4712 5.47577L11.2631 3.67044C11.4947 3.14236 11.6105 2.87832 11.7724 2.79751C11.913 2.72732 12.0784 2.72732 12.219 2.79751C12.3809 2.87832 12.4967 3.14236 12.7283 3.67044L15.9006 10.9033M8.94668 8.95153L3.98158 20.272C3.725 20.857 3.59672 21.1495 3.65342 21.3288C3.70258 21.4842 3.82445 21.606 3.97997 21.6549C4.15937 21.7114 4.45171 21.5828 5.0364 21.3256L11.6734 18.4053C11.7921 18.3531 11.8514 18.327 11.9131 18.3166C11.9677 18.3075 12.0235 18.3075 12.0781 18.3166C12.1397 18.327 12.1991 18.3531 12.3178 18.4053L18.9547 21.3256C19.5394 21.5828 19.8318 21.7114 20.0112 21.6549C20.1667 21.606 20.2886 21.4842 20.3377 21.3288C20.3944 21.1495 20.2661 20.857 20.0096 20.272L19.8054 19.8066M22 22L2 2"
        {...pathProps}
      />
    </SVG>
  );
};

export const Passport: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M10 16H14M8.8 22H15.2C16.8802 22 17.7202 22 18.362 21.673C18.9265 21.3854 19.3854 20.9265 19.673 20.362C20 19.7202 20 18.8802 20 17.2V6.8C20 5.11984 20 4.27976 19.673 3.63803C19.3854 3.07354 18.9265 2.6146 18.362 2.32698C17.7202 2 16.8802 2 15.2 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22ZM15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const Rocket01: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M12.9996 10.9999L3.49964 20.4999M14.0181 3.53838C15.2361 4.34658 16.4068 5.29941 17.5008 6.3934C18.6042 7.49683 19.564 8.67831 20.3767 9.90766M9.2546 7.89605L6.37973 6.93776C6.04865 6.8274 5.68398 6.89763 5.41756 7.12306L2.56041 9.54065C1.97548 10.0356 2.14166 10.9775 2.86064 11.2424L5.56784 12.2398M11.6807 18.3524L12.6781 21.0596C12.943 21.7786 13.8849 21.9448 14.3798 21.3599L16.7974 18.5027C17.0228 18.2363 17.0931 17.8716 16.9827 17.5405L16.0244 14.6657M19.3482 2.27063L14.4418 3.08838C13.9119 3.17668 13.426 3.43709 13.0591 3.82932L6.446 10.8985C4.73185 12.7308 4.77953 15.5924 6.55378 17.3667C8.32803 19.1409 11.1896 19.1886 13.022 17.4744L20.0911 10.8614C20.4834 10.4944 20.7438 10.0085 20.8321 9.47869L21.6498 4.57222C21.8754 3.21858 20.7019 2.04503 19.3482 2.27063Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const Rocket02: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M12 14.9998L9 11.9998M12 14.9998C13.3968 14.4685 14.7369 13.7985 16 12.9998M12 14.9998V19.9998C12 19.9998 15.03 19.4498 16 17.9998C17.08 16.3798 16 12.9998 16 12.9998M9 11.9998C9.53214 10.6192 10.2022 9.29582 11 8.04976C12.1652 6.18675 13.7876 4.65281 15.713 3.59385C17.6384 2.53489 19.8027 1.98613 22 1.99976C22 4.71976 21.22 9.49976 16 12.9998M9 11.9998H4C4 11.9998 4.55 8.96976 6 7.99976C7.62 6.91976 11 7.99976 11 7.99976M4.5 16.4998C3 17.7598 2.5 21.4998 2.5 21.4998C2.5 21.4998 6.24 20.9998 7.5 19.4998C8.21 18.6598 8.2 17.3698 7.41 16.5898C7.02131 16.2188 6.50929 16.0044 5.97223 15.9878C5.43516 15.9712 4.91088 16.1535 4.5 16.4998Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const Route: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M11.5 5H11.9344C14.9816 5 16.5053 5 17.0836 5.54729C17.5836 6.02037 17.8051 6.71728 17.6702 7.39221C17.514 8.17302 16.2701 9.05285 13.7823 10.8125L9.71772 13.6875C7.2299 15.4471 5.98599 16.327 5.82984 17.1078C5.69486 17.7827 5.91642 18.4796 6.41636 18.9527C6.99474 19.5 8.51836 19.5 11.5656 19.5H12.5M8 5C8 6.65685 6.65685 8 5 8C3.34315 8 2 6.65685 2 5C2 3.34315 3.34315 2 5 2C6.65685 2 8 3.34315 8 5ZM22 19C22 20.6569 20.6569 22 19 22C17.3431 22 16 20.6569 16 19C16 17.3431 17.3431 16 19 16C20.6569 16 22 17.3431 22 19Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const Ticket01: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M10 8V7M10 12.5V11.5M10 17V16M5.2 4H18.8C19.9201 4 20.4802 4 20.908 4.21799C21.2843 4.40973 21.5903 4.71569 21.782 5.09202C22 5.51984 22 6.0799 22 7.2V8.5C20.067 8.5 18.5 10.067 18.5 12C18.5 13.933 20.067 15.5 22 15.5V16.8C22 17.9201 22 18.4802 21.782 18.908C21.5903 19.2843 21.2843 19.5903 20.908 19.782C20.4802 20 19.9201 20 18.8 20H5.2C4.0799 20 3.51984 20 3.09202 19.782C2.71569 19.5903 2.40973 19.2843 2.21799 18.908C2 18.4802 2 17.9201 2 16.8V15.5C3.933 15.5 5.5 13.933 5.5 12C5.5 10.067 3.933 8.5 2 8.5V7.2C2 6.0799 2 5.51984 2.21799 5.09202C2.40973 4.71569 2.71569 4.40973 3.09202 4.21799C3.51984 4 4.0799 4 5.2 4Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const Ticket02: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M8 8V7M8 12.5V11.5M8 17V16M6.8 20H17.2C18.8802 20 19.7202 20 20.362 19.673C20.9265 19.3854 21.3854 18.9265 21.673 18.362C22 17.7202 22 16.8802 22 15.2V8.8C22 7.11984 22 6.27976 21.673 5.63803C21.3854 5.07354 20.9265 4.6146 20.362 4.32698C19.7202 4 18.8802 4 17.2 4H6.8C5.11984 4 4.27976 4 3.63803 4.32698C3.07354 4.6146 2.6146 5.07354 2.32698 5.63803C2 6.27976 2 7.11984 2 8.8V15.2C2 16.8802 2 17.7202 2.32698 18.362C2.6146 18.9265 3.07354 19.3854 3.63803 19.673C4.27976 20 5.11984 20 6.8 20Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const Train: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M9.5 22H14.5M8 2H16M12 5V2M4 12H20M17 19L18.5 22M7 19L5.5 22M8.5 15.5H8.51M15.5 15.5H15.51M8.8 19H15.2C16.8802 19 17.7202 19 18.362 18.673C18.9265 18.3854 19.3854 17.9265 19.673 17.362C20 16.7202 20 15.8802 20 14.2V9.8C20 8.11984 20 7.27976 19.673 6.63803C19.3854 6.07354 18.9265 5.6146 18.362 5.32698C17.7202 5 16.8802 5 15.2 5H8.8C7.11984 5 6.27976 5 5.63803 5.32698C5.07354 5.6146 4.6146 6.07354 4.32698 6.63803C4 7.27976 4 8.11984 4 9.8V14.2C4 15.8802 4 16.7202 4.32698 17.362C4.6146 17.9265 5.07354 18.3854 5.63803 18.673C6.27976 19 7.11984 19 8.8 19ZM9 15.5C9 15.7761 8.77614 16 8.5 16C8.22386 16 8 15.7761 8 15.5C8 15.2239 8.22386 15 8.5 15C8.77614 15 9 15.2239 9 15.5ZM16 15.5C16 15.7761 15.7761 16 15.5 16C15.2239 16 15 15.7761 15 15.5C15 15.2239 15.2239 15 15.5 15C15.7761 15 16 15.2239 16 15.5Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const Tram: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M18.5 3L17.5135 2.50675C17.1355 2.31776 16.9465 2.22326 16.7485 2.15662C16.5725 2.09744 16.3915 2.05471 16.2077 2.02897C16.0008 2 15.7895 2 15.3669 2H8.63313C8.21053 2 7.99923 2 7.79227 2.02897C7.60847 2.05471 7.42745 2.09744 7.25155 2.15662C7.05348 2.22326 6.86449 2.31776 6.4865 2.50675L5.5 3M11 6L9 2M13 6L15 2M4 13H20M17 20L18 22M7 20L6.00016 22M8.5 16.5H8.51M15.5 16.5H15.51M8.8 20H15.2C16.8802 20 17.7202 20 18.362 19.673C18.9265 19.3854 19.3854 18.9265 19.673 18.362C20 17.7202 20 16.8802 20 15.2V10.8C20 9.11984 20 8.27976 19.673 7.63803C19.3854 7.07354 18.9265 6.6146 18.362 6.32698C17.7202 6 16.8802 6 15.2 6H8.8C7.11984 6 6.27976 6 5.63803 6.32698C5.07354 6.6146 4.6146 7.07354 4.32698 7.63803C4 8.27976 4 9.11984 4 10.8V15.2C4 16.8802 4 17.7202 4.32698 18.362C4.6146 18.9265 5.07354 19.3854 5.63803 19.673C6.27976 20 7.11984 20 8.8 20ZM9 16.5C9 16.7761 8.77614 17 8.5 17C8.22386 17 8 16.7761 8 16.5C8 16.2239 8.22386 16 8.5 16C8.77614 16 9 16.2239 9 16.5ZM16 16.5C16 16.7761 15.7761 17 15.5 17C15.2239 17 15 16.7761 15 16.5C15 16.2239 15.2239 16 15.5 16C15.7761 16 16 16.2239 16 16.5Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const Truck01: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M14 7H16.3373C16.5818 7 16.7041 7 16.8192 7.02763C16.9213 7.05213 17.0188 7.09253 17.1083 7.14736C17.2092 7.2092 17.2957 7.29568 17.4686 7.46863L21.5314 11.5314C21.7043 11.7043 21.7908 11.7908 21.8526 11.8917C21.9075 11.9812 21.9479 12.0787 21.9724 12.1808C22 12.2959 22 12.4182 22 12.6627V15.5C22 15.9659 22 16.1989 21.9239 16.3827C21.8224 16.6277 21.6277 16.8224 21.3827 16.9239C21.1989 17 20.9659 17 20.5 17M15.5 17H14M14 17V7.2C14 6.0799 14 5.51984 13.782 5.09202C13.5903 4.71569 13.2843 4.40973 12.908 4.21799C12.4802 4 11.9201 4 10.8 4H5.2C4.0799 4 3.51984 4 3.09202 4.21799C2.71569 4.40973 2.40973 4.71569 2.21799 5.09202C2 5.51984 2 6.0799 2 7.2V15C2 16.1046 2.89543 17 4 17M14 17H10M10 17C10 18.6569 8.65685 20 7 20C5.34315 20 4 18.6569 4 17M10 17C10 15.3431 8.65685 14 7 14C5.34315 14 4 15.3431 4 17M20.5 17.5C20.5 18.8807 19.3807 20 18 20C16.6193 20 15.5 18.8807 15.5 17.5C15.5 16.1193 16.6193 15 18 15C19.3807 15 20.5 16.1193 20.5 17.5Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const Truck02: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M16 16V6.2C16 5.0799 16 4.51984 15.782 4.09202C15.5903 3.71569 15.2843 3.40973 14.908 3.21799C14.4802 3 13.9201 3 12.8 3H5.2C4.0799 3 3.51984 3 3.09202 3.21799C2.71569 3.40973 2.40973 3.71569 2.21799 4.09202C2 4.51984 2 5.0799 2 6.2V12.8C2 13.9201 2 14.4802 2.21799 14.908C2.40973 15.2843 2.71569 15.5903 3.09202 15.782C3.51984 16 4.0799 16 5.2 16H16ZM16 16H20.4C20.9601 16 21.2401 16 21.454 15.891C21.6422 15.7951 21.7951 15.6422 21.891 15.454C22 15.2401 22 14.9601 22 14.4V11.6627C22 11.4182 22 11.2959 21.9724 11.1808C21.9479 11.0787 21.9075 10.9812 21.8526 10.8917C21.7908 10.7908 21.7043 10.7043 21.5314 10.5314L19.4686 8.46863C19.2957 8.29568 19.2092 8.2092 19.1083 8.14736C19.0188 8.09253 18.9213 8.05213 18.8192 8.02763C18.7041 8 18.5818 8 18.3373 8H16M9 18.5C9 19.8807 7.88071 21 6.5 21C5.11929 21 4 19.8807 4 18.5C4 17.1193 5.11929 16 6.5 16C7.88071 16 9 17.1193 9 18.5ZM20 18.5C20 19.8807 18.8807 21 17.5 21C16.1193 21 15 19.8807 15 18.5C15 17.1193 16.1193 16 17.5 16C18.8807 16 20 17.1193 20 18.5Z"
        {...pathProps}
      />
    </SVG>
  );
};