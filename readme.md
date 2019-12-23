# A Portfolio-Builder Demo

This uses public apis from [foriio.com](foriio.com) to create a basic implementation of a portfolio-sharing site in React.

## Setup

To run this project you will need to clone it and run `npm install` to install the required node modules. This project has been tested on node version 12.5.0.

`npm run start` will start web-dev-server running on [http://localhost:8080/](http://localhost:8080/).

## Features

`/creators` will display a curated list of content creators.
`/users/:id` will display profile information and works of one user.
`/works/:id` will display information and additional images of one work.

You can use the sample links in the menu to see the user Hirohito and work 43 as examples.

## Advantages

This demo was built with performance in mind. I approached this with the goal of improving on as the categories evaluated by Google's Lighthouse tool: Performance, Accessibility, Best Practices, and SEO. (Progressive Web App tooling would be a phase two improvement.)

Although testing on different servers is not an entirely accurate comparison, I am nevertheless pleased with the improvements made.

foriio for /works/26553:

![foriio](https://raw.githubusercontent.com/tokyorachel/react-folio-demo/master/screenshots/foriio-performance.jpg)


My portfolio builder for the same url:

![local re-work](https://raw.githubusercontent.com/tokyorachel/react-folio-demo/master/screenshots/local-performance.jpg)

I also added a button for users to show their love for a particular work. Although foriio currenty has the option to favorite creators, I like the idea of users being able to show appreciation for particular works they like. I envision a system for (moderated) comments and feedback might also give users more incentive to engage with one another and build community.

## Considerations

This was built over 3 days. I opted not to use existing scaffolding tools like create-react-app or NextJS, even though NextJS would be my strong choice if SSR rendering we a hard requirement. But I wanted to exploring setting these things up manually, even if there was not enough time to do all the things I would have liked.

## Next Steps

 - Optimize webpack production build config
 - Make into a Progressive Web App
 - Add localization & language switching
 - Server side rendering