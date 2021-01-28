# LearnNx

## Learning to use Nx and covering for some specific use cases.

### Requirements:

- Create a gatsby app with static pages (atleast one).
    - add Gatsby plugin: `yarn add -D @nrwl/gatsby`
    - create a gatsby app: `nx generate @nrwl/gatsby:app static-app`
    - (index page in gatsby is ts? why not js?)
    - serve app: `nx run static-app:serve --open`

- Create a react app with a SPA page.
    - added react preset by default
    - create react app: `nx generate @nrwl/react:app spa`
    - serve app: `nx run spa:serve --open`

- Create a feature (a header?) which is shown in dashboard and static page.
    - create `shared` lib: `nx generate @nrwl/react:lib shared`
    - add header component in this lib. `nx generate @nrwl/react:component ui-header --project=shared`
    - use the header in both the apps.

- Implement redux.
    - implmented redux as per the existing way, creating separate actions and reducers.
    - alternate implementation using redux toolkit and slices.
    - Do we need to use redux-dynamic modules.

- Run the whole app
    - we can't run both apps together, apps are independent of each other and will run separately.

- Implement Navigation
    - do we need to make it a lib?
    - navigation works fine, we can trigger navigation from page to page in the app. And also from compnent(lib) to page.
    - navigation will work as a callback.

- Implement Localization
    - localization working fine, in Gatsby app and in the lib components.

- Implement Survey
  - TBD



### Lessons:
- configuration in workspace is change to generate JS files by default
- Dry run before running the command and check if its ts or JS
- `js: true` is not working for libs


### Questions:
- how to change the default app?
- how to remove an app.
- what redux architecture will we use? Do we need redux dynamic modules
