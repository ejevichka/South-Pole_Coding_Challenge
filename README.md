
<div>
  <p>This is a <a href="https://nextjs.org/" target="_blank">Next.js</a> project bootstrapped with <code>create-next-app</code>, added with <b>Material UI</b> and <b>TypeScript</b>setup. <br/></p>

</div>

## About project

In this project, I decided not to use <a href="https://react-redux.js.org/">React-Redux</a> for managing state for a few reasons:

Simplicity: The project's state management requirements are relatively straightforward, and we did not have an overwhelming need for a complex state management system like Redux. Instead, we utilized React's built-in useState and useReducer hooks to handle local state and application-level state.

Scalability Consideration: If the project grows and state management becomes more complex, we can always introduce Redux or other state management libraries. However, it's essential to choose the right tool for the right job and not over-engineer the solution from the beginning.

I took inspiration from Dan Abramov's <a href="https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367">approach</a>, where he discusses alternatives to using Redux for state management in React applications. Additionally, I also referred to the <a href="https://react.dev/learn/scaling-up-with-reducer-and-context">React documentation on scaling up with reducer and context</a> to leverage the reducer pattern along with context API.

As a result, I designed the `AirportDistanceContext` and `ReducerContext` to handle state management, providing a `dispatch` function and flight data with precalculated CO2 footprints saved to the state. The distance for the calculation was supposed to be obtained from the `useAirportDistance` custom hook. However, due to limitations with the SITA API, which did not provide the necessary access or response, I made the decision to create my own endpoints and middleware to obtain distance data. This approach helped decrease dependency on external systems and allowed to have more control over the data flow.

For larger projects, I would consider using Redux middleware to perform asynchronous workflows in background threads. Redux Thunks would be a suitable choice for handling request and dispatch use cases, such as calling `useAirportDistance` after dispatching the `ADD_FLIGHT` action. However, for the current project, I decided to trigger `useAirportDistance` when the `From` and `To` fields are set and precalculate the CO2 footprint for this data set before submitting the form. This decision ensures that the calculated data is ready and available when needed.

By combining the reducer pattern with context API, the application's state management is organized, efficient, and easy to reason about. As the project grows, this scalable approach will allow for the addition of more complex state management solutions if required. In summary, I adopted a balanced approach to state management, choosing the right tools for the specific requirements of the project, while remaining open to future enhancements and optimizations.

I've used the theme from Material UI to style general components and provide consistent visual styling throughout the application, like set default colors, fonts, spacing, and other visual attributes. By doing so, I ensure a cohesive look and feel across the entire application, creating a seamless user experience.

On the other hand, for more specific use cases and custom components, I implemented styled components from Material UI. Styled components provide a higher level of customization, enabling me to define unique styles that are tailored to specific components or sections of the application.

So, let's run this

- 🚀 **Next.js 13** - **React 18**
- ⛓️ **TypeScript**
- **Material-UI** v2
- ✔️ **toolings** for linting, formatting, and conventions configured 
  - `eslint`, `prettier`, `husky`, `lint-staged`, `commitlint`, `commitizen`, and `standard-version`
  - `pre-commit`, `pre-push`, `commit-msg`, `prepare-commit-msg` hook configured
- 📱 **PWA-ready** - `next-pwa` configured, disabled by default, just enable it through `next.config.js`
- 🔎 SEO optimization configured - with `next-seo` and `next-sitemap`. 
  - you'll need to reconfigure or tinker with it to get it right according to your needs, but it's there if you need it.
- 🎨 basic responsive layout configured 😃
- 🤖 **Automatic Dependency Update** with [Renovate](https://renovatebot.com/) 
- 🏎️ **Turbo** setup
- 🧪 **Playwright** E2E Test


## Pre-requisites

1. [Node.js](https://nodejs.org/en/) or nvm installed.
2. `pnpm` installed.

I've chosen PNPM, because it uses a symlink-based approach, which can result in faster installations and updates compared to Yarn.
## Getting Started

2. After cloning the project, run this command: `pnpm` or `pnpm install`

3. Then, run the development server:

```bash
pnpm dev
```

4. Running unit tests:

```bash
pnpm test
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/lib/pages/index.tsx`. The page auto-updates as you edit the file.

## How to Run e2e Test (in local machine)
1. run locally the test with `pnpm test:e2e`.
or to test build version:
1. Build production with `pnpm build`, then run the production build using `pnpm start`.
2. Open another terminal (or new terminal tab, don't cancel / close the production server), then run the test with `pnpm test:e2e`.


References:

- https://nextjs.org/docs/testing#playwright
  - https://nextjs.org/docs/testing#running-your-playwright-tests
