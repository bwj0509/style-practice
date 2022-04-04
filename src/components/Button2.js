import React from 'react';
import styled, { css } from 'styled-components'
import { darken, lighten } from 'polished';


const colorStyles = css`
  ${(props) => {
        const selected = props.theme.palette[props.color];
        return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
      ${props =>
                props.outline &&
                css`
          color: ${selected};
          background: none;
          border: 1px solid ${selected};
          &:hover {
            background: ${selected};
            color: white;
          }
        `}
    `;
    }}
`;

const sizeStyles = css`
    ${props => props.size === 'large' &&
        css`
        height:3rem;
        font-size:1.25rem;
    `}
    ${props => props.size === 'medium' &&
        css`
        height:2.25rem;
        font-size:1rem;
    `}
    ${props => props.size === 'small' &&
        css`
        height:1.75rem;
        font-size:0.875rem;
    `}
`;

const fullWidthStyle = css`
${props => props.fullWidth &&
        css`
    width:100%;
    justify-content:center;
    &+&{
        margin-left:0;
        margin-top:1rem;
    }
    `
    }
`


const StyledButton = styled.button`
/* 공통 스타일 */
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  /* 크기 */
  ${sizeStyles}

  /* 색상 */
  ${colorStyles}

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }
  ${fullWidthStyle}
`;




function Button2({ children, color, size, outline, fullWidth, ...rest }) {
    return (
        <StyledButton
            color={color}
            size={size}
            outline={outline}
            fullWidth={fullWidth}
            {...rest}
        >
            {children}
        </StyledButton>
    );
}

Button2.defaultProps = {
    color: 'blue',
    size: 'medium'
};

export default Button2;