export const designSystem = {
  colors: {
    // Cores principais
    primary: {
      main: '#7C5DFA',      // Roxo principal usado no botão e elementos de destaque
      light: '#9B7FFF',     // Versão mais clara do roxo
      dark: '#5B3FD6'       // Versão mais escura do roxo
    },
    
    // Cores neutras
    neutral: {
      white: '#FFFFFF',
      background: '#F8F8FB', // Cor do fundo da aplicação
      gray100: '#F3F3F5',    // Cinza mais claro
      gray200: '#E4E4E7',    // Usado em bordas e separadores
      gray300: '#94959A',    // Texto secundário
      gray400: '#373B53',    // Texto principal
      black: '#0C0E16'
    },

    // Estados
    state: {
      success: '#33D69F',
      error: '#FF5631',
      warning: '#FF8F00'
    }
  },

  typography: {
    fontFamily: "'Inter', sans-serif",
    fontWeights: {
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700
    },
    sizes: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem'   // 24px
    }
  },

  spacing: {
    xs: '0.25rem',      // 4px
    sm: '0.5rem',       // 8px
    md: '1rem',         // 16px
    lg: '1.5rem',       // 24px
    xl: '2rem',         // 32px
    '2xl': '2.5rem'     // 40px
  },

  borderRadius: {
    sm: '0.25rem',      // 4px
    md: '0.5rem',       // 8px
    lg: '1rem',         // 16px
    full: '9999px'      // Botões circulares
  },

  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1)'
  }
}
