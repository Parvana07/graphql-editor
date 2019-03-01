import { style } from 'typestyle';
import { Colors } from '../../../src';

export const SearchInput = style({
  background: Colors.grey[7],
  color: Colors.main[0],
  padding: 15,
  fontSize:12,
  alignSelf: 'stretch',
  border: 0,
  $nest: {
    '&::placeholder': {
      color: Colors.main[0],
      opacity: 0.8
    }
  }
});

export const SearchForm = style({
  alignSelf: 'stretch',
  display: 'flex',
  flexFlow: 'column nowrap',
});