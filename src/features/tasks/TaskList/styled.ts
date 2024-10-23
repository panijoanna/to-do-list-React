import styled, { css } from "styled-components";

interface TaskActions {
  hidden?: boolean;
  done?: boolean;
  toggleDone?: boolean;
  remove?: boolean;
}

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  word-break: break-word;
`;

export const Item = styled.li<TaskActions>`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray};

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span<TaskActions>`
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const Button = styled.button<TaskActions>`
  display: flex;
  align-items: center;
  border: none;
  color: white;
  width: 30px;
  height: 30px;
  transition: 0.5s;
  cursor: pointer;

  ${({ toggleDone }) =>
    toggleDone &&
    css`
      background: ${({ theme }) => theme.color.cornFlowerBlue};
      color: ${({ theme }) => theme.color.white};
    `}

  ${({ remove }) =>
    remove &&
    css`
      background: ${({ theme }) => theme.color.gray};
      color: ${({ theme }) => theme.color.cocoaBrown};
    `}
`;
