import styled from '@emotion/styled';

export const Wrapper = styled('div')`
  .lang-btn {
    background-color: transparent;
    color: var(--nav-lang-btn-color);
    font-family: var(--font-readex);
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    svg {
      width: 13px;
    }
  }
  .item-active {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
