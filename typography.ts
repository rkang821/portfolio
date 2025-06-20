import { PluginUtils } from 'tailwindcss/types/config'

export default function typographyStyles({ theme }: PluginUtils) {
  return {
    invert: {
      css: {
        '--tw-prose-body': 'var(--tw-prose-invert-body)',
        '--tw-prose-headings': 'var(--tw-prose-invert-headings)',
        '--tw-prose-subheadings': 'var(--tw-prose-invert-subheadings)',
        '--tw-prose-colorheadings': 'var(--tw-prose-invert-colorheadings)',
        '--tw-prose-links': 'var(--tw-prose-invert-links)',
        '--tw-prose-links-hover': 'var(--tw-prose-invert-links-hover)',
        '--tw-prose-underline': 'var(--tw-prose-invert-underline)',
        '--tw-prose-underline-hover': 'var(--tw-prose-invert-underline-hover)',
        '--tw-prose-bold': 'var(--tw-prose-invert-bold)',
        '--tw-prose-quote-borders': 'var(--tw-prose-invert-quote-borders)',
        '--tw-prose-counters': 'var(--tw-prose-invert-counters)',
        '--tw-prose-bullets': 'var(--tw-prose-invert-bullets)',
        '--tw-prose-hr': 'var(--tw-prose-invert-hr)',
        '--tw-prose-code': 'var(--tw-prose-invert-code)',
        '--tw-prose-code-bg': 'var(--tw-prose-invert-code-bg)',
        '--tw-prose-pre-code': 'var(--tw-prose-invert-pre-code)',
        '--tw-prose-pre-bg': 'var(--tw-prose-invert-pre-bg)',
        '--tw-prose-pre-border': 'var(--tw-prose-invert-pre-border)',
      },
    },
    DEFAULT: {
      css: {
        '--tw-prose-body': theme('colors.zinc.500'),
        '--tw-prose-headings': theme('colors.zinc.600'),
        '--tw-prose-subheadings': theme('colors.zinc.600'),
        '--tw-prose-colorheadings': theme('colors.blue.500'),
        '--tw-prose-links': theme('colors.zinc.500'),
        '--tw-prose-links-hover': theme('colors.blue.500'),
        '--tw-prose-underline': theme('colors.blue.500'),
        '--tw-prose-underline-hover': theme('colors.blue.300'),
        '--tw-prose-bold': theme('colors.zinc.600'),
        '--tw-prose-quote-borders': theme('colors.blue.500 / 0.4'),
        '--tw-prose-counters': theme('colors.blue.500'),
        '--tw-prose-bullets': theme('colors.blue.500'),
        '--tw-prose-hr': theme('colors.zinc.400 / 0.4'),
        '--tw-prose-pre-code': theme('colors.zinc.100'),
        '--tw-prose-pre-bg': theme('colors.zinc.600'),
        '--tw-prose-pre-border': 'transparent',

        '--tw-prose-invert-body': theme('colors.zinc.400'),
        '--tw-prose-invert-headings': theme('colors.zinc.200'),
        '--tw-prose-invert-subheadings': theme('colors.zinc.400'),
        '--tw-prose-invert-colorheadings': theme('colors.blue.300'),
        '--tw-prose-invert-links': theme('colors.zinc.300'),
        '--tw-prose-invert-links-hover': theme('colors.blue.300'),
        '--tw-prose-invert-underline': theme('colors.blue.300'),
        '--tw-prose-invert-underline-hover': theme('colors.blue.500'),
        '--tw-prose-invert-bold': theme('colors.zinc.300'),
        '--tw-prose-invert-quote-borders': theme('colors.blue.300 / 0.4'),
        '--tw-prose-invert-counters': theme('colors.blue.300'),
        '--tw-prose-invert-bullets': theme('colors.blue.300'),
        '--tw-prose-invert-hr': theme('colors.zinc.700 / 0.4'),
        '--tw-prose-invert-pre-code': theme('colors.zinc.100'),
        '--tw-prose-invert-pre-bg': theme('colors.zinc.500'),
        '--tw-prose-invert-pre-border': theme('colors.zinc.200 / 0.1'),

        // Base
        color: 'var(--tw-prose-body)',
        lineHeight: theme('lineHeight.7'),
        '> *': {
          margin: `${theme('spacing.1')} ${theme('spacing.2')}`,
          '@screen sm': {
            margin: `${theme('spacing.0')} ${theme('spacing.3')}`,
          },
        },
        p: {
          fontSize: theme('fontSize.sm'),
          lineHeight: 1.7,
          '@screen sm': {
            fontSize: theme('fontSize.base'),
            lineHeight: 1.9,
            letterSpacing: theme('letterSpacing.tight'),
          },
          overflowWrap: 'break-word',
        },
        // Headings
        h2: {
          color: 'var(--tw-prose-headings)',
          fontWeight: theme('fontWeight.bold'),
          fontSize: theme('fontSize.3xl'),
          textAlign: 'center',
          lineHeight: theme('lineHeight.7'),
          letterSpacing: theme('letterSpacing.tight'),
          margin: `${theme('spacing.6')} ${theme('spacing.0')}`,
          '@screen sm': {
            fontSize: theme('fontSize.4xl'),
            textAlign: 'left',
          },
        },
        h3: {
          color: 'var(--tw-prose-subheadings)',
          fontStyle: 'italic',
          fontSize: theme('fontSize.base'),
          textAlign: 'center',
          lineHeight: theme('lineHeight.7'),
          letterSpacing: theme('letterSpacing.tight'),
          marginTop: theme('spacing.3'),
          '@screen sm': {
            fontSize: theme('fontSize.lg'),
            lineHeight: theme('lineHeight.7'),
            textAlign: 'left',
          },
        },
        h4: {
          color: 'var(--tw-prose-colorheadings)',
          fontWeight: theme('fontWeight.bold'),
          fontSize: theme('fontSize.lg'),
          lineHeight: theme('lineHeight.7'),
          marginTop: theme('spacing.5'),
          marginBottom: theme('spacing.3'),
          '@screen sm': {
            fontSize: theme('fontSize.xl'),
          },
        },
        h5: {
          color: 'var(--tw-prose-subheadings)',
          fontWeight: theme('fontWeight.semibold'),
          fontSize: theme('fontSize.base'),
          lineHeight: theme('lineHeight.7'),
          textAlign: 'center',
          marginTop: theme('spacing.3'),
          marginBottom: theme('spacing.3'),
          '@screen sm': {
            fontSize: theme('fontSize.lg'),
            textAlign: 'left',
          },
        },
        h6: {
          color: 'var(--tw-prose-headings)',
          fontWeight: theme('fontWeight.semibold'),
          fontSize: theme('fontSize.xl'),
          textAlign: 'left',
          lineHeight: theme('lineHeight.7'),
          letterSpacing: theme('letterSpacing.tight'),
          margin: `${theme('spacing.0')} ${theme('spacing.0')}`,
          '@screen sm': {
            fontSize: theme('fontSize.2xl'),
            textAlign: 'center',
          },
        },

        // Inline elements
        a: {
          color: 'var(--tw-prose-links)',
          fontWeight: theme('fontWeight.semibold'),
          textDecoration: 'underline',
          textDecorationColor: 'var(--tw-prose-underline)',
          transitionProperty: 'color, text-decoration-color',
          transitionDuration: theme('transitionDuration.150'),
          transitionTimingFunction: theme('transitionTimingFunction.in-out'),
        },
        'a:hover': {
          color: 'var(--tw-prose-links-hover)',
          textDecorationColor: 'var(--tw-prose-underline-hover)',
        },
        strong: {
          color: 'var(--tw-prose-bold)',
          fontWeight: theme('fontWeight.semibold'),
        },

        // Quotes
        blockquote: {
          paddingLeft: theme('spacing.6'),
          borderLeftWidth: '0.15rem',
          borderLeftColor: 'var(--tw-prose-quote-borders)',
          quotes: '"\\201C""\\201D""\\2018""\\2019"',
          fontStyle: 'italic',
          fontWeight: '500',
        },

        // Lists
        ul: {
          listStyleType: 'circle',
        },
        ol: {
          listStyleType: 'decimal',
        },
        'ul, ol': {
          marginTop: theme('spacing.2'),
          marginBottom: theme('spacing.3'),
          paddingLeft: theme('spacing.4'),
          letterSpacing: theme('letterSpacing.tight'),
          lineHeight: 1.7,
          '@screen sm': {
            paddingLeft: theme('spacing.6'),
            lineHeight: 2,
            letterSpacing: theme('letterSpacing.tight'),
          },
        },
        li: {
          paddingLeft: theme('spacing[2.5]'),
          fontSize: theme('fontSize.sm'),
          lineHeight: 1.7,
          '@screen sm': {
            lineHeight: 2,
            paddingLeft: theme('spacing[3.5]'),
            fontSize: theme('fontSize.base'),
          },
        },
        'li::marker': {
          fontSize: theme('fontSize.sm'),
          fontWeight: theme('fontWeight.semibold'),
          '@screen sm': {
            fontSize: theme('fontSize.base'),
          },
        },
        'ol > li::marker': {
          color: 'var(--tw-prose-counters)',
        },
        'ul > li::marker': {
          color: 'var(--tw-prose-bullets)',
        },
        // Code blocks
        pre: {
          color: 'var(--tw-prose-pre-code)',
          fontSize: theme('fontSize.xs')[0],
          fontWeight: theme('fontWeight.medium'),
          backgroundColor: 'var(--tw-prose-pre-bg)',
          borderRadius: theme('borderRadius.3xl'),
          lineHeight: 1.3,
          padding: theme('spacing.5'),
          overflowWrap: 'break-word',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
          border: '1px solid',
          borderColor: 'var(--tw-prose-pre-border)',
          '@screen sm': {
            lineHeight: 1.8,
            fontSize: theme('fontSize.sm'),
            padding: theme('spacing.8'),
          },
        },
        'pre code': {
          display: 'inline',
          color: 'inherit',
          fontSize: 'inherit',
          fontWeight: 'inherit',
          backgroundColor: 'transparent',
          borderRadius: 0,
          padding: 0,
        },

        // Horizontal rules
        hr: {
          marginTop: theme('spacing.16'),
          marginBottom: theme('spacing.16'),
          borderTopWidth: '1px',
          borderColor: 'var(--tw-prose-hr)',
          '@screen lg': {
            marginLeft: `calc(${theme('spacing.12')} * -0.5)`,
            marginRight: `calc(${theme('spacing.12')} * -0.5)`,
          },
        },

        // Tables
        table: {
          width: '100%',
          tableLayout: 'auto',
          textAlign: 'left',
          fontSize: theme('fontSize.sm')[0],
        },
        thead: {
          borderBottomWidth: '1px',
          borderBottomColor: 'var(--tw-prose-th-borders)',
        },
        'thead th': {
          color: 'var(--tw-prose-headings)',
          fontWeight: theme('fontWeight.semibold'),
          verticalAlign: 'bottom',
          paddingBottom: theme('spacing.2'),
        },
        'thead th:not(:first-child)': {
          paddingLeft: theme('spacing.2'),
        },
        'thead th:not(:last-child)': {
          paddingRight: theme('spacing.2'),
        },
        'tbody tr': {
          borderBottomWidth: '1px',
          borderBottomColor: 'var(--tw-prose-td-borders)',
        },
        'tbody tr:last-child': {
          borderBottomWidth: 0,
        },
        'tbody td': {
          verticalAlign: 'baseline',
        },
        tfoot: {
          borderTopWidth: '1px',
          borderTopColor: 'var(--tw-prose-th-borders)',
        },
        'tfoot td': {
          verticalAlign: 'top',
        },
        ':is(tbody, tfoot) td': {
          paddingTop: theme('spacing.2'),
          paddingBottom: theme('spacing.2'),
        },
        ':is(tbody, tfoot) td:not(:first-child)': {
          paddingLeft: theme('spacing.2'),
        },
        ':is(tbody, tfoot) td:not(:last-child)': {
          paddingRight: theme('spacing.2'),
        },
      },
    },
  }
}
