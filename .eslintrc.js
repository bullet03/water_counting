module.exports = {
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
      "ecmaVersion": 2017
    },
    "settings": {
      "import/resolver": {
        "node": {
          "extensions": [".js", ".jsx", ".ts", ".tsx"],
          "paths": ["src"]
        }
      }
    },
  "rules": {
      "prettier/prettier": [
        "error",
        {
          "endOfLine": "auto"
        },
      ],
			"import/order": [
					2,
					{
						"alphabetize": {
							"order": "asc",
							"caseInsensitive": false
						},
						"groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
						"newlines-between": "always",
						"pathGroups": [
							{
								"pattern": "react",
								"group": "external",
								"position": "before"
							}
						],
						"pathGroupsExcludedImportTypes": ["react"]
					}
				],
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          "js": "never",
          "jsx": "never",
          "ts": "never",
          "tsx": "never"
        }
      ],
      "import/prefer-default-export": "off",
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": ["error"],
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "no-shadow": "off",
      "@typescript-eslint/no-shadow": ["error"],
    },
    "extends": [
      "airbnb-base",
      "plugin:@typescript-eslint/recommended",
      "prettier",
      "plugin:prettier/recommended",
      "plugin:import/errors"
    ],
    "plugins": ["@typescript-eslint", "prettier", "promise", "import"]
  };
  