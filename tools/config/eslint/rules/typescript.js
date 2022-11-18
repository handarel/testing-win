/* eslint-disable max-lines */
/* eslint-disable unicorn/no-null */
/* eslint-disable unicorn/prefer-module */

/** @type {import('eslint').Linter.Config} */
module.exports = {
  rules: {
    /**
     * * Recommended Rule
     * Require that function overload signatures be consecutive.
     * https://typescript-eslint.io/rules/adjacent-overload-signatures
     */
    '@typescript-eslint/adjacent-overload-signatures': ['error'],

    /**
     * Require consistently using either T[] or Array<T> for arrays.
     * https://typescript-eslint.io/rules/array-type
     */
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'array',
        readonly: 'array',
      },
    ],

    /**
     * * Recommended Rule
     * Disallow awaiting a value that is not a Thenable.
     * https://typescript-eslint.io/rules/await-thenable
     */
    '@typescript-eslint/await-thenable': ['error'],

    /**
     * * Recommended Rule
     * Disallow @ts-<directive> comments or require descriptions after directives.
     * https://typescript-eslint.io/rules/ban-ts-comment
     */
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': true,
        'ts-nocheck': true,
        'ts-check': false,
        'minimumDescriptionLength': 3,
      },
    ],

    /**
     * Disallow // tslint:<rule-flag> comments.
     * https://typescript-eslint.io/rules/ban-tslint-comment
     */
    '@typescript-eslint/ban-tslint-comment': ['error'],

    /**
     * * Recommended Rule
     * Disallow certain types.
     * https://typescript-eslint.io/rules/ban-types
     */
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
      },
    ],

    /**
     * Enforce that literals on classes are exposed in a consistent style.
     * https://typescript-eslint.io/rules/class-literal-property-style
     */
    '@typescript-eslint/class-literal-property-style': ['error', 'getters'],

    /**
     * Enforce specifying generic type arguments on type annotation or constructor name of a constructor call.
     * https://typescript-eslint.io/rules/consistent-generic-constructors
     */
    '@typescript-eslint/consistent-generic-constructors': [
      'error',
      'constructor',
    ],

    /**
     * Require or disallow the Record type.
     * https://typescript-eslint.io/rules/consistent-indexed-object-style
     */
    '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],

    /**
     * Enforce consistent usage of type assertions.
     * https://typescript-eslint.io/rules/consistent-type-assertions
     */
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'never',
      },
    ],

    /**
     * Enforce type definitions to consistently use either interface or type.
     * https://typescript-eslint.io/rules/consistent-type-definitions
     */
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

    /**
     * Enforce consistent usage of type exports.
     * https://typescript-eslint.io/rules/consistent-type-exports
     */
    '@typescript-eslint/consistent-type-exports': [
      'error',
      {
        fixMixedExportsWithInlineTypeSpecifier: false,
      },
    ],

    /**
     * Enforce consistent usage of type imports.
     * https://typescript-eslint.io/rules/consistent-type-imports
     */
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        disallowTypeAnnotations: true,
        fixStyle: 'separate-type-imports',
      },
    ],

    /**
     * Require explicit return types on functions and class methods.
     * https://typescript-eslint.io/rules/explicit-function-return-type
     */
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: false,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
        allowDirectConstAssertionInArrowFunctions: true,
        allowConciseArrowFunctionExpressionsStartingWithVoid: false,
        allowedNames: [],
      },
    ],

    /**
     * Require explicit accessibility modifiers on class properties and methods.
     * https://typescript-eslint.io/rules/explicit-member-accessibility
     */
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'explicit',
      },
    ],

    /**
     * Require explicit return and argument types on exported functions' and classes' public class methods.
     * https://typescript-eslint.io/rules/explicit-module-boundary-types
     */
    '@typescript-eslint/explicit-module-boundary-types': [
      'error',
      {
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
        allowArgumentsExplicitlyTypedAsAny: false,
        allowDirectConstAssertionInArrowFunctions: true,
        allowedNames: [],
      },
    ],

    /**
     * Require a consistent member declaration order.
     * https://typescript-eslint.io/rules/member-ordering
     */
    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: [
          // Index signature
          'signature',

          // Fields
          'public-static-field',
          'protected-static-field',
          'private-static-field',

          'public-decorated-field',
          'protected-decorated-field',
          'private-decorated-field',

          'public-instance-field',
          'protected-instance-field',
          'private-instance-field',

          'public-abstract-field',
          'protected-abstract-field',
          'private-abstract-field',

          'public-field',
          'protected-field',
          'private-field',

          'static-field',
          'instance-field',
          'abstract-field',

          'decorated-field',

          'field',

          // Static initialization
          'static-initialization',

          // Constructors
          'public-constructor',
          'protected-constructor',
          'private-constructor',

          'constructor',

          // Getters
          'public-static-get',
          'protected-static-get',
          'private-static-get',

          'public-decorated-get',
          'protected-decorated-get',
          'private-decorated-get',

          'public-instance-get',
          'protected-instance-get',
          'private-instance-get',

          'public-abstract-get',
          'protected-abstract-get',
          'private-abstract-get',

          'public-get',
          'protected-get',
          'private-get',

          'static-get',
          'instance-get',
          'abstract-get',

          'decorated-get',

          'get',

          // Setters
          'public-static-set',
          'protected-static-set',
          'private-static-set',

          'public-decorated-set',
          'protected-decorated-set',
          'private-decorated-set',

          'public-instance-set',
          'protected-instance-set',
          'private-instance-set',

          'public-abstract-set',
          'protected-abstract-set',
          'private-abstract-set',

          'public-set',
          'protected-set',
          'private-set',

          'static-set',
          'instance-set',
          'abstract-set',

          'decorated-set',

          'set',

          // Methods
          'public-static-method',
          'protected-static-method',
          'private-static-method',

          'public-decorated-method',
          'protected-decorated-method',
          'private-decorated-method',

          'public-instance-method',
          'protected-instance-method',
          'private-instance-method',

          'public-abstract-method',
          'protected-abstract-method',
          'private-abstract-method',

          'public-method',
          'protected-method',
          'private-method',

          'static-method',
          'instance-method',
          'abstract-method',

          'decorated-method',

          'method',
        ],
      },
    ],

    /**
     * Enforce using a particular method signature syntax.
     * https://typescript-eslint.io/rules/method-signature-style
     */
    '@typescript-eslint/method-signature-style': ['error', 'method'],

    /**
     * Enforce naming conventions for everything across a codebase.
     * https://typescript-eslint.io/rules/naming-convention
     */
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },

      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
      {
        selector: 'variable',
        modifiers: ['destructured'],
        format: null,
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },
      {
        selector: 'parameter',
        format: ['camelCase'],
      },

      {
        selector: 'memberLike',
        modifiers: ['private'],
        format: ['camelCase'],
        leadingUnderscore: 'require',
      },

      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],

    /**
     * Require .toString() to only be called on objects which provide useful information when stringified.
     * https://typescript-eslint.io/rules/no-base-to-string
     */
    '@typescript-eslint/no-base-to-string': [
      'error',
      {
        ignoredTypeNames: ['Error', 'RegExp', 'URL', 'URLSearchParams'],
      },
    ],

    /**
     * Disallow non-null assertion in locations that may be confusing.
     * https://typescript-eslint.io/rules/no-confusing-non-null-assertion
     */
    '@typescript-eslint/no-confusing-non-null-assertion': ['error'],

    /**
     * Require expressions of type void to appear in statement position.
     * https://typescript-eslint.io/rules/no-confusing-void-expression
     */
    '@typescript-eslint/no-confusing-void-expression': [
      'error',
      {
        ignoreArrowShorthand: true,
        ignoreVoidOperator: true,
      },
    ],

    /**
     * Disallow duplicate enum member values.
     * https://typescript-eslint.io/rules/no-duplicate-enum-values
     */
    '@typescript-eslint/no-duplicate-enum-values': ['error'],

    /**
     * Disallow using the delete operator on computed key expressions.
     * https://typescript-eslint.io/rules/no-dynamic-delete
     */
    '@typescript-eslint/no-dynamic-delete': ['error'],

    /**
     * * Recommended
     * Disallow the declaration of empty interfaces.
     * https://typescript-eslint.io/rules/no-empty-interface
     */
    '@typescript-eslint/no-empty-interface': [
      'error',
      { allowSingleExtends: false },
    ],

    /**
     * * Recommended
     * Disallow the any type.
     * https://typescript-eslint.io/rules/no-explicit-any
     */
    '@typescript-eslint/no-explicit-any': [
      'error',
      { fixToUnknown: false, ignoreRestArgs: false },
    ],

    /**
     * * Recommended
     * Disallow extra non-null assertions.
     * https://typescript-eslint.io/rules/no-extra-non-null-assertion
     */
    '@typescript-eslint/no-extra-non-null-assertion': ['error'],

    /**
     * Disallow classes used as namespaces.
     * https://typescript-eslint.io/rules/no-extraneous-class
     */
    '@typescript-eslint/no-extraneous-class': [
      'error',
      {
        allowConstructorOnly: false,
        allowEmpty: false,
        allowStaticOnly: false,
        allowWithDecorator: false,
      },
    ],

    /**
     * Require Promise-like statements to be handled appropriately.
     * https://typescript-eslint.io/rules/no-floating-promises
     */
    '@typescript-eslint/no-floating-promises': [
      'error',
      { ignoreVoid: true, ignoreIIFE: false },
    ],

    /**
     * Disallow iterating over an array with a for-in loop.
     * https://typescript-eslint.io/rules/no-for-in-array
     */
    '@typescript-eslint/no-for-in-array': ['error'],

    /**
     * * Recommended
     * Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean.
     * https://typescript-eslint.io/rules/no-inferrable-types
     */
    '@typescript-eslint/no-inferrable-types': [
      'error',
      { ignoreParameters: false, ignoreProperties: false },
    ],

    /**
     * Disallow void type outside of generic or return types.
     * https://typescript-eslint.io/rules/no-invalid-void-type
     */
    '@typescript-eslint/no-invalid-void-type': [
      'error',
      { allowInGenericTypeArguments: true, allowAsThisParameter: false },
    ],

    /**
     * Disallow the void operator except when used to discard a value.
     * https://typescript-eslint.io/rules/no-meaningless-void-operator
     */
    '@typescript-eslint/no-meaningless-void-operator': [
      'error',
      { checkNever: false },
    ],

    /**
     * * Recommended
     * Enforce valid definition of new and constructor.
     * https://typescript-eslint.io/rules/no-misused-new
     */
    '@typescript-eslint/no-misused-new': ['error'],

    /**
     * Disallow Promises in places not designed to handle them.
     * https://typescript-eslint.io/rules/no-misused-promises
     */
    '@typescript-eslint/no-misused-promises': [
      'error',
      { checksConditionals: true, checksVoidReturn: true, checksSpreads: true },
    ],

    /**
     * * Recommended
     * Disallow TypeScript namespaces.
     * https://typescript-eslint.io/rules/no-namespace
     */
    '@typescript-eslint/no-namespace': [
      'error',
      { allowDeclarations: false, allowDefinitionFiles: true },
    ],

    /**
     * Disallow non-null assertions in the left operand of a nullish coalescing operator.
     * https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing
     */
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': ['error'],

    /**
     * * Recommended
     * Disallow non-null assertions after an optional chain expression.
     * https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain
     */
    '@typescript-eslint/no-non-null-asserted-optional-chain': ['error'],

    /**
     * * Recommended
     * Disallow non-null assertions using the ! postfix operator.
     * https://typescript-eslint.io/rules/no-non-null-assertion
     */
    '@typescript-eslint/no-non-null-assertion': ['error'],

    /**
     * Disallow members of unions and intersections that do nothing or override type information.
     * https://typescript-eslint.io/rules/no-redundant-type-constituents
     */
    '@typescript-eslint/no-redundant-type-constituents': ['error'],

    /**
     * Disallow invocation of require().
     * https://typescript-eslint.io/rules/no-require-imports
     */
    '@typescript-eslint/no-require-imports': ['error'],

    /**
     * * Recommended
     * Disallow aliasing this.
     * https://typescript-eslint.io/rules/no-this-alias
     */
    '@typescript-eslint/no-this-alias': [
      'error',
      { allowDestructuring: true, allowedNames: [] },
    ],

    /**
     * Disallow type aliases.
     * https://typescript-eslint.io/rules/no-type-alias
     */
    '@typescript-eslint/no-type-alias': [
      'error',
      {
        allowAliases: 'never',
        allowCallbacks: 'never',
        allowConditionalTypes: 'never',
        allowConstructors: 'never',
        allowLiterals: 'never',
        allowMappedTypes: 'never',
        allowTupleTypes: 'never',
        allowGenerics: 'never',
      },
    ],

    /**
     * Disallow unnecessary equality comparisons against boolean literals.
     * https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare
     */
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': [
      'error',
      {
        allowComparingNullableBooleansToTrue: true,
        allowComparingNullableBooleansToFalse: true,
      },
    ],

    /**
     * Disallow conditionals where the type is always truthy or always falsy.
     * https://typescript-eslint.io/rules/no-unnecessary-condition
     */
    '@typescript-eslint/no-unnecessary-condition': [
      'error',
      {
        allowConstantLoopConditions: false,
        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
      },
    ],

    /**
     * Disallow unnecessary namespace qualifiers.
     * https://typescript-eslint.io/rules/no-unnecessary-qualifier
     */
    '@typescript-eslint/no-unnecessary-qualifier': ['error'],

    /**
     * Disallow type arguments that are equal to the default.
     * https://typescript-eslint.io/rules/no-unnecessary-type-arguments
     */
    '@typescript-eslint/no-unnecessary-type-arguments': ['error'],

    /**
     * Disallow type assertions that do not change the type of an expression.
     * https://typescript-eslint.io/rules/no-unnecessary-type-assertion
     */
    '@typescript-eslint/no-unnecessary-type-assertion': [
      'error',
      { typesToIgnore: [] },
    ],

    /**
     * Disallow unnecessary constraints on generic types.
     * https://typescript-eslint.io/rules/no-unnecessary-type-constraint
     */
    '@typescript-eslint/no-unnecessary-type-constraint': ['error'],

    /**
     * Disallow calling a function with a value with type any.
     * https://typescript-eslint.io/rules/no-unsafe-argument
     */
    '@typescript-eslint/no-unsafe-argument': ['error'],

    /**
     * Disallow assigning a value with type any to variables and properties.
     * https://typescript-eslint.io/rules/no-unsafe-assignment
     */
    '@typescript-eslint/no-unsafe-assignment': ['error'],

    /**
     * Disallow calling a value with type any.
     * https://typescript-eslint.io/rules/no-unsafe-call
     */
    '@typescript-eslint/no-unsafe-call': ['error'],

    /**
     * Disallow unsafe declaration merging.
     * https://typescript-eslint.io/rules/no-unsafe-declaration-merging
     */
    '@typescript-eslint/no-unsafe-declaration-merging': ['error'],

    /**
     * Disallow member access on a value with type any.
     * https://typescript-eslint.io/rules/no-unsafe-member-access
     */
    '@typescript-eslint/no-unsafe-member-access': ['error'],

    /**
     * Disallow returning a value with type any from a function.
     * https://typescript-eslint.io/rules/no-unsafe-return
     */
    '@typescript-eslint/no-unsafe-return': ['error'],

    /**
     * Disallow empty exports that don't change anything in a module file.
     * https://typescript-eslint.io/rules/no-useless-empty-export
     */
    '@typescript-eslint/no-useless-empty-export': ['error'],

    /**
     * * Recommended
     * Disallow require statements except in import statements.
     * https://typescript-eslint.io/rules/no-var-requires
     */
    '@typescript-eslint/no-var-requires': ['error'],

    /**
     * Enforce non-null assertions over explicit type casts.
     * https://typescript-eslint.io/rules/non-nullable-type-assertion-style
     */
    '@typescript-eslint/non-nullable-type-assertion-style': ['error'],

    /**
     * Require or disallow parameter properties in class constructors.
     * https://typescript-eslint.io/rules/parameter-properties
     */
    '@typescript-eslint/parameter-properties': [
      'error',
      { prefer: 'class-property', allow: [] },
    ],

    /**
     * * Recommended
     * Enforce the use of as const over literal type.
     * https://typescript-eslint.io/rules/prefer-as-const
     */
    '@typescript-eslint/prefer-as-const': ['error'],

    /**
     * Require each enum member value to be explicitly initialized.
     * https://typescript-eslint.io/rules/prefer-enum-initializers
     */
    '@typescript-eslint/prefer-enum-initializers': ['error'],

    /**
     * Enforce the use of for-of loop over the standard for loop where possible.
     * https://typescript-eslint.io/rules/prefer-for-of
     */
    '@typescript-eslint/prefer-for-of': ['error'],

    /**
     * Enforce using function types instead of interfaces with call signatures.
     * https://typescript-eslint.io/rules/prefer-function-type
     */
    '@typescript-eslint/prefer-function-type': ['error'],

    /**
     * Enforce includes method over indexOf method.
     * https://typescript-eslint.io/rules/prefer-includes
     */
    '@typescript-eslint/prefer-includes': ['error'],

    /**
     * Require all enum members to be literal values.
     * https://typescript-eslint.io/rules/prefer-literal-enum-member
     */
    '@typescript-eslint/prefer-literal-enum-member': [
      'error',
      { allowBitwiseExpressions: false },
    ],

    /**
     * * Recommended
     * Require using namespace keyword over module keyword to declare custom TypeScript modules.
     * https://typescript-eslint.io/rules/prefer-namespace-keyword
     */
    '@typescript-eslint/prefer-namespace-keyword': ['error'],

    /**
     * Enforce using the nullish coalescing operator instead of logical chaining.
     * https://typescript-eslint.io/rules/prefer-nullish-coalescing
     */
    '@typescript-eslint/prefer-nullish-coalescing': [
      'error',
      {
        ignoreConditionalTests: true,
        ignoreTernaryTests: true,
        ignoreMixedLogicalExpressions: true,
      },
    ],

    /**
     * Enforce using concise optional chain expressions instead of chained logical ands, negated logical ors, or empty objects.
     * https://typescript-eslint.io/rules/prefer-optional-chain
     */
    '@typescript-eslint/prefer-optional-chain': ['error'],

    /**
     * Require private members to be marked as readonly if they're never modified outside of the constructor.
     * https://typescript-eslint.io/rules/prefer-readonly
     */
    '@typescript-eslint/prefer-readonly': [
      'error',
      { onlyInlineLambdas: false },
    ],

    /**
     * Require function parameters to be typed as readonly to prevent accidental mutation of inputs.
     * https://typescript-eslint.io/rules/prefer-readonly-parameter-types
     */
    '@typescript-eslint/prefer-readonly-parameter-types': [
      'error',
      {
        checkParameterProperties: true,
        ignoreInferredTypes: false,
        treatMethodsAsReadonly: false,
      },
    ],

    /**
     * Enforce using type parameter when calling Array#reduce instead of casting.
     * https://typescript-eslint.io/rules/prefer-reduce-type-parameter
     */
    '@typescript-eslint/prefer-reduce-type-parameter': ['error'],

    /**
     * Enforce RegExp#exec over String#match if no global flag is provided.
     * https://typescript-eslint.io/rules/prefer-regexp-exec
     */
    '@typescript-eslint/prefer-regexp-exec': ['error'],

    /**
     * Enforce that this is used when only this type is returned.
     * https://typescript-eslint.io/rules/prefer-return-this-type
     */
    '@typescript-eslint/prefer-return-this-type': ['error'],

    /**
     * Enforce using String#startsWith and String#endsWith over other equivalent methods of checking substrings.
     * https://typescript-eslint.io/rules/prefer-string-starts-ends-with
     */
    '@typescript-eslint/prefer-string-starts-ends-with': ['error'],

    /**
     * Enforce using @ts-expect-error over @ts-ignore.
     * https://typescript-eslint.io/rules/prefer-ts-expect-error
     */
    '@typescript-eslint/prefer-ts-expect-error': ['error'],

    /**
     * Require any function or method that returns a Promise to be marked async.
     * https://typescript-eslint.io/rules/promise-function-async
     */
    '@typescript-eslint/promise-function-async': [
      'error',
      {
        allowAny: true,
        allowedPromiseNames: [],
        checkArrowFunctions: true,
        checkFunctionDeclarations: true,
        checkFunctionExpressions: true,
        checkMethodDeclarations: true,
      },
    ],

    /**
     * Require Array#sort calls to always provide a compareFunction.
     * https://typescript-eslint.io/rules/require-array-sort-compare
     */
    '@typescript-eslint/require-array-sort-compare': [
      'error',
      { ignoreStringArrays: false },
    ],

    /**
     * Require both operands of addition to be the same type and be bigint, number, or string.
     * https://typescript-eslint.io/rules/restrict-plus-operands
     */
    '@typescript-eslint/restrict-plus-operands': [
      'error',
      { checkCompoundAssignments: true, allowAny: false },
    ],

    /**
     * Enforce template literal expressions to be of string type.
     * https://typescript-eslint.io/rules/restrict-template-expressions
     */
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      {
        allowNumber: true,
        allowBoolean: true,
        allowRegExp: true,
        allowNullish: false,
        allowAny: false,
      },
    ],

    /**
     * Enforce constituents of a type union/intersection to be sorted alphabetically.
     * https://typescript-eslint.io/rules/sort-type-constituents
     */
    '@typescript-eslint/sort-type-constituents': [
      'error',
      {
        checkIntersections: true,
        checkUnions: true,
        groupOrder: [
          'named',
          'keyword',
          'operator',
          'literal',
          'function',
          'import',
          'conditional',
          'object',
          'tuple',
          'intersection',
          'union',
          'nullish',
        ],
      },
    ],

    /**
     * Disallow certain types in boolean expressions.
     * https://typescript-eslint.io/rules/strict-boolean-expressions
     */
    '@typescript-eslint/strict-boolean-expressions': [
      'error',
      {
        allowString: true,
        allowNumber: true,
        allowNullableObject: true,
        allowNullableBoolean: false,
        allowNullableString: false,
        allowNullableNumber: false,
        allowAny: false,
        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
      },
    ],

    /**
     * Require switch-case statements to be exhaustive with union type.
     * https://typescript-eslint.io/rules/switch-exhaustiveness-check
     */
    '@typescript-eslint/switch-exhaustiveness-check': ['error'],

    /**
     * * Recommended
     * Disallow certain triple slash directives in favor of ES6-style import declarations.
     * https://typescript-eslint.io/rules/triple-slash-reference
     */
    '@typescript-eslint/triple-slash-reference': [
      'error',
      {
        lib: 'always',
        path: 'never',
        types: 'prefer-import',
      },
    ],

    /**
     * Require type annotations in certain places.
     * https://typescript-eslint.io/rules/typedef
     */
    '@typescript-eslint/typedef': ['off'],

    /**
     * Enforce unbound methods are called with their expected scope.
     * https://typescript-eslint.io/rules/unbound-method
     */
    '@typescript-eslint/unbound-method': ['error', { ignoreStatic: false }],

    /**
     * Disallow two overloads that could be unified into one with a union or an optional/rest parameter.
     * https://typescript-eslint.io/rules/unified-signatures
     */
    '@typescript-eslint/unified-signatures': [
      'error',
      { ignoreDifferentlyNamedParameters: false },
    ],

    // ################
    // Extension Rules
    // ################

    /**
     * Enforce default parameters to be last.
     * https://typescript-eslint.io/rules/default-param-last
     */
    'default-param-last': ['off'],
    '@typescript-eslint/default-param-last': ['error'],

    /**
     * Enforce dot notation whenever possible.
     * https://typescript-eslint.io/rules/dot-notation
     */
    'dot-notation': ['off'],
    '@typescript-eslint/dot-notation': [
      'error',
      {
        allowKeywords: true,
        allowPrivateClassPropertyAccess: false,
        allowProtectedClassPropertyAccess: false,
        allowIndexSignaturePropertyAccess: false,
      },
    ],

    /**
     * Require or disallow initialization in variable declarations.
     * https://typescript-eslint.io/rules/init-declarations
     */
    'init-declarations': ['off'],
    '@typescript-eslint/init-declarations': ['error', 'always'],

    /**
     * Disallow generic Array constructors.
     * https://typescript-eslint.io/rules/no-array-constructor
     */
    'no-array-constructor': ['off'],
    '@typescript-eslint/no-array-constructor': ['error'],

    /**
     * Disallow duplicate class members.
     * https://typescript-eslint.io/rules/no-dupe-class-members
     */
    'no-dupe-class-members': ['off'],
    '@typescript-eslint/no-dupe-class-members': ['error'],

    /**
     * ! This rule has been deprecated in favour of the import/no-duplicates rule.
     * Disallow duplicate imports.
     * https://typescript-eslint.io/rules/no-duplicate-imports
     */
    'no-duplicate-imports': ['off'],
    '@typescript-eslint/no-duplicate-imports': ['off'],

    /**
     * * Recommended
     * Disallow empty functions.
     * https://typescript-eslint.io/rules/no-empty-function
     */
    'no-empty-function': ['off'],
    '@typescript-eslint/no-empty-function': ['error', { allow: [] }],

    /**
     * * Recommended
     * Disallow unnecessary semicolons.
     * https://typescript-eslint.io/rules/no-extra-semi
     */
    'no-extra-semi': ['off'],
    '@typescript-eslint/no-extra-semi': ['error'],

    /**
     * Disallow the use of eval()-like methods.
     * https://typescript-eslint.io/rules/no-implied-eval
     */
    'no-implied-eval': ['off'],
    '@typescript-eslint/no-implied-eval': ['error'],

    /**
     * Disallow this keywords outside of classes or class-like objects.
     * https://typescript-eslint.io/rules/no-invalid-this
     */
    'no-invalid-this': ['off'],
    '@typescript-eslint/no-invalid-this': [
      'error',
      {
        capIsConstructor: false,
      },
    ],

    /**
     * Disallow function declarations that contain unsafe references inside loop statements.
     * https://typescript-eslint.io/rules/no-loop-func
     */
    'no-loop-func': ['off'],
    '@typescript-eslint/no-loop-func': ['error'],

    /**
     * * Recommended
     * Disallow literal numbers that lose precision.
     * https://typescript-eslint.io/rules/no-loss-of-precision
     */
    'no-loss-of-precision': ['off'],
    '@typescript-eslint/no-loss-of-precision': ['error'],

    /**
     * Disallow magic numbers.
     * https://typescript-eslint.io/rules/no-magic-numbers
     */
    'no-magic-numbers': ['off'],
    '@typescript-eslint/no-magic-numbers': [
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
     * Disallow variable redeclaration.
     * https://typescript-eslint.io/rules/no-redeclare
     */
    'no-redeclare': ['off'],
    '@typescript-eslint/no-redeclare': [
      'error',
      {
        builtinGlobals: true,
        ignoreDeclarationMerge: false,
      },
    ],

    /**
     * Disallow specified modules when loaded by import.
     * https://typescript-eslint.io/rules/no-restricted-imports
     */
    'no-restricted-imports': ['off'],
    '@typescript-eslint/no-restricted-imports': ['off'],

    /**
     * Disallow variable declarations from shadowing variables declared in the outer scope.
     * https://typescript-eslint.io/rules/no-shadow
     */
    'no-shadow': ['off'],
    '@typescript-eslint/no-shadow': [
      'error',
      {
        hoist: 'all',
        builtinGlobals: true,
        ignoreTypeValueShadow: false,
        ignoreFunctionTypeParameterNameValueShadow: true,
      },
    ],

    /**
     * Disallow throwing literals as exceptions.
     * https://typescript-eslint.io/rules/no-throw-literal
     */
    'no-throw-literal': ['off'],
    '@typescript-eslint/no-throw-literal': [
      'error',
      {
        allowThrowingAny: false,
        allowThrowingUnknown: false,
      },
    ],

    /**
     * Disallow unused expressions.
     * https://typescript-eslint.io/rules/no-unused-expressions
     */
    'no-unused-expressions': ['off'],
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false,
        enforceForJSX: true,
      },
    ],

    /**
     * * Recommended
     * Disallow unused variables.
     * https://typescript-eslint.io/rules/no-unused-vars
     */
    'no-unused-vars': ['off'],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        caughtErrors: 'all',
        ignoreRestSiblings: true,
      },
    ],

    /**
     * Disallow the use of variables before they are defined.
     * https://typescript-eslint.io/rules/no-use-before-define
     */
    'no-use-before-define': ['off'],
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        classes: true,
        functions: true,
        variables: true,
        enums: true,
        typedefs: true,
        ignoreTypeReferences: true,
      },
    ],

    /**
     * Disallow unnecessary constructors.
     * https://typescript-eslint.io/rules/no-useless-constructor
     */
    'no-useless-constructor': ['off'],
    '@typescript-eslint/no-useless-constructor': ['error'],

    /**
     * Disallow async functions which have no await expression.
     * https://typescript-eslint.io/rules/require-await
     */
    'require-await': ['off'],
    '@typescript-eslint/require-await': ['error'],

    /**
     * Enforce consistent returning of awaited values.
     * https://typescript-eslint.io/rules/return-await
     */
    'no-return-await': ['off'],
    '@typescript-eslint/return-await': ['error'],

    // ################
    // Formatting Rules
    // ################

    /**
     * Enforce consistent brace style for blocks.
     * https://typescript-eslint.io/rules/brace-style
     */
    'brace-style': ['off'],
    '@typescript-eslint/brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true,
      },
    ],

    /**
     * Require or disallow trailing commas.
     * https://typescript-eslint.io/rules/comma-dangle
     */
    'comma-dangle': ['off'],
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],

    /**
     * Enforce consistent spacing before and after commas.
     * https://typescript-eslint.io/rules/comma-spacing
     */
    'comma-spacing': ['off'],
    '@typescript-eslint/comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],

    /**
     * Require or disallow spacing between function identifiers and their invocations.
     * https://typescript-eslint.io/rules/func-call-spacing
     */
    'func-call-spacing': ['off'],
    '@typescript-eslint/func-call-spacing': ['error', 'never'],

    /**
     * Enforce consistent indentation.
     * https://typescript-eslint.io/rules/indent
     */
    'indent': ['off'],
    '@typescript-eslint/indent': [
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
     * Enforce consistent spacing before and after keywords.
     * https://typescript-eslint.io/rules/keyword-spacing
     */
    'keyword-spacing': ['off'],
    '@typescript-eslint/keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],

    /**
     * Require or disallow an empty line between class members.
     * https://typescript-eslint.io/rules/lines-between-class-members
     */
    'lines-between-class-members': ['off'],
    '@typescript-eslint/lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true,
        exceptAfterOverload: true,
      },
    ],

    /**
     * Require a specific member delimiter style for interfaces and type literals.
     * https://typescript-eslint.io/rules/member-delimiter-style
     */
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
        multilineDetection: 'brackets',
      },
    ],

    /**
     * Disallow unnecessary parentheses.
     * https://typescript-eslint.io/rules/no-extra-parens
     */
    'no-extra-parens': ['off'],
    '@typescript-eslint/no-extra-parens': ['error', 'functions'],

    /**
     * Enforce consistent spacing inside braces.
     * https://typescript-eslint.io/rules/object-curly-spacing
     */
    'object-curly-spacing': ['off'],
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],

    /**
     * Require or disallow padding lines between statements.
     * https://typescript-eslint.io/rules/padding-line-between-statements
     */
    'padding-line-between-statements': ['off'],
    '@typescript-eslint/padding-line-between-statements': ['off'],

    /**
     * Enforce the consistent use of either backticks, double, or single quotes.
     * https://typescript-eslint.io/rules/quotes
     */
    'quotes': ['off'],
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: false,
      },
    ],

    /**
     * Require or disallow semicolons instead of ASI.
     * https://typescript-eslint.io/rules/semi
     */
    'semi': ['off'],
    '@typescript-eslint/semi': [
      'error',
      'always',
      {
        omitLastInOneLineBlock: false,
      },
    ],

    /**
     * Enforce consistent spacing before blocks.
     * https://typescript-eslint.io/rules/space-before-blocks
     */
    'space-before-blocks': ['off'],
    '@typescript-eslint/space-before-blocks': [
      'error',
      {
        functions: 'always',
        keywords: 'always',
        classes: 'always',
      },
    ],

    /**
     * Enforce consistent spacing before function parenthesis.
     * https://typescript-eslint.io/rules/space-before-function-paren
     */
    'space-before-function-paren': ['off'],
    '@typescript-eslint/space-before-function-paren': [
      'error',
      {
        named: 'never',
        anonymous: 'always',
        asyncArrow: 'always',
      },
    ],

    /**
     * Require spacing around infix operators.
     * https://typescript-eslint.io/rules/space-infix-ops
     */
    'space-infix-ops': ['off'],
    '@typescript-eslint/space-infix-ops': [
      'error',
      {
        int32Hint: false,
      },
    ],

    /**
     * Require consistent spacing around type annotations.
     * https://typescript-eslint.io/rules/type-annotation-spacing
     */
    '@typescript-eslint/type-annotation-spacing': [
      'error',
      {
        after: true,
        before: false,
        overrides: {
          arrow: {
            after: true,
            before: true,
          },
        },
      },
    ],
  },
};
