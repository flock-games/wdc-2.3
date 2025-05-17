# Template

## First Steps

- Create Supabase project
- Copy .env.template -> .env and update with Supabase params
- Replace .npmrc fontawesome auth token.
  - if using non-standard kit, create one on fontawesome.com and update kit ids throughout.
- npm install
- npm run dev
- Pinia store to composables
- replace this readme with something more useful

## Hosting on Netlify

- add git branch
- env variables
- connect to domain name

## Useful Snippets
Generate types from supabase db:

```
npx supabase gen types typescript --project-id "REPLACE_WITH_PROJECT_ID" --schema public > database.types.ts
```

If it doesn't work on Nelify, `nuxt.config.ts` may need:
```
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      cssnano:
        process.env.NODE_ENV === "production"
          ? { preset: ["default", { discardComments: { removeAll: true } }] }
          : false, // disable cssnano when not in production
    },
  },
  ```
