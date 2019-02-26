import { css } from 'styled-components';

export default css`
margin: 0;

.question-category,.question-difficulty,.question-statement{
    text-align: center;
    padding: 25px;
    font-size: 30px;
}

.option-div {
    text-align: center;
}
.option-button {
    background-color: #b9bcc3;
    border: none;
    color: white;
    padding: 20px;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 5%;
    width: 100%;
}
`;