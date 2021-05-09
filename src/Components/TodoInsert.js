import React from 'react';
import {MdAdd} from 'react-icons/md';
import styled from 'styled-components';

const Insert = styled.form`
    display:flex;
    background: #495057;
`
const Input = styled.input`
    background: none;
    outline: none;
    border: none;
    padding: 0.5rem;
    font-size: 1.125rem;
    line-height: 1.5;
    color:white;
    flex: 1;
    &::placeholder{
        color: #dee2e6;
    }
`

const Button = styled.button`
    outline: none;
    border:none;
    background: #868e96;
    color: white;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    transition: 0.1s background ease-in;
    cursor: pointer;
    &:hover{
        background: #adb5bd;
    }
`

const TodoInsert = () => {
    return(
        <Insert>
            <Input placeholder = "할 일을 입력하세요"/>
            <Button type = "submit">
                <MdAdd/>
            </Button>
        </Insert>
    )
}

export default TodoInsert;