module.exports = {
    "env": {
      "browser": true,
      "commonjs": true,
      "node": true
    },
    "parserOptions": {
      "sourceType": "module",
      "ecmaVersion": 9
    },
   
    "parser": "babel-eslint",
    "settings": {
      "react": {
        "pragma": "dom", // Pragma to use, default to "React"
      },
      /**
       * Writer and substance are not in node_modules.
       */
  
      "import/resolver": {
        "webpack": {
          "config": "webpack.config.js",
        },
      },
    },
    "plugins": ["react"],
    "rules": {
      "react/prop-types": 0,
  
      /**
       * Substance uses only string refs.
       */
      "react/no-string-refs": 0,
  
      /**
       * Allow console logging.
       */
      "no-console": [2, { allow: ["warn", "info", "error", "assert"] }],
  
      /**
       * Allow reassigning function object parameter properties.
       * Some writer apis expect this (ex. newsml converter export and import methods).
       */
      "no-param-reassign": ['error', {"props": false }],
  
      /**
       * Substance lifecycle methods are named differently than React's.
       */
      "react/sort-comp": 0,
  
      /**
      * React doesn't support objects for `style` prop.
      */
      "react/style-prop-object": 0,
  
      /**
       * Substance uses '_' for 'private' methods (like this.__isRendering__).
       */
      "no-underscore-dangle": 0,
  
      "import/prefer-default-export": 0,
  
      "prefer-destructuring": "off",
  
      /**
       * Disable all jsx-a11y rules that airbnb config uses
       * https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/rules/react-a11y.js
       */
      'jsx-a11y/anchor-has-content': 0,
      'jsx-a11y/aria-role': 0,
      'jsx-a11y/aria-props': 0,
      'jsx-a11y/aria-proptypes': 0,
      'jsx-a11y/aria-unsupported-elements': 0,
      'jsx-a11y/href-no-hash': 0,
      'jsx-a11y/alt-text': 0,
      'jsx-a11y/img-redundant-alt': 0,
      'jsx-a11y/label-has-for': 0,
      'jsx-a11y/mouse-events-have-key-events': 0,
      'jsx-a11y/no-access-key': 0,
      'jsx-a11y/no-onchange': 0,
      'jsx-a11y/interactive-supports-focus': 0,
      'jsx-a11y/role-has-required-aria-props': 0,
      'jsx-a11y/role-supports-aria-props': 0,
      'jsx-a11y/tabindex-no-positive': 0,
      'jsx-a11y/heading-has-content': 0,
      'jsx-a11y/html-has-lang': 0,
      'jsx-a11y/lang': 0,
      'jsx-a11y/no-distracting-elements': 0,
      'jsx-a11y/scope': 0,
      'jsx-a11y/click-events-have-key-events': 0,
      'jsx-a11y/no-static-element-interactions': 0,
      'jsx-a11y/no-noninteractive-element-interactions': 0,
      'jsx-a11y/accessible-emoji': 0,
      'jsx-a11y/aria-activedescendant-has-tabindex': 0,
      'jsx-a11y/iframe-has-title': 0,
      'jsx-a11y/no-autofocus': 0,
      'jsx-a11y/no-redundant-roles': 0,
      'jsx-a11y/media-has-caption': 0,
      'jsx-a11y/no-interactive-element-to-noninteractive-role': 0,
      'jsx-a11y/no-noninteractive-element-to-interactive-role': 0,
      'jsx-a11y/no-noninteractive-tabindex': 0,
      'jsx-a11y/anchor-is-valid': 0
    }
  };
  