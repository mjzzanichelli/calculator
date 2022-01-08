import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  padding: 0.5em;
  box-shadow: 0 0 0.2em 0.1em #5c79cd;
  border-radius: 0.5em;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const Display = styled.section`
  padding: 0.5em;
  margin: 0.3em;
  display: flex;
  flex-direction: column;
  text-align: right;
`;

export const Expression = styled.span`
  font-size: 1.5em;
  line-height: 2em;
  height: 2em;
  flex: none;
`;

export const Result = styled.span`
  color: #bcbcbc;
  height: 1em;
  flex: none;
`;

export const KeysRow = styled.section`
  height: 4em;
  flex: none;
  display: flex;
`;

export const Key = styled.button`
  cursor: pointer;
  color: #6f6f6f;
  font-weight: 600;
  background-color: #efefef;
  flex: 1;
  margin: 0.3em;
  border-radius: 0.5em;
  border: 0.1em solid #bcbcbc;
  box-shadow: 0 0 0.1em 0.1em #ccc;
  &:hover {
    background-color: #d1d1d1;
  }
  &:active {
    transform: translateY(0.1em);
    box-shadow: -0.1em 0 0.1em 0.1em #ccc;
  }
`;
