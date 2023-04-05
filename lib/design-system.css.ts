// eslint-disable-next-line import/no-extraneous-dependencies
import { createTheme, createThemeContract } from '@vanilla-extract/css';

export const genericVars = createThemeContract({
  text: {
    capHeights: {
      '00': 'cap-height-00',
      '0': 'cap-height-0',
      '1': 'cap-height-1',
      '2': 'cap-height-2',
      '3': 'cap-height-3',
      '4': 'cap-height-4',
      '5': 'cap-height-5',
    },
    weight: {
      thin: 'text-weight-thin',
      extraLight: 'text-weight-extra-light',
      light: 'text-weight-light',
      normal: 'text-weight-normal',
      medium: 'text-weight-medium',
      semiBold: 'text-weight-semi-bold',
      bold: 'text-weight-bold',
      heavy: 'text-weight-heavy',
    },
    lineHeight: {
      standard: 'text-line-height-standard',
    },
  },
  border: {
    weight: {
      none: 'border-weight-none',
      hairline: 'border-weight-hairline',
      thin: 'border-weight-thin',
      normal: 'border-weight-normal',
      thick: 'border-weight-thick',
    },
  },
  radius: {
    none: 'radius-none',
    small: 'radius-small',
    medium: 'radius-medium',
    large: 'radius-large',
    maximum: 'radius-tight',
  },
  shadow: {
    shallow: 'shadow-shallow',
    medium: 'shadow-medium',
    deep: 'shadow-deep',
  },
  space: {
    '000': 'space-000',
    '00': 'space-00',
    '0': 'space-0',
    '1': 'space-1',
    '2': 'space-2',
    '3': 'space-3',
    '4': 'space-4',
    '5': 'space-5',
    '6': 'space-6',
    '7': 'space-7',
    '8': 'space-8',
    '9': 'space-9',
    '10': 'space-10',
    '11': 'space-11',
    '12': 'space-12',
    '13': 'space-13',
    '14': 'space-14',
    '15': 'space-15',
  },
  boxShadow: {
    '1': 'box-shadow-1',
    '2': 'box-shadow-2',
    '3': 'box-shadow-3',
  },
});

export const genericThemeClass = createTheme(genericVars, {
  text: {
    capHeights: {
      '00': '0.5rem',
      '0': '0.75rem',
      '1': '1rem',
      '2': '1.1rem',
      '3': '1.25rem',
      '4': '1.5rem',
      '5': '2rem',
      // '6': '2.5rem',
      // '7': '3rem',
      // '8': '3.5rem',
    },
    weight: {
      thin: '100',
      extraLight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semiBold: '500',
      bold: '600',
      heavy: '900',
    },
    lineHeight: {
      standard: '1.5',
    },
  },
  border: {
    weight: {
      none: '0',
      hairline: '0.075rem',
      thin: '0.1rem',
      normal: '0.125rem',
      thick: '0.25rem',
    },
  },
  radius: {
    none: '0',
    small: '0.125em',
    medium: '0.25em',
    large: '0.5em',
    maximum: '50%',
  },
  shadow: {
    shallow: '0.05rem',
    medium: '0.05rem',
    deep: '0.05rem',
  },
  space: {
    '000': '-.5rem',
    '00': '-.25rem',
    '0': '0rem',
    '1': '.125rem',
    '2': '.25rem',
    '3': '.5rem',
    '4': '.75rem',
    '5': '1rem',
    '6': '1.25rem',
    '7': '1.5rem',
    '8': '1.75rem',
    '9': '2rem',
    '10': '3rem',
    '11': '4rem',
    '12': '5rem',
    '13': '7.5rem',
    '14': '10rem',
    '15': '15rem',
  },
  boxShadow: {
    '1': '0 0.05rem 0.1rem rgba(0, 0, 0, 0.35)',
    '2': '0 0.5rem 0.1rem rgba(0, 0, 0, 0.35)',
    '3': '0 0.5rem 1rem rgba(0, 0, 0, 0.35)',
  },
});
