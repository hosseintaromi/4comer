module.exports = {
    content: ["*.{html,js}"],
    theme: {
        extend: {
            boxShadow: {
                '3xl': '0px 10px 50px 0px #8B8B8B1A',
                'slide': '0px 0px 1px 0px #00000038',
            },
            colors: {
              'primary': '#FC8517',
              'primary-light': '#FED1A8',
              'primary-lighter': '#FFF0E2',
              'secondary': '#083870',
              'info': '#0AE5CA',
              'blue': '#2280EF',
              'stone-15': 'rgb(207 207 207)',
              'stone-25': 'rgb(231 231 231)',
              'stone-55': 'rgb(80 80 80)',
              'stone-150': 'rgb(100 100 100)',
              'stone-450': 'rgb(60 60 60)',
              'stone-550': 'rgb(120 120 120)',
              'neutral-950': 'rgb(20 20 20)',
              'indigo-350': 'rgb(249 251 255)',
              'rouged-light': '#FE7052',
              'rouged-dark': '#FB4073',
            },
            spacing: {
              '29': '7.75rem',
              '492': '30.75rem',
              '528': '33rem',
              '523': '32.6875rem',
              '654': '40.875rem',
              '921': '57.5625rem',
              'p50': '50%',
              'p70': '70%',
              '1100': '68.75rem',
            },
            fontFamily: {
              'YesevaOne': ['"YesevaOne"'],
            },
            fontSize: {
              'cm': '1.625rem'
            },
            lineHeight: {
              '55': '3.4375rem',
            },
            flex: {
              '56': '1 1 14rem',
              '28': '1 1 7rem',
            },
            borderRadius: {
              'extra': '116px'
            }
        },
    },
    plugins: [],
}