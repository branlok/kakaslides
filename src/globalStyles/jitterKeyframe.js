import { keyframes } from "styled-components";

export let jitterText = keyframes`
0% {
    transform: translateY(0px) translateX(0px)
}
25% {
    transform: translateY(1px) translateX(1px)
}
50% {
    transform: translateY(1px) translateX(0px)
}
75% {
    transform: translateY(0px) translateX(-1px)
}
100% {
    transform: translateY(0px) translateX(0px)
}
`;
