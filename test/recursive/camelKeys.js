const jsConvert = require('../../index');
const obj = require('./object');

console.log(jsConvert.camelKeys(obj));
console.log('============================================');
console.log(jsConvert.camelKeys(obj, { recursive: true }));

/**
{ camelCase: 1,
  uppercase: 2,
  lowercase: 3,
  snakeCase: 4,
  pascalCase: 5,
  titleCase: 6,
  dotCase: 7,
  paramCase: 8,
  sentenceCase: 9,
  pathCase: 10,
  headerCase: 11,
  lv11:
   { camelCase: 1,
     UPPERCASE: 2,
     lowercase: 3,
     snake_case: 4,
     PascalCase: 5,
     'Title Case': 6,
     'dot.case': 7,
     'param-case': 8,
     'Sentence case': 9,
     'path/case': 10,
     'Header-Case': 11 },
  lv12:
   { camelCase: 1,
     UPPERCASE: 2,
     lowercase: 3,
     snake_case: 4,
     PascalCase: 5,
     'Title Case': 6,
     'dot.case': 7,
     'param-case': 8,
     'Sentence case': 9,
     'path/case': 10,
     'Header-Case': 11,
     lv21:
      { camelCase: 1,
        UPPERCASE: 2,
        lowercase: 3,
        snake_case: 4,
        PascalCase: 5,
        'Title Case': 6,
        'dot.case': 7,
        'param-case': 8,
        'Sentence case': 9,
        'path/case': 10,
        'Header-Case': 11,
        lv31: [Object],
        lv32: [Object] },
     lv22:
      { camelCase: 1,
        UPPERCASE: 2,
        lowercase: 3,
        snake_case: 4,
        PascalCase: 5,
        'Title Case': 6,
        'dot.case': 7,
        'param-case': 8,
        'Sentence case': 9,
        'path/case': 10,
        'Header-Case': 11 } } }
============================================
{ camelCase: 1,
  uppercase: 2,
  lowercase: 3,
  snakeCase: 4,
  pascalCase: 5,
  titleCase: 6,
  dotCase: 7,
  paramCase: 8,
  sentenceCase: 9,
  pathCase: 10,
  headerCase: 11,
  lv11:
   { camelCase: 1,
     uppercase: 2,
     lowercase: 3,
     snakeCase: 4,
     pascalCase: 5,
     titleCase: 6,
     dotCase: 7,
     paramCase: 8,
     sentenceCase: 9,
     pathCase: 10,
     headerCase: 11 },
  lv12:
   { camelCase: 1,
     uppercase: 2,
     lowercase: 3,
     snakeCase: 4,
     pascalCase: 5,
     titleCase: 6,
     dotCase: 7,
     paramCase: 8,
     sentenceCase: 9,
     pathCase: 10,
     headerCase: 11,
     lv21:
      { camelCase: 1,
        uppercase: 2,
        lowercase: 3,
        snakeCase: 4,
        pascalCase: 5,
        titleCase: 6,
        dotCase: 7,
        paramCase: 8,
        sentenceCase: 9,
        pathCase: 10,
        headerCase: 11,
        lv31: [Object],
        lv32: [Object] },
     lv22:
      { camelCase: 1,
        uppercase: 2,
        lowercase: 3,
        snakeCase: 4,
        pascalCase: 5,
        titleCase: 6,
        dotCase: 7,
        paramCase: 8,
        sentenceCase: 9,
        pathCase: 10,
        headerCase: 11 } } }
 */
