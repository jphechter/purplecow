# Project Purple Cow - JP Hechter

Welcome to "Project Purple Cow"! This is a submission for Fearless' technical trial project.

This is a web application built using the Angular framework. It provides a simple user interface to 'hit' and display a number of 'hits' on a website.

## Technology Used

- Angular 12.0.3 (Node.js 14.17.0 LTS)
- CountApi.xyz

## Dev Setup

### Prerequisites

To run the application, you must have a local enviroment prepared for Angular development. I recommend checking the Angular documentation for the most up to date information.
[Angular - Getting Started](https://angular.io/guide/setup-local)

Angular requires an active LTS version of [Node.js](https://nodejs.org). If you already have a running version of Node.js, I recommend considering [Node Version Manager or NVM](https://github.com/nvm-sh/nvm) to install multiple versions of Node.js locally.

### Setup & Local Development

1. Clone this repository to your local machine

2. Install all dependencies
   `npm install`

3. To serve the application simply run
   `ng serve --open` or `npm start`
   Note: Running via npm will not automatically open a new browser window.

4. The app should now be running at `localhost:3000`. If needed, this port can easily be changed in the file `angular.json` under "serve".

### Deployment

Run `ng build` to create a production ready build. Output should be stored in the `dist` directory.

---

## Future Updates

**Setup Routing**
This is currently a 1 page app, and it's fine the way it is. If we're expecting to create additional features, there may be a need to host those features on separate pages.
**Design Updates**
As it stands right now, the page could be given a makeover to make it more interesting and user friendly. I might not be the person to pick the colors, but I'd love to put them on!
**Counter Component**
The counter component is only able to "hit" one particular endpoint. A future refactor might allow someonet to specify the endpoint or particular parameters with each implementation.
**Other Metrics**
I purposely baked in logic to check the number of clicks a person makes on the button. This number could be displayed on page as an additional piece of data. Throughout the development process I found myself clicking the "hit" button multiple times. I could implement logic that asks "why are you hitting me?" after 5 clicks, or tells a joke, etc.

## Assumptions

**Button Component**
When I started building, I was very focused on componentizing everything to meet the requirements of the project. So I started by building a button component. There's nothing inherently wrong with this, but I quickly opted to refactor. I don't think that the Counter component needs to be segmented into smaller pieces. This decision was an important reminder that components are helpful, but used too liberally can also overcomplicate a solution.

Instead of uisng a button component, I defined button styles globally so any future instances of `button`s will appear similarly without carrying over any other functionality. In this case, this is a better way of standardizing button implementation.
