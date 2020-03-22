import React, { useEffect, useState, useContext } from "react"
import styled from 'styled-components';
import  CardStyled  from './style';

const Card = (props:any) => {
    return (
        <CardStyled {...props}>
            {props.children}
        </CardStyled>
    )
}

export default Card