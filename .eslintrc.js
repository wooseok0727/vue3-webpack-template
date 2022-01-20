module.exports = {
    // 사전에 정의된 전역 변수 설정
  env: {
    browser: true,
    node: true
  },
    // 사용 가능한 규칙 세트
  extends: [
    // vue
    // 'plugin:vue/vue3-essential', // Lv1
    'plugin:vue/vue3-strongly-recommended', // Lv2
    // 'plugin:vue/vue3-recommended', // Lv3
    // js
    'eslint:recommended'
  ],
  // 구문 분석할 패키지 설정(Babel, ES6^ => ES5)
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'semi': ['error', 'never'],
    'quotes': ['error', 'single'],
    'vue/html-closing-bracket-newline': ['error', {
      'singleline': 'never',
      'multiline': 'never'
    }],
    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'always',
        'normal': 'never',
        'component': 'always'
      },
      'svg': 'always',
      'math': 'always'
    }],
    'vue/multi-word-component-names': 'off'
  }
}
