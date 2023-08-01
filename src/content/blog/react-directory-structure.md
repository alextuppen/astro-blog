---
title: "How to structure directories in React"
description: "Lorem ipsum dolor sit amet"
pubDate: "2023/01/23"
heroImage: "/blog-placeholder-5.jpg"
---

## Why does directory structure matter?

For the computer’s ability to interpret code it doesn’t, but a well organised code base makes it much easier for a human to understand where the code they need is in a repository. In a small individual project this might not be that important. But in a large commercial project with multiple teams working in parallel and regular changes in developers, any small increase in productivity or reduction in on-boarding time provides cheap and fast value to the organisation.

## What is a component?

If the goal of component organisation is to improve developer productivity by making the directory structure as intuitive as possible then we must first understand what a component is. The React documentation defines a component as:

> “Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.<br>
> — <cite>React documentation: components and props[^1]</cite>

[^1]: [React documentation: components and props](https://reactjs.org/docs/components-and-props.html)

If this is how any developer working with components understands them then the most intuitive way to organise them is in such a way that the properties of isolated, independent and reusable are implemented in how the code is organised as well as written.

## Simple component directory

Below is an example of how a simple component might be organised, there is a single directory which is named after the files of the component it contains, within that directory each file has a name which explains the role it performs at a glance.

```
ComponentName
├── index.ts
├── ComponentName.tsx
├── ComponentName.styles.tsx
└── ComponentName.test.tsx
```

##### index.ts

The index file is how the component interacts with the outside world, often the only export from this file will be the component itself but it could also include things like a type describing the components props. Using an index file reduces the length of the import when the component is used from:

```TypeScript
import { ComponentName } from ../../ComponentName/ComponentName
```

To:

```TypeScript
import { ComponentName } from ../../ComponentName
```

Which is a small difference but in a large code base adds up quickly.

##### ComponentName.tsx

Contains the component itself, the core logic and the JSX markup.

##### ComponentName.styles.tsx

The styles file could be styled components, CSS in JS, SASS, CSS etc, but it is split out from the main component because styling often generates a lot of lines of code and a single file containing logic, styling and markup can get very large very quickly.

##### ComponentName.test.tsx

The test file contains the unit tests for the component, some people prefer to group their test files together away from the code being tested, but that breaks the rule that a component is an object that is isolated and independent; everything about the component should be grouped together in one place.

## Parents and children

Sometimes you need to break the rule that a component must be independent, when creating a complex component, especially one with a repeating element, it is often good practice to create a tightly coupled child component. As our previously described directory structure pattern is intended to describe what everything in the directory does at a glance we need a way to show the tightly coupled relationship between a parent and a child component. Fortunately the existing pattern is recursive.

```
Components
└── Parent
    ├── index.ts
    ├── Parent.tsx
    └── Child
        ├── index.ts
        └── Child.tsx
```

This pattern becomes particularly useful when a child component needs to be decoupled from its parent and made into an independent component, as the component is already self contained in its own directory you can simply move the directory and then update the logic accordingly.

```
Components
├── Parent
│   ├── index.ts
│   └── Parent.tsx
└── Child
    ├── index.ts
    └── Child.tsx
```

## Complex component directory

Should a component become more complex or have additional dependencies this pattern can of course expand to accommodate additional files. For example if custom hooks are created there are two options, for simple tightly coupled hooks where the objective is to move logic out of a large component file a dedicated hooks file is suitable:

```
ComponentName.hooks.ts
```

Alternatively if a hook is more complex it may make more sense to create a dedicated directory for it, so that any tests, types, etc are self contained and the hook can be moved about the code base as required.

```
ComponentName
├── index.ts
├── ComponentName.tsx
└── useCustomHook
    ├── index.ts
    ├── useCustomHook.ts
    └── useCustomHook.test.ts
```

Automatic type generation is another excellent example of how this pattern can help keep a code base organised and easy to navigate. When using GraphQL code generator each component requires two additional files, one to contain the fragments, queries and mutations that the component needs and another to contain the automatically generated types.

```
ComponentName
├── index.ts
├── ComponentName.tsx
├── ComponentName.generated.tsx
├── ComponentName.graphql
├── ComponentName.styles.tsx
└── ComponentName.test.tsx
```

## Conclusion

Between styles, types, tests, logic, hooks, and child components a React component can easily become a large amount of code, in any code base this complexity is multiplied by all of the components in the application which can easily become confusing. But if you organise your directories with the same mindset as you organise your logic, using the principles of isolated, independent and reusable, you can always know which file contains the code you need to work.
