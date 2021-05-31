import styled from "styled-components";

export const Background = styled.body`
  background: #edeae5;
  overflow: auto;
`;

export const Table = styled.table`
  background: #faf9f7;
  border-spacing: 0px;
  margin: 24px auto;
  width: 95vw;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);
`;

export const RowHeader = styled.th`
  background: #fff;
  color: #179295;
  padding: 16px 24px;
  width: 25%;
  text-align: left;

  &:last-child {
    text-align: right;
  }
`;

export const Row = styled.tr`
    &:hover {
    box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);
    background: rgba(0, 0, 0, 0.1)d;
    color: #179295 !important;
    font-weight: bold;
    }
  &:first-child {
    box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);
`;

export const Cell = styled.td`
  padding: 16px 24px;
  width: 25%;
  &:last-child {
    text-align: right;
  }
  ${Row} {
    &:nth-child(odd) {
      color: #a3a2a4;
    }
    &:hover {
      color: #179295;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: #179295;
  color: white;
  height: 64px;
`;
