import nx from "@nx/eslint-plugin";
import tseslint from "typescript-eslint";

export default [
    ...nx.configs["flat/base"],
    ...nx.configs["flat/typescript"],
    ...nx.configs["flat/javascript"],
    {
      "ignores": [
        "**/dist",
        "**/vite.config.*.timestamp*",
        "**/vitest.config.*.timestamp*"
      ]
    },
    {
        files: [
            "**/*.ts",
            "**/*.tsx",
            "**/*.js",
            "**/*.jsx"
        ],
        rules: {
            "@nx/enforce-module-boundaries": [
                "error",
                {
                    enforceBuildableLibDependency: true,
                    allow: [
                        "^.*/eslint(\\.base)?\\.config\\.[cm]?[jt]s$"
                    ],
                    depConstraints: [
                        {
                            sourceTag: "*",
                            onlyDependOnLibsWithTags: [
                                "*"
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        files: [
            "**/*.ts",
            "**/*.tsx",
            "**/*.cts",
            "**/*.mts",
            "**/*.js",
            "**/*.jsx",
            "**/*.cjs",
            "**/*.mjs"
        ],
        // Enhanced TypeScript and code quality rules
        rules: {
            // TypeScript strict rules (non-type-aware)
            "@typescript-eslint/no-unused-vars": "error",
            "@typescript-eslint/no-explicit-any": "error",
            "@typescript-eslint/no-inferrable-types": "error",
            "@typescript-eslint/no-non-null-assertion": "warn",
            "@typescript-eslint/explicit-function-return-type": "off",
            "@typescript-eslint/explicit-module-boundary-types": "off",
            "@typescript-eslint/no-empty-function": "warn",
            "@typescript-eslint/no-empty-interface": "warn",
            
            // Code quality rules
            "no-console": "warn",
            "no-debugger": "error",
            "no-alert": "error",
            "no-var": "error",
            "prefer-const": "error",
            "eqeqeq": ["error", "always"],
            "curly": ["error", "all"],
            "no-throw-literal": "error"
        }
    },
    {
        // Specific rules for frontend applications
        files: [
            "apps/*/src/**/*.ts",
            "apps/*/src/**/*.tsx"
        ],
        rules: {
            // Frontend-specific stricter rules
            "@typescript-eslint/no-unused-vars": ["error", { 
                "argsIgnorePattern": "^_",
                "varsIgnorePattern": "^_" 
            }],
            "no-console": ["warn", { "allow": ["warn", "error"] }]
        }
    },
    {
        // Specific rules for backend services
        files: [
            "apps/*service*/src/**/*.ts"
        ],
        rules: {
            // Backend-specific rules
            "no-console": "off", // Console.log is okay in backend services
            "@typescript-eslint/no-unused-vars": ["error", { 
                "argsIgnorePattern": "^_" 
            }]
        }
    },
    {
        // Specific rules for shared libraries
        files: [
            "libs/*/src/**/*.ts",
            "libs/*/src/**/*.tsx"
        ],
        rules: {
            // Stricter rules for shared libraries
            "@typescript-eslint/explicit-function-return-type": "warn",
            "@typescript-eslint/explicit-module-boundary-types": "warn",
            "no-console": "error" // No console logs in shared libraries
        }
    }
];
