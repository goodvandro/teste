/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#1A051D",
      "black-trans": "rgba(26, 5, 29, 0.8)",
      "grey-900":"#343434",
      "grey-600":"#848B95",
      "grey-400":"#D7DEE4",
      "grey-300":"#E5E5E5",
      "grey-200":"#F5F5F5",
      "green-light":"#8DBE22",
      red:"#D31030",
      yellow:"#F9C40D",
      "blue":"#65C9D7",
      "green":"#399F37", 
      transparent: "transparent"
    },
    fontSize: {
      '0': "0px",
      xs: "12px",
      xsm: "14px", //basem  | h4m
      sm: "15px", //basem
      base: "16px", // base 
      md:"20px",//h4
      lg: "22px", // h3m
      xl: "28px", // h2m
      "2xl": "30px", // h3
      "2xxl": "40px",
      "3xl": "46px", // h2
      "4xl": "60px", // h1m
      "5xl": "100px", // h1
    },
    fontFamily: {
      ubuntu: ["Ubuntu", "sans-serif"],
      dancing:["Dancing Script", "cursive"]
    },
    boxShadow: {
      default: "0px 1px 3px rgba(0, 0, 0, 0.15)",
      md: "0px 1px 5px 1px rgba(0, 0, 0, 0.15)",
      lg:"0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0px 30px 60px rgba(0, 0, 0, 0.25)"
    },
    minHeight: {
      '60': '60px',
      '85': '85px',
      'screen': '100vh'
    },
    backgroundPosition: {
      bottom: 'bottom', 
      center: 'center',
      left: 'left',
     'left-bottom': 'left bottom',
     'left-top': 'left top',
      right: 'right',
      'right-top-6': 'right 6rem top 4rem',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
      'right-bottom-2': 'right 2rem bottom 2rem',
      'right-top-2': 'right 2rem top 2rem',
      'right-center-2': 'right 2rem center',
      'left-bottom-2': 'left 2rem bottom 0rem',
      'left-top-2': 'left 2rem top 2rem',
      'left-center-2': 'left 2rem center',

    },
    rotate:{
      "-12": "-12.22deg",
      "12": "12.22deg"
    },
    extend: {
      zIndex:{
        '45': '45'
      },
      margin: {
        '-10p': '-10%',
        '-15p': '-15%',
        '10p': '10%',
        '5p': '5%',
        '1-3':'0.35rem', 
        '1-5':'0.45rem',
        '11': '2.75rem'
       },
       padding: {
        '5-5':'1.6rem',
        '11': '2.75rem'
       },
      maxWidth: {
        '80': '80px',
        '120': '120px',
        '130': '130px',
        '260': '260px',
        '380': '380px',
        '500': '500px',
        '600': '600px',
        '666': '666px'
      }, 
      inset: {
        '-10': '-10%',
        '10': '10%',
        "0": '0rem',
        "0-2": '0.2rem',
        "0-5": '0.5rem',
        "-14": '-3.5rem',
        "14": '3.5rem',
        "1-5": '1.5rem',
        "20":"20px",
        "22": '22%',
        "24": '24%',
        "30": '40px',
        "40": '50px',
        "42": '42px',
        "55": '55px',
        "62": '62px',   
        "68": '78px',
        "69": '69px',
        "80": '90px'
       },
      spacing: {
        "2.5": "0.625rem",
        "3.5": "0.875rem",
        "4/5": "1.10rem", //18px
        "7": "1.75rem", //28px
        "9": "2.187rem", //35px
        "12": "3rem",
        "13": "3.125rem", // 50px
        "14": "3.5rem", // 56px
        "15": "3.75rem", // 60px
        "17": "4.25rem", // 72px
        "18": "4.5rem", // 72px
        "23": "5.625rem", //90px USADO
        "26": "6.25rem", //100px
        "28": "7rem", //115px
        "30": "7.5rem", //120px,
        "34": "8.5rem", //136px,
        "35": "8.75rem", //140px,
        "36": "9rem", //144px,
        "45": "11.25rem", //180px
        "50": "14rem", //180px
        "64": "16rem", //256px
        "68": "17rem",
        "80": "20rem",
        "95": "23.75rem", //380px
        "100": "25rem",
        "120": "30rem",
        "154": "38.5rem",
        "170": "44rem",
        "96": "96px",
        "120p": "120px",
        "160p": "160px",
        "200": "200px",
        "215": "215px",
        "250": "250px",
        "270": "270px",
        "290": "290px",
        "315": "315px",
        "360": "360px",
        "400": "400px"


      },
      opacity: {
        "80": "0.8"
      },
      borderWidth: {
        "3": "3px"
      },
      bottom: {},
      lineHeight: {
        xsm: "14px",
      },
      width: {
        '1/14': '7.142857%',
        '2/14': '14.28571%',
        '3/14': '21.42857%',
        '4/14': '28.57142857%',
        '5/14': '35.7142857%',
        '6/14': '42.857142%',
        '7/14': '50%',
        '8/14': '57.142857%',
        '9/14': '64.2857142%',
        '10/14': '71.428571%',
        '11/14': '78.57142%',
        '12/14': '85.71428571%',
        '13/14': '92.857142%',
        '1/10': '10%',
        '2/10': '20%',
        '3/10': '30%',
        '4/10': '40%',
        '5/10': '50%',
        '6/10': '60%',
        '7/10': '70%',
        '8/10': '80%',
        '9/10': '90%',
        '300': '300px',
      },
      height: {
        '1/5'	: '20%',
        '2/5'	: '40%',
        '3/5'	: '60%',
        '4/5'	: '80%',
        '50' : '50px',
        '78': '78px',
        '115': '115px',
        '130': '130px',
        '140': '140px',
        '175': '175px',
        '185': '185px',
        '200': '200px',
        '230': '230px',
        '450': '450px',

      } 
    }
  },
  variants: {
    transform: ["responsive", "hover", "focus", "active", "group-hover"],
    scale: ["responsive", "hover", "focus", "active", "group-hover"],
    backgroundColor: ["responsive", "hover", "focus", "active"],
    borderColor: ["responsive", "hover", "focus", "active"],
    borderWidth: ["responsive", "hover", "focus", "active"],
    outline: ["focus", "active"],
    zIndex: ["responsive", "hover"]
  },
  corePlugins: {
    container: false,
    outline: false
  },
  plugins: [
    function({ addComponents }) {
      addComponents({
        ".container": {
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          "@screen sm": {
            maxWidth: "640px"
          },
          "@screen md": {
            maxWidth: "768px"
          },
          "@screen lg": {
            maxWidth: "1024px"
          },
          "@screen xl": {
            maxWidth: "1200px",
            paddingLeft: "0rem",
            paddingRight: "0rem"
          }
        },
        ".container-small": {
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          "@screen sm": {
            maxWidth: "640px"
          },
          "@screen md": {
            maxWidth: "768px"
          },
          "@screen lg": {
            maxWidth: "780px"
          },
          "@screen xl": {
            maxWidth: "955px",
            paddingLeft: "0rem",
            paddingRight: "0rem"
          }
        },
        ".container-form": {
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          "@screen sm": {
            maxWidth: "640px"
          },
          "@screen md": {
            maxWidth: "768px"
          },
          "@screen lg": {
            maxWidth: "780px"
          },
          "@screen xl": {
            maxWidth: "880px",
            paddingLeft: "0rem",
            paddingRight: "0rem"
          }
        },
        ".container-slider": {
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          "@screen sm": {
            maxWidth: "400px",
            paddingLeft: "1rem",
            paddingRight: "1rem"
          },
          "@screen md": {
            maxWidth: "680px",
            paddingLeft: "1rem",
            paddingRight: "1rem"
          },
          "@screen lg": {
            maxWidth: "985px",
            paddingLeft: "1rem",
            paddingRight: "1rem"
          },
          "@screen xl": {
            maxWidth: "985px",
            paddingLeft: "0rem",
            paddingRight: "0rem"
          }
        }
      } 
      );
    }
  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === "production",
    content: [
      "components/**/*.vue",
      "layouts/**/*.vue",
      "pages/**/*.vue",
      "plugins/**/*.js",
      "nuxt.config.js"
    ],
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
  }
};
