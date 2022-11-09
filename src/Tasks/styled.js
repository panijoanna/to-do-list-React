import styled, { css } from "styled-components";

export const TasksList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  word-break: break-word;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.color.alto};

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span`
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const Button = styled.button`
  border: none;
  color: white;
  width: 30px;
  height: 30px;
  padding: 0;
  transition: 0.5s;

  ${({ toggleDone }) =>
    toggleDone &&
    css`
      background: hsl(120, 61%, 39%);

      &:hover {
        background: hsl(123, 64%, 33%);
      }

      &:active {
        background: hsl(120, 61%, 44%);
      }
    `}

  ${({ remove }) =>
    remove &&
    css`
      background: hsl(348, 83%, 47%);

      &:hover {
        background: hsl(355, 98%, 60%);
      }

      &:active {
        background: hsl(348, 83%, 57%);
      }
    `}
`;
