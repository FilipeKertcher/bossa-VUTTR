import styled from "styled-components";

const CardStyled = styled.div`
   background-color:${(props: any) =>
     props.backgroundColor
       ? props.backgroundColor
       : props.theme.colors.darkerWhite};
   padding:10px;
   border: 1px solid #EBEAED
   background: 0% 0% no-repeat padding-box;
   box-shadow: ${(props: any) =>
     props.theme.boxShadows[
       !!props.elevationLevel
         ? "cardMainElevation" + props.elevationLevel
         : "cardMainFlat"
     ]};
   border: 1px solid #EBEAED;
   border-radius: 5px;    
`;

export default CardStyled;
