export type Technology =
  | "apollo"
  | "urql"
  | "codegen"
  | "dotNet"
  | "gatsby"
  | "nextjs"
  | "react"
  | "graphql"
  | "node"
  | "postgresql"
  | "sccm"
  | "cSharp"
  | "css"
  | "html"
  | "javascript"
  | "powerShell"
  | "typescript"
  | "aws"
  | "azure"
  | "heroku"
  | "eslint"
  | "git"
  | "npm"
  | "prettier"
  | "yarn";

export type Technologies = (Technology | TechnologyAlternative)[];

export interface TechnologyAlternative {
  key: Technology;
  title: string;
  alt: string;
}

export type TechnologyDictionary = {
  [key in Technology]: {
    src: string;
    title: string;
    alt: string;
  };
};
