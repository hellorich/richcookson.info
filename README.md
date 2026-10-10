# richcookson.info

My resume web site.

## Development

Requires Node 22.17 or later.

1. Start up the development server using `npm run dev` and open [http://localhost:3000](http://localhost:3000).
2. Start up Storybook for component development using `npm run storybook` and open [http://localhost:6007](http://localhost:6007).

## Linting and formatting

This app uses [Biome](https://biomejs.dev) for linting and formatting.

- `npm run check` lints and checks formatting
- `npm run lint` lints only
- `npm run format` formats all files

## Testing

This app uses Storybook for component development, publishing to Chromatic on each PR to automate visual and interaction tests. This also allows integration of Storybook with Figma for a seamless design / development workflow.

## External Links

- Progress and tasks tracked on [Trello](https://trello.com/b/QFbikkXi/richcooksoninfo)

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
