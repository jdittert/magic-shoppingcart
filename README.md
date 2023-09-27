# Magic Card Shopping Cart

## Description
[Live Demo](https://jdittert.github.io/magic-shoppingcart/)

MagiStore is a fake Magic: the Gathering commerce site in the vein of StarCityGames.com or TCGPlayer.com. The site features a shopping cart as well as 
content pages for articles, events, etc. My goals were to implement a functional shopping cart, get more comfortable using Bootstrap for styling, and utilize
[Scryfall's API](https://scryfall.com/docs/api).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and styled with [React Bootstrap](https://react-bootstrap.netlify.app/).

The initial inspiration for this project came from [this tutorial](https://www.youtube.com/watch?v=lATafp15HWA&ab_channel=WebDevSimplified). I coded in 
plain Javascript instead of TypeScript an added additional functionality.

## Features
- Functional shopping cart that persists via LocalStorage.
- Ability to search for any Magic: the Gathering card in [Scryfall's](https://scryfall.com/) database and add that card to your cart.
- Content pages that populate from external json files.

## Changes for Production 
These changes have not been implemented in this project but would be required for a fully functional website:
- Switch hash router to browser router (presumably the site would not be hosted on Github pages).
- Add functionality for checking out and payment.
- Allow users to search for specific versions of cards rather than Scryfall's default version.
- Fill ads, banners, and articles with actual content.
- Add a login procedure with routes specfically for "premium" members.
