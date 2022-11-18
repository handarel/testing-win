/* eslint-disable max-lines */
/* eslint-disable unicorn/prefer-module */

const restrictedGlobals = require('confusing-browser-globals');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  rules: {
    /**
     * Enforces getter/setter pairs in objects and classes.
     * https://eslint.org/docs/rules/accessor-pairs
     */
    'accessor-pairs': ['off'],

    /**
     * Enforces line breaks after opening and before closing array brackets.
     * https://eslint.org/docs/rules/array-bracket-newline
     */
    'array-bracket-newline': [
      'error',
      {
        multiline: true,
        minItems: 5,
      },
    ],

    /**
     * Disallow or enforce spaces inside of brackets.
     * https://eslint.org/docs/rules/array-bracket-spacing
     */
    'array-bracket-spacing': [
      'error',
      'never',
      {
        singleValue: false,
        arraysInArrays: false,
        objectsInArrays: false,
      },
    ],

    /**
     * Enforces return statements in callbacks of array's methods.
     * https://eslint.org/docs/rules/array-callback-return
     */
    'array-callback-return': [
      'error',
      {
        allowImplicit: true,
        checkForEach: true,
      },
    ],

    /**
     * Enforce line breaks between array elements.
     * https://eslint.org/docs/rules/array-element-newline
     */
    'array-element-newline': [
      'error',
      {
        multiline: true,
        minItems: 5,
      },
    ],

    /**
     * Require braces in arrow function body.
     * https://eslint.org/docs/rules/arrow-body-style
     */
    'arrow-body-style': [
      'error',
      'as-needed',
      {
        requireReturnForObjectLiteral: false,
      },
    ],

    /**
     * Require parens in arrow function arguments.
     * https://eslint.org/docs/rules/arrow-parens
     */
    'arrow-parens': ['error', 'always'],

    /**
     * Require space before/after arrow function's arrow.
     * https://eslint.org/docs/rules/arrow-spacing
     */
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],

    /**
     * Treat var as Block Scoped.
     * https://eslint.org/docs/rules/block-scoped-var
     */
    'block-scoped-var': ['error'],

    /**
     * Disallow or enforce spaces inside of blocks after opening block and before closing block.
     * https://eslint.org/docs/rules/block-spacing
     */
    'block-spacing': ['error', 'always'],

    /**
     * Require Brace Style.
     * https://eslint.org/docs/rules/brace-style
     */
    'brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true,
      },
    ],

    /**
     * Require CamelCase.
     * https://eslint.org/docs/rules/camelcase
     */
    'camelcase': [
      'error',
      {
        properties: 'always',
        ignoreImports: false,
        ignoreGlobals: false,
        ignoreDestructuring: false,
      },
    ],

    /**
     * Enforce or disallow capitalization of the first letter of a comment.
     * https://eslint.org/docs/rules/capitalized-comments
     */
    'capitalized-comments': ['off'],

    /**
     * Enforce that class methods utilize this.
     * https://eslint.org/docs/rules/class-methods-use-this
     */
    'class-methods-use-this': [
      'error',
      {
        enforceForClassFields: true,
      },
    ],

    /**
     * Require or disallow trailing commas.
     * https://eslint.org/docs/rules/comma-dangle
     */
    'comma-dangle': ['error', 'always-multiline'],

    /**
     * Enforces spacing around commas.
     * https://eslint.org/docs/rules/comma-spacing
     */
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],

    /**
     * Comma style.
     * https://eslint.org/docs/rules/comma-style
     */
    'comma-style': ['error', 'last'],

    /**
     * Limit Cyclomatic Complexity.
     * https://eslint.org/docs/rules/complexity
     */
    'complexity': [
      'error',
      {
        max: 10,
      },
    ],

    /**
     * Disallow or enforce spaces inside of computed properties.
     * https://eslint.org/docs/rules/computed-property-spacing
     */
    'computed-property-spacing': [
      'error',
      'never',
      {
        enforceForClassMembers: true,
      },
    ],

    /**
     * Require return statements to either always or never specify values.
     * https://eslint.org/docs/rules/consistent-return
     */
    'consistent-return': [
      'error',
      {
        treatUndefinedAsUnspecified: false,
      },
    ],

    /**
     * ! See rule '@typescript-eslint/no-this-alias'
     * Require Consistent This.
     * https://eslint.org/docs/rules/consistent-this
     */
    'consistent-this': ['error', 'self'],

    /**
     * * Recommended Rule
     * Verify calls of super() in constructors.
     * https://eslint.org/docs/rules/constructor-super
     */
    'constructor-super': ['error'],

    /**
     * Require Following Curly Brace Conventions.
     * https://eslint.org/docs/rules/curly
     */
    'curly': ['error', 'multi-line'],

    /**
     * Require Default Case in Switch Statements.
     * https://eslint.org/docs/rules/default-case
     */
    'default-case': [
      'error',
      {
        commentPattern: '^skip\\sdefault',
      },
    ],

    /**
     * Enforce default clauses in switch statements to be last.
     * https://eslint.org/docs/rules/default-case-last
     */
    'default-case-last': ['error'],

    /**
     * Enforce default parameters to be last.
     * https://eslint.org/docs/rules/default-param-last
     */
    'default-param-last': ['error'],

    /**
     * Enforce newline before and after dot.
     * https://eslint.org/docs/rules/dot-location
     */
    'dot-location': ['error', 'property'],

    /**
     * Require Dot Notation.
     * https://eslint.org/docs/rules/dot-notation
     */
    'dot-notation': [
      'error',
      {
        allowKeywords: true,
      },
    ],

    /**
     * Require or disallow newline at the end of files.
     * https://eslint.org/docs/rules/eol-last
     */
    'eol-last': ['error', 'always'],

    /**
     * Require === and !==.
     * https://eslint.org/docs/rules/eqeqeq
     */
    'eqeqeq': ['error', 'always'],

    /**
     * * Recommended Rule
     * Enforce "for" loop update clause moving the counter in the right direction.
     * https://eslint.org/docs/rules/for-directions
     */
    'for-direction': ['error'],

    /**
     * Require or disallow spacing between function identifiers and their invocations.
     * https://eslint.org/docs/rules/func-call-spacing
     */
    'func-call-spacing': ['error', 'never'],

    /**
     * Require function names to match the name of the variable or property to which they are assigned.
     * https://eslint.org/docs/rules/func-name-matching
     */
    'func-name-matching': [
      'error',
      'always',
      {
        considerPropertyDescriptor: true,
        includeCommonJSModuleExports: false,
      },
    ],

    /**
     * Require or disallow named function expressions.
     * https://eslint.org/docs/rules/func-names
     */
    'func-names': [
      'error',
      'always',
      {
        generators: 'always',
      },
    ],

    /**
     * Enforce the consistent use of either function declarations or expressions.
     * https://eslint.org/docs/rules/func-style
     */
    'func-style': [
      'error',
      'declaration',
      {
        allowArrowFunctions: true,
      },
    ],

    /**
     * Enforce line breaks between arguments of a function call.
     * https://eslint.org/docs/rules/function-call-argument-newline
     */
    'function-call-argument-newline': ['error', 'consistent'],

    /**
     * Enforce consistent line breaks inside function parentheses.
     * https://eslint.org/docs/rules/function-paren-newline
     */
    'function-paren-newline': ['error', 'multiline'],

    /**
     * Enforce spacing around the * in generator functions.
     * https://eslint.org/docs/rules/generator-star-spacing
     */
    'generator-star-spacing': ['error', 'after'],

    /**
     * * Recommended Rule
     * Enforces that a return statement is present in property getters.
     * https://eslint.org/docs/rules/getter-return
     */
    'getter-return': [
      'error',
      {
        allowImplicit: false,
      },
    ],

    /**
     * Require grouped accessor pairs in object literals and classes.
     * https://eslint.org/docs/rules/grouped-accessor-pairs
     */
    'grouped-accessor-pairs': ['off'],

    /**
     * Require Guarding for-in.
     * https://eslint.org/docs/rules/guard-for-in
     */
    'guard-for-in': ['error'],

    /**
     * Disallow specified identifiers.
     * https://eslint.org/docs/rules/id-denylist
     */
    'id-denylist': ['off'],

    /**
     * Enforce minimum and maximum identifier lengths.
     * https://eslint.org/docs/rules/id-length
     */
    'id-length': [
      'error',
      {
        min: 2,
        properties: 'always',
        exceptions: ['_', 'e', 'i', 'j'],
      },
    ],

    /**
     * Require identifiers to match a specified regular expression.
     * https://eslint.org/docs/rules/id-match
     */
    'id-match': ['off'],

    /**
     * Enforce the location of arrow function bodies with implicit returns.
     * https://eslint.org/docs/rules/implicit-arrow-linebreak
     */
    'implicit-arrow-linebreak': ['error', 'beside'],

    /**
     * Enforce consistent indentation.
     * https://eslint.org/docs/rules/indent
     */
    'indent': [
      'error',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        MemberExpression: 1,
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        offsetTernaryExpressions: false,
        ignoreComments: false,
        FunctionDeclaration: {
          parameters: 1,
          body: 1,
        },
        FunctionExpression: {
          parameters: 1,
          body: 1,
        },
        StaticBlock: {
          body: 1,
        },
        CallExpression: {
          arguments: 1,
        },
      },
    ],

    /**
     * Require or disallow initialization in variable declarations.
     * https://eslint.org/docs/rules/init-declarations
     */
    'init-declarations': ['error', 'always'],

    /**
     * Enforce the consistent use of either double or single quotes in JSX attributes.
     * https://eslint.org/docs/rules/jsx-quotes
     */
    'jsx-quotes': ['off'],

    /**
     * Enforce consistent spacing between keys and values in object literal properties.
     * https://eslint.org/docs/rules/key-spacing
     */
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
        mode: 'strict',
      },
    ],

    /**
     * Enforce consistent spacing before and after keywords.
     * https://eslint.org/docs/rules/keyword-spacing
     */
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],

    /**
     * Enforce position of line comments.
     * https://eslint.org/docs/rules/line-comment-position
     */
    'line-comment-position': [
      'error',
      {
        position: 'above',
      },
    ],

    /**
     * Enforce consistent linebreak style.
     * https://eslint.org/docs/rules/linebreak-style
     */
    'linebreak-style': ['off'],

    /**
     * Require empty lines around comments.
     * https://eslint.org/docs/rules/lines-around-comment
     */
    'lines-around-comment': [
      'error',
      {
        beforeBlockComment: true,
        afterBlockComment: false,
        beforeLineComment: false,
        afterLineComment: false,
        allowBlockStart: true,
        allowBlockEnd: true,
        allowObjectStart: true,
        allowObjectEnd: true,
        allowArrayStart: true,
        allowArrayEnd: true,
        allowClassStart: true,
        allowClassEnd: true,
      },
    ],

    /**
     * Require or disallow an empty line between class members.
     * https://eslint.org/docs/rules/lines-between-class-members
     */
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],

    /**
     * Require or disallow logical assignment logical operator shorthand.
     * https://eslint.org/docs/rules/logical-assignment-operators
     */
    'logical-assignment-operators': [
      'error',
      'always',
      {
        enforceForIfStatements: true,
      },
    ],

    /**
     * Enforce a maximum number of classes per file.
     * https://eslint.org/docs/rules/max-classes-per-file
     */
    'max-classes-per-file': [
      'error',
      {
        max: 1,
        ignoreExpressions: true,
      },
    ],

    /**
     * Enforce a maximum depth that blocks can be nested.
     * https://eslint.org/docs/rules/max-depth
     */
    'max-depth': [
      'error',
      {
        max: 4,
      },
    ],

    /**
     * Enforce a maximum line length.
     * https://eslint.org/docs/rules/max-len
     */
    'max-len': [
      'error',
      {
        code: 80,
        tabWidth: 2,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],

    /**
     * Enforce a maximum file length.
     * https://eslint.org/docs/rules/max-lines
     */
    'max-lines': [
      'error',
      {
        max: 300,
        skipBlankLines: false,
        skipComments: false,
      },
    ],

    /**
     * Enforce a maximum function length.
     * https://eslint.org/docs/rules/max-lines-per-function
     */
    'max-lines-per-function': [
      'error',
      {
        max: 50,
        skipBlankLines: false,
        skipComments: true,
        IIFEs: true,
      },
    ],

    /**
     * Enforce a maximum depth that callbacks can be nested.
     * https://eslint.org/docs/rules/max-nested-callbacks
     */
    'max-nested-callbacks': [
      'off',
      {
        max: 10,
      },
    ],

    /**
     * Enforce a maximum number of parameters in function definitions.
     * https://eslint.org/docs/rules/max-params
     */
    'max-params': [
      'error',
      {
        max: 5,
      },
    ],

    /**
     * Enforce a maximum number of statements allowed in function blocks.
     * https://eslint.org/docs/rules/max-statements
     */
    'max-statements': [
      'error',
      {
        max: 20,
      },
      {
        ignoreTopLevelFunctions: false,
      },
    ],

    /**
     * Enforce a maximum number of statements allowed per line.
     * https://eslint.org/docs/rules/max-statements-per-line
     */
    'max-statements-per-line': [
      'error',
      {
        max: 1,
      },
    ],

    /**
     * Enforce a particular style for multiline comments.
     * https://eslint.org/docs/rules/multiline-comment-style
     */
    'multiline-comment-style': ['off', 'starred-block'],

    /**
     * Enforce or disallow newlines between operands of ternary expressions.
     * https://eslint.org/docs/rules/multiline-ternary
     */
    'multiline-ternary': ['error', 'never'],

    /**
     * Require constructor names to begin with a capital letter.
     * https://eslint.org/docs/rules/new-cap
     */
    'new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: true,
        properties: true,
      },
    ],

    /**
     * Require parentheses when invoking a constructor with no arguments.
     * https://eslint.org/docs/rules/new-parens
     */
    'new-parens': ['error', 'always'],

    /**
     * Require a newline after each call in a method chain.
     * https://eslint.org/docs/rules/newline-per-chained-call
     */
    'newline-per-chained-call': [
      'error',
      {
        ignoreChainWithDepth: 2,
      },
    ],

    /**
     * Disallow Use of Alert.
     * https://eslint.org/docs/rules/no-alert
     */
    'no-alert': ['error'],

    /**
     * Disallow Array constructors.
     * https://eslint.org/docs/rules/no-array-constructor
     */
    'no-array-constructor': ['error'],

    /**
     * * Recommended Rule
     * Disallow using an async function as a Promise executor.
     * https://eslint.org/docs/rules/no-async-promise-executor
     */
    'no-async-promise-executor': ['error'],

    /**
     * Disallow await inside of loops.
     * https://eslint.org/docs/rules/no-await-in-loop
     */
    'no-await-in-loop': ['error'],

    /**
     * Disallow bitwise operators.
     * https://eslint.org/docs/rules/no-bitwise
     */
    'no-bitwise': [
      'error',
      {
        int32Hint: false,
      },
    ],

    /**
     * Disallow Use of caller/callee.
     * https://eslint.org/docs/rules/no-caller
     */
    'no-caller': ['error'],

    /**
     * * Recommended Rule
     * Disallow lexical declarations in case/default clauses.
     * https://eslint.org/docs/rules/no-case-declarations
     */
    'no-case-declarations': ['error'],

    /**
     * * Recommended Rule
     * Disallow modifying variables of class declarations.
     * https://eslint.org/docs/rules/no-class-assign
     */
    'no-class-assign': ['error'],

    /**
     * * Recommended Rule
     * Disallow comparing against -0.
     * https://eslint.org/docs/rules/no-compare-neg-zero
     */
    'no-compare-neg-zero': ['error'],

    /**
     * * Recommended Rule
     * Disallow assignment operators in conditional statements.
     * https://eslint.org/docs/rules/no-cond-assign
     */
    'no-cond-assign': ['error', 'except-parens'],

    /**
     * Disallow arrow functions where they could be confused with comparisons.
     * https://eslint.org/docs/rules/no-confusing-arrow
     */
    'no-confusing-arrow': [
      'error',
      {
        allowParens: true,
      },
    ],

    /**
     * Disallow the use of console.
     * https://eslint.org/docs/rules/no-console
     */
    'no-console': ['warn'],

    /**
     * * Recommended Rule
     * Disallow modifying variables that are declared using const.
     * https://eslint.org/docs/rules/no-const-assign
     */
    'no-const-assign': ['error'],

    /**
     * Disallow expressions where the operation doesn't affect the value.
     * https://eslint.org/docs/rules/no-constant-binary-expression
     */
    'no-constant-binary-expression': ['error'],

    /**
     * * Recommended Rule
     * Disallow constant expressions in conditions.
     * https://eslint.org/docs/rules/no-constant-condition
     */
    'no-constant-condition': [
      'error',
      {
        checkLoops: true,
      },
    ],

    /**
     * Disallow returning value in constructor.
     * https://eslint.org/docs/rules/no-constructor-return
     */
    'no-constructor-return': ['error'],

    /**
     * Disallow continue statements.
     * https://eslint.org/docs/rules/no-continue
     */
    'no-continue': ['error'],

    /**
     * * Recommended Rule
     * Disallow control characters in regular expressions.
     * https://eslint.org/docs/rules/no-control-regex
     */
    'no-control-regex': ['error'],

    /**
     * * Recommended Rule
     * Disallow the use of debugger.
     * https://eslint.org/docs/rules/no-debugger
     */
    'no-debugger': ['error'],

    /**
     * * Recommended Rule
     * Disallow deleting variables.
     * https://eslint.org/docs/rules/no-delete-var
     */
    'no-delete-var': ['error'],

    /**
     * Disallow Regular Expressions That Look Like Division
     * https://eslint.org/docs/rules/no-div-regex
     */
    'no-div-regex': ['error'],

    /**
     * * Recommended Rule
     * Disallow duplicate arguments in function definitions.
     * https://eslint.org/docs/rules/no-dupe-args
     */
    'no-dupe-args': ['off'],

    /**
     * * Recommended Rule
     * Disallow duplicate name in class members
     * https://eslint.org/docs/rules/no-dupe-class-members
     */
    'no-dupe-class-members': ['error'],

    /**
     * * Recommended Rule
     * Disallow duplicate conditions in if-else-if chains
     * https://eslint.org/docs/rules/no-dupe-else-if
     */
    'no-dupe-else-if': ['error'],

    /**
     * * Recommended Rule
     * Disallow duplicate keys in object literals.
     * https://eslint.org/docs/rules/no-dupe-keys
     */
    'no-dupe-keys': ['error'],

    /**
     * * Recommended Rule
     * Rule to disallow a duplicate case label.
     * https://eslint.org/docs/rules/no-duplicate-case
     */
    'no-duplicate-case': ['error'],

    /**
     * ! This rule has been deprecated in favour of the import/no-duplicates rule.
     * Disallow duplicate imports.
     * https://eslint.org/docs/rules/no-duplicate-imports
     */
    'no-duplicate-imports': ['off'],

    /**
     * Disallow return before else.
     * https://eslint.org/docs/rules/no-else-return
     */
    'no-else-return': [
      'error',
      {
        allowElseIf: true,
      },
    ],

    /**
     * * Recommended Rule
     * Disallow empty block statements.
     * https://eslint.org/docs/rules/no-empty
     */
    'no-empty': [
      'error',
      {
        allowEmptyCatch: false,
      },
    ],

    /**
     * * Recommended Rule
     * Disallow empty character classes in regular expressions.
     * https://eslint.org/docs/rules/no-empty-character-class
     */
    'no-empty-character-class': ['error'],

    /**
     * Disallow empty functions.
     * https://eslint.org/docs/rules/no-empty-function
     */
    'no-empty-function': ['error'],

    /**
     * * Recommended Rule
     * Disallow empty destructuring patterns.
     * https://eslint.org/docs/rules/no-empty-pattern
     */
    'no-empty-pattern': ['error'],

    /**
     * Disallow empty static blocks.
     * https://eslint.org/docs/rules/no-empty-static-block
     */
    'no-empty-static-block': ['error'],

    /**
     * * Rule is disabled in favor of 'eqeqeq'
     * Disallow Null Comparisons.
     * https://eslint.org/docs/rules/no-eq-null
     */
    'no-eq-null': ['off'],

    /**
     * Disallow eval().
     * https://eslint.org/docs/rules/no-eval
     */
    'no-eval': [
      'error',
      {
        allowIndirect: false,
      },
    ],

    /**
     * * Recommended Rule
     * Disallow reassigning exceptions in catch clauses.
     * https://eslint.org/docs/rules/no-ex-assign
     */
    'no-ex-assign': ['error'],

    /**
     * Disallow Extending of Native Objects.
     * https://eslint.org/docs/rules/no-extend-native
     */
    'no-extend-native': ['error'],

    /**
     * Disallow unnecessary function binding.
     * https://eslint.org/docs/rules/no-extra-bind
     */
    'no-extra-bind': ['error'],

    /**
     * * Recommended Rule
     * Disallow unnecessary boolean casts.
     * https://eslint.org/docs/rules/no-extra-boolean-cast
     */
    'no-extra-boolean-cast': [
      'error',
      {
        enforceForLogicalOperands: true,
      },
    ],

    /**
     * Disallow Unnecessary Labels.
     * https://eslint.org/docs/rules/no-extra-label
     */
    'no-extra-label': ['error'],

    /**
     * Disallow unnecessary parentheses.
     * https://eslint.org/docs/rules/no-extra-parens
     */
    'no-extra-parens': ['error', 'functions'],

    /**
     * * Recommended Rule
     * Disallow unnecessary semicolons.
     * https://eslint.org/docs/rules/no-extra-semi
     */
    'no-extra-semi': ['error'],

    /**
     * * Recommended Rule
     * Disallow Case Statement Fallthrough.
     * https://eslint.org/docs/rules/no-fallthrough
     */
    'no-fallthrough': [
      'error',
      {
        commentPattern: 'break[\\s\\w]*omitted',
      },
    ],

    /**
     * Disallow Floating Decimals.
     * https://eslint.org/docs/rules/no-floating-decimal
     */
    'no-floating-decimal': ['error'],

    /**
     * * Recommended Rule
     * Disallow reassigning function declarations.
     * https://eslint.org/docs/rules/no-func-assign
     */
    'no-func-assign': ['error'],

    /**
     * * Recommended Rule
     * Disallow assignment to native objects or read-only global variables.
     * https://eslint.org/docs/rules/no-global-assign
     */
    'no-global-assign': ['error'],

    /**
     * Disallow the type conversion with shorter notations.
     * https://eslint.org/docs/rules/no-implicit-coercion
     */
    'no-implicit-coercion': [
      'error',
      {
        disallowTemplateShorthand: false,
      },
    ],

    /**
     * Disallow declarations in the global scope.
     * https://eslint.org/docs/rules/no-implicit-globals
     */
    'no-implicit-globals': ['error'],

    /**
     * Disallow Implied eval().
     * https://eslint.org/docs/rules/no-implied-eval
     */
    'no-implied-eval': ['error'],

    /**
     * * Recommended Rule
     * Disallow assigning to imported bindings.
     * https://eslint.org/docs/rules/no-import-assign
     */
    'no-import-assign': ['error'],

    /**
     * Disallow inline comments after code.
     * https://eslint.org/docs/rules/no-inline-comments
     */
    'no-inline-comments': ['error'],

    /**
     * * Recommended Rule
     * Disallow variable or function declarations in nested blocks.
     * https://eslint.org/docs/rules/no-inner-declarations
     */
    'no-inner-declarations': ['error', 'both'],

    /**
     * * Recommended Rule
     * Disallow invalid regular expression strings in RegExp constructors.
     * https://eslint.org/docs/rules/no-invalid-regexp
     */
    'no-invalid-regexp': ['error'],

    /**
     * Disallow this keywords outside of classes or class-like objects.
     * https://eslint.org/docs/rules/no-invalid-this
     */
    'no-invalid-this': [
      'error',
      {
        capIsConstructor: false,
      },
    ],

    /**
     * * Recommended Rule
     * Disallow irregular whitespace.
     * https://eslint.org/docs/rules/no-irregular-whitespace
     */
    'no-irregular-whitespace': [
      'error',
      {
        skipStrings: true,
        skipRegExps: false,
        skipTemplates: false,
        skipComments: false,
      },
    ],

    /**
     * Disallow Iterator.
     * https://eslint.org/docs/rules/no-iterator
     */
    'no-iterator': ['error'],

    /**
     * Disallow Labels That Are Variables Names.
     * https://eslint.org/docs/rules/no-label-var
     */
    'no-label-var': ['error'],

    /**
     * Disallow Labeled Statements.
     * https://eslint.org/docs/rules/no-labels
     */
    'no-labels': ['off'],

    /**
     * Disallow Unnecessary Nested Blocks.
     * https://eslint.org/docs/rules/no-lone-blocks
     */
    'no-lone-blocks': ['error'],

    /**
     * Disallow if statements as the only statement in else blocks.
     * https://eslint.org/docs/rules/no-lonely-if
     */
    'no-lonely-if': ['error'],

    /**
     * Disallow Functions in Loops.
     * https://eslint.org/docs/rules/no-loop-func
     */
    'no-loop-func': ['error'],

    /**
     * * Recommended Rule
     * Disallow Number Literals That Lose Precision.
     * https://eslint.org/docs/rules/no-loss-of-precision
     */
    'no-loss-of-precision': ['error'],

    /**
     * Disallow Magic Numbers.
     * https://eslint.org/docs/rules/no-magic-numbers
     */
    'no-magic-numbers': [
      'off',
      {
        enforceConst: true,
        detectObjects: true,
        ignoreArrayIndexes: true,
        ignoreDefaultValues: false,
        ignore: [0, 1, -1],
      },
    ],

    /**
     * * Recommended Rule
     * Disallow characters which are made with multiple code points in character class syntax.
     * https://eslint.org/docs/rules/no-misleading-character-class
     */
    'no-misleading-character-class': ['error'],

    /**
     * Disallow mixes of different operators.
     * https://eslint.org/docs/rules/no-mixed-operators
     */
    'no-mixed-operators': ['error'],

    /**
     * Disallow mixed spaces and tabs for indentation.
     * https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
     */
    'no-mixed-spaces-and-tabs': ['error'],

    /**
     * Disallow Use of Chained Assignment Expressions.
     * https://eslint.org/docs/rules/no-multi-assign
     */
    'no-multi-assign': [
      'error',
      {
        ignoreNonDeclaration: false,
      },
    ],

    /**
     * Disallow multiple spaces.
     * https://eslint.org/docs/rules/no-multi-spaces
     */
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: false,
        exceptions: {
          Property: false,
          BinaryExpression: false,
          VariableDeclarator: false,
          ImportDeclaration: false,
        },
      },
    ],

    /**
     * Disallow Multiline Strings.
     * https://eslint.org/docs/rules/no-multi-str
     */
    'no-multi-str': ['error'],

    /**
     * Disallow multiple empty lines.
     * https://eslint.org/docs/rules/no-multiple-empty-lines
     */
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 0,
      },
    ],

    /**
     * Disallow negated conditions.
     * https://eslint.org/docs/rules/no-negated-condition
     */
    'no-negated-condition': ['error'],

    /**
     * Disallow nested ternary expressions.
     * https://eslint.org/docs/rules/no-nested-ternary
     */
    'no-nested-ternary': ['error'],

    /**
     * Disallow new For Side Effects.
     * https://eslint.org/docs/rules/no-new
     */
    'no-new': ['error'],

    /**
     * Disallow Function Constructor.
     * https://eslint.org/docs/rules/no-new-func
     */
    'no-new-func': ['error'],

    /**
     * Disallow new operators with global non-constructor functions.
     * https://eslint.org/docs/rules/no-new-native-nonconstructor
     */
    'no-new-native-nonconstructor': ['error'],

    /**
     * Disallow Object Constructors.
     * https://eslint.org/docs/rules/no-new-object
     */
    'no-new-object': ['error'],

    /**
     * * Recommended Rule
     * Disallow Symbol Constructor.
     * https://eslint.org/docs/rules/no-new-symbol
     */
    'no-new-symbol': ['error'],

    /**
     * Disallow Primitive Wrapper Instances.
     * https://eslint.org/docs/rules/no-new-wrappers
     */
    'no-new-wrappers': ['error'],

    /**
     * * Recommended Rule
     * Disallow \8 and \9 escape sequences in string literals.
     * https://eslint.org/docs/rules/no-nonoctal-decimal-escape
     */
    'no-nonoctal-decimal-escape': ['error'],

    /**
     * * Recommended Rule
     * Disallow calling global object properties as functions.
     * https://eslint.org/docs/rules/no-obj-calls
     */
    'no-obj-calls': ['error'],

    /**
     * * Recommended Rule
     * Disallow octal literals.
     * https://eslint.org/docs/rules/no-octal
     */
    'no-octal': ['error'],

    /**
     * Disallow octal escape sequences in string literals.
     * https://eslint.org/docs/rules/no-octal-escape
     */
    'no-octal-escape': ['error'],

    /**
     * Disallow Reassignment of Function Parameters.
     * https://eslint.org/docs/rules/no-param-reassign
     */
    'no-param-reassign': [
      'error',
      {
        props: true,
      },
    ],

    /**
     * Disallow the unary operators ++ and --.
     * https://eslint.org/docs/rules/no-plusplus
     */
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: false,
      },
    ],

    /**
     * Disallow returning values from Promise executor functions.
     * https://eslint.org/docs/rules/no-promise-executor-return
     */
    'no-promise-executor-return': ['error'],

    /**
     * Disallow Use of __proto__.
     * https://eslint.org/docs/rules/no-proto
     */
    'no-proto': ['error'],

    /**
     * * Recommended Rule
     * Disallow use of Object.prototypes builtins directly.
     * https://eslint.org/docs/rules/no-prototype-builtins
     */
    'no-prototype-builtins': ['error'],

    /**
     * * Recommended Rule
     * Disallow variable redeclaration.
     * https://eslint.org/docs/rules/no-redeclare
     */
    'no-redeclare': [
      'error',
      {
        builtinGlobals: true,
      },
    ],

    /**
     * * Recommended Rule
     * Disallow multiple spaces in regular expression literals.
     * https://eslint.org/docs/rules/no-regex-spaces
     */
    'no-regex-spaces': ['error'],

    /**
     * Disallow specified names in exports.
     * https://eslint.org/docs/rules/no-restricted-exports
     */
    'no-restricted-exports': ['off'],

    /**
     * Disallow specific global variables.
     * https://eslint.org/docs/rules/no-restricted-globals
     */
    'no-restricted-globals': [
      'error',
      'isFinite',
      'isNaN',
      ...restrictedGlobals,
    ],

    /**
     * Disallow specific imports.
     * https://eslint.org/docs/rules/no-restricted-imports
     */
    'no-restricted-imports': ['off'],

    /**
     * Disallow certain object properties.
     * https://eslint.org/docs/rules/no-restricted-properties
     */
    'no-restricted-properties': ['off'],

    /**
     * Disallow specified syntax.
     * https://eslint.org/docs/rules/no-restricted-syntax
     */
    'no-restricted-syntax': ['off'],

    /**
     * Disallow Assignment in return Statement.
     * https://eslint.org/docs/rules/no-return-assign
     */
    'no-return-assign': ['error', 'always'],

    /**
     * Disallows unnecessary return await.
     * https://eslint.org/docs/rules/no-return-await
     */
    'no-return-await': ['error'],

    /**
     * Disallow Script URLs.
     * https://eslint.org/docs/rules/no-script-url
     */
    'no-script-url': ['error'],

    /**
     * * Recommended Rule
     * Disallow Self Assignment.
     * https://eslint.org/docs/rules/no-self-assign
     */
    'no-self-assign': [
      'error',
      {
        props: true,
      },
    ],

    /**
     * Disallow Self Compare.
     * https://eslint.org/docs/rules/no-self-compare
     */
    'no-self-compare': ['error'],

    /**
     * Disallow Use of the Comma Operator.
     * https://eslint.org/docs/rules/no-sequences
     */
    'no-sequences': [
      'error',
      {
        allowInParentheses: false,
      },
    ],

    /**
     * * Recommended Rule
     * Disallow returning values from setters.
     * https://eslint.org/docs/rules/no-setter-return
     */
    'no-setter-return': ['error'],

    /**
     * Disallow variable declarations from shadowing variables declared in the outer scope.
     * https://eslint.org/docs/rules/no-shadow
     */
    'no-shadow': [
      'error',
      {
        hoist: 'all',
        builtinGlobals: true,
      },
    ],

    /**
     * * Recommended Rule
     * Disallow Shadowing of Restricted Names.
     * https://eslint.org/docs/rules/no-shadow-restricted-names
     */
    'no-shadow-restricted-names': ['error'],

    /**
     * * Recommended Rule
     * Disallow sparse arrays.
     * https://eslint.org/docs/rules/no-sparse-arrays
     */
    'no-sparse-arrays': ['error'],

    /**
     * Disallow all tabs.
     * https://eslint.org/docs/rules/no-tabs
     */
    'no-tabs': [
      'error',
      {
        allowIndentationTabs: false,
      },
    ],

    /**
     * Disallow template literal placeholder syntax in regular strings.
     * https://eslint.org/docs/rules/no-template-curly-in-string
     */
    'no-template-curly-in-string': ['warn'],

    /**
     * Disallow ternary operators.
     * https://eslint.org/docs/rules/no-ternary
     */
    'no-ternary': ['off'],

    /**
     * * Recommended Rule
     * Disallow use of this/super before calling super() in constructors.
     * https://eslint.org/docs/rules/no-this-before-super
     */
    'no-this-before-super': ['error'],

    /**
     * Restrict what can be thrown as an exception.
     * https://eslint.org/docs/rules/no-throw-literal
     */
    'no-throw-literal': ['error'],

    /**
     * Disallow trailing whitespace at the end of lines.
     * https://eslint.org/docs/rules/no-trailing-spaces
     */
    'no-trailing-spaces': [
      'error',
      {
        skipBlankLines: false,
        ignoreComments: false,
      },
    ],

    /**
     * * Recommended Rule
     * Disallow Undeclared Variables.
     * https://eslint.org/docs/rules/no-undef
     */
    'no-undef': [
      'error',
      {
        typeof: true,
      },
    ],

    /**
     * Disallow Initializing to undefined.
     * https://eslint.org/docs/rules/no-undef-init
     */
    'no-undef-init': ['error'],

    /**
     * Disallow Use of undefined Variable
     * https://eslint.org/docs/rules/no-undefined
     */
    'no-undefined': ['off'],

    /**
     * Disallow dangling underscores in identifiers.
     * https://eslint.org/docs/rules/no-underscore-dangle
     */
    'no-underscore-dangle': [
      'error',
      {
        allowAfterThis: false,
        allowAfterSuper: false,
        allowAfterThisConstructor: false,
        allowFunctionParams: false,
        enforceInMethodNames: true,
      },
    ],

    /**
     * * Recommended Rule
     * Disallow confusing multiline expressions.
     * https://eslint.org/docs/rules/no-unexpected-multiline
     */
    'no-unexpected-multiline': ['error'],

    /**
     * Disallow unmodified conditions of loops.
     * https://eslint.org/docs/rules/no-unmodified-loop-condition
     */
    'no-unmodified-loop-condition': ['error'],

    /**
     * Disallow ternary operators when simpler alternatives exist.
     * https://eslint.org/docs/rules/no-unneeded-ternary
     */
    'no-unneeded-ternary': [
      'error',
      {
        defaultAssignment: true,
      },
    ],

    /**
     * * Recommended Rule
     * Disallow unreachable code after return, throw, continue, and break statements.
     * https://eslint.org/docs/rules/no-unreachable
     */
    'no-unreachable': ['error'],

    /**
     * Disallow loops with a body that allows only one iteration.
     * https://eslint.org/docs/rules/no-unreachable-loop
     */
    'no-unreachable-loop': ['error'],

    /**
     * * Recommended Rule
     * Disallow control flow statements in finally blocks.
     * https://eslint.org/docs/rules/no-unsafe-finally
     */
    'no-unsafe-finally': ['error'],

    /**
     * * Recommended Rule
     * Disallow negating the left operand of relational operators.
     * https://eslint.org/docs/rules/no-unsafe-negation
     */
    'no-unsafe-negation': [
      'error',
      {
        enforceForOrderingRelations: true,
      },
    ],

    /**
     * * Recommended Rule
     * Disallow use of optional chaining in contexts where the undefined value is not allowed.
     * https://eslint.org/docs/rules/no-unsafe-optional-chaining
     */
    'no-unsafe-optional-chaining': [
      'error',
      {
        disallowArithmeticOperators: true,
      },
    ],

    /**
     * Disallow Unused Expressions.
     * https://eslint.org/docs/rules/no-unused-expressions
     */
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false,
        enforceForJSX: true,
      },
    ],

    /**
     * * Recommended Rule
     * Disallow Unused Labels.
     * https://eslint.org/docs/rules/no-unused-labels
     */
    'no-unused-labels': ['error'],

    /**
     * Disallow Unused Private Class Members.
     * https://eslint.org/docs/rules/no-unused-private-class-members
     */
    'no-unused-private-class-members': ['error'],

    /**
     * * Recommended Rule
     * Disallow Unused Variables.
     * https://eslint.org/docs/rules/no-unused-vars
     */
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        caughtErrors: 'all',
        ignoreRestSiblings: true,
      },
    ],

    /**
     * Disallow Early Use.
     * https://eslint.org/docs/rules/no-use-before-define
     */
    'no-use-before-define': [
      'error',
      {
        classes: true,
        functions: true,
        variables: true,
      },
    ],

    /**
     * * Recommended Rule
     * Disallow useless backreferences in regular expressions.
     * https://eslint.org/docs/rules/no-useless-backreference
     */
    'no-useless-backreference': ['error'],

    /**
     * Disallow unnecessary .call() and .apply().
     * https://eslint.org/docs/rules/no-useless-call
     */
    'no-useless-call': ['error'],

    /**
     * * Recommended Rule
     * Disallow unnecessary catch clauses.
     * https://eslint.org/docs/rules/no-useless-catch
     */
    'no-useless-catch': ['error'],

    /**
     * Disallow unnecessary computed property keys in objects and classes.
     * https://eslint.org/docs/rules/no-useless-computed-key
     */
    'no-useless-computed-key': [
      'error',
      {
        enforceForClassMembers: true,
      },
    ],

    /**
     * Disallow unnecessary concatenation of strings.
     * https://eslint.org/docs/rules/no-useless-concat
     */
    'no-useless-concat': ['error'],

    /**
     * Disallow unnecessary constructor.
     * https://eslint.org/docs/rules/no-useless-constructor
     */
    'no-useless-constructor': ['error'],

    /**
     * * Recommended Rule
     * Disallow unnecessary escape usage.
     * https://eslint.org/docs/rules/no-useless-escape
     */
    'no-useless-escape': ['error'],

    /**
     * Disallow renaming import, export, and destructured assignments to the same name.
     * https://eslint.org/docs/rules/no-useless-rename
     */
    'no-useless-rename': [
      'error',
      {
        ignoreImport: false,
        ignoreExport: false,
        ignoreDestructuring: false,
      },
    ],

    /**
     * Disallow redundant return statements.
     * https://eslint.org/docs/rules/no-useless-return
     */
    'no-useless-return': ['error'],

    /**
     * Require let or const instead of var.
     * https://eslint.org/docs/rules/no-var
     */
    'no-var': ['error'],

    /**
     * Disallow use of the void operator.
     * https://eslint.org/docs/rules/no-void
     */
    'no-void': [
      'error',
      {
        allowAsStatement: false,
      },
    ],

    /**
     * Disallow Warning Comments.
     * https://eslint.org/docs/rules/no-warning-comments
     */
    'no-warning-comments': ['warn'],

    /**
     * Disallow whitespace before properties.
     * https://eslint.org/docs/rules/no-whitespace-before-property
     */
    'no-whitespace-before-property': ['error'],

    /**
     * * Recommended Rule
     * Disallow with statements.
     * https://eslint.org/docs/rules/no-with
     */
    'no-with': ['error'],

    /**
     * Enforce the location of single-line statements.
     * https://eslint.org/docs/rules/nonblock-statement-body-position
     */
    'nonblock-statement-body-position': ['error', 'beside'],

    /**
     * Enforce consistent line breaks after opening and before closing braces.
     * https://eslint.org/docs/rules/object-curly-newline
     */
    'object-curly-newline': [
      'error',
      {
        multiline: true,
        consistent: true,
        minProperties: 4,
      },
    ],

    /**
     * Enforce consistent spacing inside braces.
     * https://eslint.org/docs/rules/object-curly-spacing
     */
    'object-curly-spacing': ['error', 'always'],

    /**
     * Enforce placing object properties on separate lines.
     * https://eslint.org/docs/rules/object-property-newline
     */
    'object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: true,
      },
    ],

    /**
     * Require Object Literal Shorthand Syntax.
     * https://eslint.org/docs/rules/object-shorthand
     */
    'object-shorthand': ['error', 'always'],

    /**
     * Enforce variables to be declared either together or separately in functions.
     * https://eslint.org/docs/rules/one-var
     */
    'one-var': ['error', 'never'],

    /**
     * Require or disallow newlines around variable declarations.
     * https://eslint.org/docs/rules/one-var-declaration-per-line
     */
    'one-var-declaration-per-line': ['error', 'always'],

    /**
     * Require or disallow assignment operator shorthand where possible.
     * https://eslint.org/docs/rules/operator-assignment
     */
    'operator-assignment': ['error', 'always'],

    /**
     * Enforce consistent linebreak style for operators.
     * https://eslint.org/docs/rules/operator-linebreak
     */
    'operator-linebreak': ['error', 'before'],

    /**
     * Require or disallow padding within blocks.
     * https://eslint.org/docs/rules/padded-blocks
     */
    'padded-blocks': [
      'error',
      {
        blocks: 'never',
        classes: 'never',
        switches: 'never',
      },
      {
        allowSingleLineBlocks: true,
      },
    ],

    /**
     * Require or disallow padding lines between statements.
     * https://eslint.org/docs/rules/padding-line-between-statements
     */
    'padding-line-between-statements': ['off'],

    /**
     * Require using arrow functions for callbacks.
     * https://eslint.org/docs/rules/prefer-arrow-callback
     */
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: true,
        allowUnboundThis: true,
      },
    ],

    /**
     * Suggest using const.
     * https://eslint.org/docs/rules/prefer-const
     */
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
        ignoreReadBeforeAssign: false,
      },
    ],

    /**
     * Prefer destructuring from arrays and objects.
     * https://eslint.org/docs/rules/prefer-destructuring
     */
    'prefer-destructuring': [
      'error',
      {
        array: true,
        object: true,
      },
      {
        enforceForRenamedProperties: false,
      },
    ],

    /**
     * Disallow the use of Math.pow in favor of the ** operator.
     * https://eslint.org/docs/rules/prefer-exponentiation-operator
     */
    'prefer-exponentiation-operator': ['error'],

    /**
     * Suggest using named capture group in regular expression.
     * https://eslint.org/docs/rules/prefer-named-capture-group
     */
    'prefer-named-capture-group': ['error'],

    /**
     * Disallow parseInt() and Number.parseInt() in favor of binary, octal, and hexadecimal literals.
     * https://eslint.org/docs/rules/prefer-numeric-literals
     */
    'prefer-numeric-literals': ['error'],

    /**
     * Prefer Object.hasOwn() over Object.prototype.hasOwnProperty.call().
     * https://eslint.org/docs/rules/prefer-object-has-own
     */
    'prefer-object-has-own': ['error'],

    /**
     * Prefer use of an object spread over Object.assign.
     * https://eslint.org/docs/rules/prefer-object-spread
     */
    'prefer-object-spread': ['error'],

    /**
     * Require using Error objects as Promise rejection reasons.
     * https://eslint.org/docs/rules/prefer-promise-reject-errors
     */
    'prefer-promise-reject-errors': [
      'error',
      {
        allowEmptyReject: false,
      },
    ],

    /**
     * Disallow use of the RegExp constructor in favor of regular expression literals.
     * https://eslint.org/docs/rules/prefer-regex-literals
     */
    'prefer-regex-literals': [
      'error',
      {
        disallowRedundantWrapping: true,
      },
    ],

    /**
     * Suggest using the rest parameters instead of arguments.
     * https://eslint.org/docs/rules/prefer-rest-params
     */
    'prefer-rest-params': ['error'],

    /**
     * Suggest using spread syntax instead of .apply().
     * https://eslint.org/docs/rules/prefer-spread
     */
    'prefer-spread': ['error'],

    /**
     * Suggest using template literals instead of string concatenation.
     * https://eslint.org/docs/rules/prefer-template
     */
    'prefer-template': ['error'],

    /**
     * Require quotes around object literal property names.
     * https://eslint.org/docs/rules/quote-props
     */
    'quote-props': [
      'error',
      'consistent-as-needed',
      {
        keywords: false,
      },
    ],

    /**
     * Enforce the consistent use of either backticks, double, or single quotes.
     * https://eslint.org/docs/rules/quotes
     */
    'quotes': [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: false,
      },
    ],

    /**
     * Require Radix Parameter.
     * https://eslint.org/docs/rules/radix
     */
    'radix': ['error', 'always'],

    /**
     * Disallow assignments that can lead to race conditions due to usage of await or yield.
     * https://eslint.org/docs/rules/require-atomic-updates
     */
    'require-atomic-updates': [
      'error',
      {
        allowProperties: false,
      },
    ],

    /**
     * Disallow async functions which have no await expression.
     * https://eslint.org/docs/rules/require-await
     */
    'require-await': ['error'],

    /**
     * Enforce the use of u flag on RegExp.
     * https://eslint.org/docs/rules/require-unicode-regexp
     */
    'require-unicode-regexp': ['error'],

    /**
     * * Recommended Rule
     * Disallow generator functions that do not have yield.
     * https://eslint.org/docs/rules/require-yield
     */
    'require-yield': ['error'],

    /**
     * Enforce spacing between rest and spread operators and their expressions.
     * https://eslint.org/docs/rules/rest-spread-spacing
     */
    'rest-spread-spacing': ['error', 'never'],

    /**
     * Require or disallow semicolons instead of ASI.
     * https://eslint.org/docs/rules/semi
     */
    'semi': [
      'error',
      'always',
      {
        omitLastInOneLineBlock: false,
      },
    ],

    /**
     * Enforce spacing before and after semicolons.
     * https://eslint.org/docs/rules/semi-spacing
     */
    'semi-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],

    /**
     * Enforce location of semicolons.
     * https://eslint.org/docs/rules/semi-style
     */
    'semi-style': ['error', 'last'],

    /**
     * Import Sorting.
     * https://eslint.org/docs/rules/sort-imports
     */
    // TODO: Generate import rule
    'sort-imports': ['off'],

    /**
     * Require object keys to be sorted.
     * https://eslint.org/docs/rules/sort-keys
     */
    'sort-keys': ['off'],

    /**
     * Variable Sorting.
     * https://eslint.org/docs/rules/sort-vars
     */
    'sort-vars': ['off'],

    /**
     * Require Or Disallow Space Before Blocks.
     * https://eslint.org/docs/rules/space-before-blocks
     */
    'space-before-blocks': [
      'error',
      {
        functions: 'always',
        keywords: 'always',
        classes: 'always',
      },
    ],

    /**
     * Require or disallow a space before function parenthesis.
     * https://eslint.org/docs/rules/space-before-function-paren
     */
    'space-before-function-paren': [
      'error',
      {
        named: 'never',
        anonymous: 'always',
        asyncArrow: 'always',
      },
    ],

    /**
     * Disallow or enforce spaces inside of parentheses.
     * https://eslint.org/docs/rules/space-in-parens
     */
    'space-in-parens': ['error', 'never'],

    /**
     * Require spacing around infix operators.
     * https://eslint.org/docs/rules/space-infix-ops
     */
    'space-infix-ops': [
      'error',
      {
        int32Hint: false,
      },
    ],

    /**
     * Require or disallow spaces before/after unary operators.
     * https://eslint.org/docs/rules/space-unary-ops
     */
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: true,
      },
    ],

    /**
     * Requires or disallows a whitespace (space or tab) beginning a comment.
     * https://eslint.org/docs/rules/spaced-comment
     */
    'spaced-comment': ['error', 'always'],

    /**
     * Require or disallow strict mode directives.
     * https://eslint.org/docs/rules/strict
     */
    'strict': ['error', 'safe'],

    /**
     * Enforce spacing around colons of switch statements.
     * https://eslint.org/docs/rules/switch-colon-spacing
     */
    'switch-colon-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],

    /**
     * Require symbol description.
     * https://eslint.org/docs/rules/symbol-description
     */
    'symbol-description': ['error'],

    /**
     * Enforce Usage of Spacing in Template Strings.
     * https://eslint.org/docs/rules/template-curly-spacing
     */
    'template-curly-spacing': ['error', 'never'],

    /**
     * Require or disallow spacing between template tags and their literals.
     * https://eslint.org/docs/rules/template-tag-spacing
     */
    'template-tag-spacing': ['error', 'never'],

    /**
     * Require or disallow the Unicode Byte Order Mark (BOM).
     * https://eslint.org/docs/rules/unicode-bom
     */
    'unicode-bom': ['error', 'never'],

    /**
     * * Recommended Rule
     * Require calls to isNaN() when checking for NaN.
     * https://eslint.org/docs/rules/use-isnan
     */
    'use-isnan': [
      'error',
      {
        enforceForSwitchCase: true,
        enforceForIndexOf: true,
      },
    ],

    /**
     * * Recommended Rule
     * Enforce comparing typeof expressions against valid strings.
     * https://eslint.org/docs/rules/valid-typeof
     */
    'valid-typeof': [
      'error',
      {
        requireStringLiterals: true,
      },
    ],

    /**
     * Require Variable Declarations to be at the top of their scope.
     * https://eslint.org/docs/rules/vars-on-top
     */
    'vars-on-top': ['error'],

    /**
     * Require IIFEs to be Wrapped.
     * https://eslint.org/docs/rules/wrap-iife
     */
    'wrap-iife': ['error', 'inside'],

    /**
     * Require Regex Literals to be Wrapped.
     * https://eslint.org/docs/rules/wrap-regex
     */
    'wrap-regex': ['off'],

    /**
     * Enforce spacing around the * in yield* expressions.
     * https://eslint.org/docs/rules/yield-star-spacing
     */
    'yield-star-spacing': ['error', 'after'],

    /**
     * Require or disallow Yoda Conditions.
     * https://eslint.org/docs/rules/yoda
     */
    'yoda': [
      'error',
      'never',
      {
        exceptRange: false,
        onlyEquality: false,
      },
    ],
  },
};
