import { styled } from "../../styles";

export const Bill = styled('div', {
  background: '$red600',
  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.09)',
  borderRadius: '$md',
  padding: '$5 $6',
  textAlign: 'center',
  color: '$white',
  marginLeft: '$4',
  width: '25%',

  '.wrapper': {
    textAlign: 'center',
    marginBottom: '$4',
  }

  '.price': {
    fontSize: '$5',
    fontWeight: 700,
    color: '$gray100',
    letterSpacing: '-0.02rem',
    lineHeight: '$shorter',
    marginBottom: '$3',
  }

    .btn {
      height: 36px,
      padding: 3px 18px,
      font- size: 13px,
  line - height: 1.2em,
  font - weight: 500,
  box - shadow: none!important,
  display: inline - flex,
  align - items: center,
  justify - content: center,
  transition: 0.2s all,
  text - decoration: none!important,
  border - radius: 10px,
  border - width: 2px,

  background: ${ buttonColor }!important,
  border - color: ${ buttonColor }!important,
  color: ${ buttonLabelColor }!important,

  height: 28px,
  padding: 0px 6px,
  font - size: 12px,

  width: 100 %,
  }

  p {
  font - size: 11px,
    line - height: 1.4em,
      height: 36px,
        margin: 0 0 10px 0,
  }
})