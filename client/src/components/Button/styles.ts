import styled, { css } from "styled-components";


export const Container = styled.button<any>`
  width: 12.24rem;
  height: 2.86rem;
  border-radius: 3.12rem;
  font-family: 'Inter', sans-serif;

  color: #FFF;
  font-weight: 600;
  ${({disabled}) => (disabled ? css`
    background: #88A2F2;
    cursor: no-drop;
  `: css`
    background: #3754DB;
    cursor: pointer;
  `)};
  font-size: 0.87rem;
  border: none;
  filter: drop-shadow(0 0.24rem 0.24rem rgba(0, 0, 0, 0.25))
          drop-shadow(0 0.08rem 0.08rem rgba(0, 0, 0, 0.25));
  transition: .2s ease;


  &:hover {
    filter: drop-shadow(0 0.24rem 0.24rem rgba(0, 0, 0, 0.25))
            drop-shadow(0 0.08rem 0.08rem rgba(0, 0, 0, 0.25))
            brightness(0.9);
    color: #fff;
  }
`;