import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:8080",
  documents: "src/lib/services/graphql/requests/**/*.ts",
  generates: {
    "src/lib/services/graphql/generated.tsx": {
      plugins: ["typescript", "typescript-operations", "typescript-urql"],
      config: {
        gqlImport: "urql#gql",
      },
    },
  },
};

export default config;
