# Repo organization

We use [npm workspaces](https://docs.npmjs.com/cli/v8/using-npm/workspaces) to manage monorepo.

To install dependency into a certain workspace use next command:

```
npm install $PACKAGE_NAME$ -w $WORKSPACE_NAME$
```

Install lodash into a client workspace:

```
npm install lodash -w client
```