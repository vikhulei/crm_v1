import styled from "styled-components";

const Wrapper = styled.div `
    position: absolute;
    width: 100vw;
    height: 100vh;
`

const BackgroundColor = styled.div `
position: absolute;
top: 80px;
bottom: 0;
width: 100%;
height: 500px;
min-height: calc(100vh - 80px);
background-color: #BD9CE8;
// @media screen and (max-width: 750px) {
//     height: 300vh;
// }
`

const BackgroundImage = styled.img `
position: absolute;
height: 100%;
width: 100%;
object-fit: cover;
opacity: 0.4;
`
const NavBar = styled.nav `
position: relative;
width: 100%;
height: 80px;
background-color: #F5EAFB;
`

const Title = styled.h1 `
    font-family: "Rock Salt";
    font-size: 2.7rem;
    color: #450577;
    text-align: center;
    line-height: 1.7;
`
const Logo = styled.img `
    position: absolute;
    width: 60px;
    left: 30px;
    top: 50%;
    transform: translateY(-50%);
`

export {Wrapper, BackgroundColor, BackgroundImage, NavBar, Title, Logo}