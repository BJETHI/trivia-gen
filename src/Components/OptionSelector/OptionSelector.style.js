import { css } from 'styled-components';

export default css`
display: flex;
justify-content: center;

    @media(min-width:768px){
        margin: 40px;
    }
    .user-message {
        text-align: center;
        margin: 15px;
        font-size: 20px;
    }
`;