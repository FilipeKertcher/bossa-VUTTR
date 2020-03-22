import styled from 'styled-components';

const CardStyled = styled.div`
   background-color:${(props:any) => props.backgroundColor  ? props.backgroundColor : props.theme.colors.darkerWhite};
   padding:10px;
   border: 1px solid #EBEAED
   background: 0% 0% no-repeat padding-box;
   box-shadow: 0px 20px 25px #0000001A;
   border: ${(props:any) => props.theme.boxShadows.cardMainElevation4 };
    
`;




export default CardStyled