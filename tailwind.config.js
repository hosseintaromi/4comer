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
              'secondary': '#083870',
              'info': '#0AE5CA',
              'blue': '#2280EF',
              'stone-150': 'rgb(100 100 100)',
              'stone-550': 'rgb(120 120 120)',
              'neutral-950': 'rgb(20 20 20)',
            },
            spacing: {
              '528': '33rem',
              '921': '57.5625rem',
              'p70': '70%',
            },
            fontFamily: {
              'YesevaOne': ['"YesevaOne"'],
            },
        },
    },
    plugins: [],
}