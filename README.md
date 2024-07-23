This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Prerequisites
Run the following terminal commands to install dependencies
- npm install mongodb mongoose next-auth
- npm install --save @jsonforms/core
- npm install --save @jsonforms/react
- npm install --save @jsonforms/material-renderers
- npm install --save @jsonforms/examples

- npm install --save @mui/material
- npm install --save @mui/icons-material
- npm install --save @mui/x-date-pickers

- npm install --save @emotion/styled
- npm install --save @emotion/react

There may be some errors with the dependency @mui.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Project Tech Requirements
- [x] Create a system design to fulfill the above requirements.
- [x] Use JsonForms to implement the lead form in a configuration driven way.
- [x] Use Next.js to implement the application.
- [In Progress] Implement API routes using Next.js API support or mock the API endpoints if necessary.
- [x] Implement a mock authentication mechanism to protect the internal leads list UI.
- [ ] Use a state management library (e.g., Redux) to manage the state of the leads.
- [ ] Implement file upload for the resume/CV.
- [x] Implement form validation to ensure all required fields are filled in correctly.
- [ ] Style the application using CSS or a CSS-in-JS library (e.g., styled-components).

## System Design
- Database: mongodb with mongoose for database management
- Authentication: next-auth for authenticating access to leads data

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
