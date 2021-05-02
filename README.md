# mvce
Test app using this api

Base Url: https://api.govinfo.gov/
Endpoint: “/collections/BILLS/2020-01-28T20%3A18%3A10Z?offset=0&pageSize=100&api_key=${key}”
Get unique key: https://api.data.gov/signup/




## Running for development

Follow these steps to get the project up and running for development

- `npm install`
- `cp .env.example .env`
- Setup appropriate env variables
- If first time run make sure you have created your local  `mysql` database schema.
- Run `npx prisma migrate dev` to update database with new migrations.
- `npm run dev` for development.

## Running for deployment

Follow these steps to get the project up and running for development

- `npm install`
- `cp .env.example .env`
- Setup appropriate env variables
- Run `npx prisma generate` to install prisma client.
- If first time run make sure you have created your local  `mysql` database schema.
- Run `npx prisma migrate deploy` to update database with new migrations.
- `npm run start` to see it in action.
- We use `pm2` to manage the application in production.


## Prisma

When you make changes to prisma schema during development.
- Run `npx prisma migrate dev --name {some-name-here} --create-only` to generate a new migration sql.
- You can inspect the new migration sql file, make changes you want.
- To apply the migrations to the database, run `npx prisma migrate dev`

Refere to https://www.prisma.io/docs/concepts/components/prisma-client doc to understand how to make queries.

Some interesting things
- run `npx prisma studio` and see what happens.


## Scripts

- `npm run dev` to start dev server
- `npm run sync` to synchronize blockchain data to db
