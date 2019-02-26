import { css } from 'styled-components';

export default css`
    text-align: center;
    background: #454545;
    color: #fcf6f0;
    border-radius: 5%;
    border: 5px solid green;
    padding: 10px;

    &.selected-tile{
        border-color: red;
    }
`;