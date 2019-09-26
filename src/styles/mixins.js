import { css } from 'styled-components';
import theme from './theme';
import media from './media';

const { colors, fontSizes, fonts } = theme;

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  outline: css`
    outline: 1px solid red;
  `,

  link: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: ${theme.transition};
    cursor: pointer;
    &:hover,
    &:active,
    &:focus {
      color: ${colors.tron};
      outline: 0;
    }
  `,

  inlineLink: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: ${theme.transition};
    cursor: pointer;
    color: ${colors.tron};
    &:hover,
    &:focus,
    &:active {
      color: ${colors.tron};
      outline: 0;
      &:after {
        width: 100%;
      }
    }
    &:after {
      content: "";
      display: block;
      width: 0;
      height: 1.5px;
      position: relative;
      bottom: 0.2em;
      background-color: ${colors.tron};
      transition: ${theme.transition};
      opacity: 0.5;
    }
  `,

  smallButton: css`
    color: ${colors.tron};
    background-color: transparent;
    border: 1px solid ${colors.tron};
    border-radius: ${theme.borderRadius};
    padding: 0.75rem 1rem;
    font-size: ${fontSizes.smallish};
    font-family: ${fonts.Roboto};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${theme.transition};
    &:hover,
    &:focus,
    &:active {
      background-color: ${colors.tron};
    }
    &:after {
      display: none !important;
    }
  `,

  bigButton: css`
    color: ${colors.tron};
    background-color: transparent;
    border: 1px solid ${colors.tron};
    border-radius: ${theme.borderRadius};
    padding: 1.25rem 1.75rem;
    font-size: ${fontSizes.small};
    font-family: ${fonts.Roboto};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${theme.transition};
    &:hover,
    &:focus,
    &:active {
      background-color: ${colors.tronLight};
    }
    &:after {
      display: none !important;
    }
  `,

  sidePadding: css`
    padding: 0 150px;
    ${media.desktop`padding: 0 100px;`};
    ${media.tablet`padding: 0 50px;`};
    ${media.phablet`padding: 0 25px;`};
  `,

  boxShadow: css`
    box-shadow: 0 10px 30px -15px ${colors.shadowNavy};
    transition: ${theme.transition};

    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px ${colors.shadowNavy};
    }
  `,
};

export default mixins;
