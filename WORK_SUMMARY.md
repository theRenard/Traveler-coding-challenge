# WORK SUMMARY

## The idea:


As the mission was to build an app to help people plan a trip I've thought that showing a plan was of utmost importance so important that the whole app could run on the top of it.

So I've decided for a full-screen plan, with a search field capable of searching into both cities and countries, with a selectable list of results that could fire an animation to the selected geographic coordinates.

The user could then take a quick look at the city information and the add it to it's journey list drawer.

## Libraries and frameworks

I've build it on top of vue-cli with some frameworks to speed up the development:

- <b>element-ui</b> is a nice set of UI components which are pretty robust and with good documentation. That was the choice for some vue components.
- <b>vuex</b> to pass some data between components, no actions or modules where used...
- <b>vue-apollo</b> is a layer on apollo to expose some nice methods on the top of vue applications. That was a bit overkill and I've lost a lot of time on its documentation 😅
- <b>openlayer</b> was the choice for the map. It's a splendid example of a robut framework with good documentation and nice examples.

The app is very simple, the repository tree is quite standard, we have:

  - components [all components] 
  - gql-queries [cities, countries queries] 
  - map [some utilities for the map] 
  - router [pretty unused] 
  - store [used for Cities[] and some shared variables] 
  - config.json [to store some app constants]

## Components

### Search.vue
The core of the App, heavily use `el-autocomplete` with the list of suggestions that's created from two graphQL queries. If you wonder why two, it's because I couldn't be able to figure out if querying both countries and cities was possible. There's a catch with the API it seems that query with partial values isn't possible and that the api is case sensitive. So for instance "rome" gives 0 results, so as "ome" 😕. Given the reactive nature of graphQL being forced to use promises seems crazy, but I'm sure more elegant solutions are available once mastered apollo. 

### Map.vue
Just the OL container, no surprises at all here.

### Overlay.vue
This components shows the few city informations retrieved from the API. Even if created as a vue component instance it is passed to OL without losing any reactivity.

### Journey.vue
This is just a component that hosts the journey cities table. Very simple.


#### final notes
There are bugs, some are inherited from element-ui that even if solid as a rock forces you to some compromises... I think that there is space for a lot of improvements but I dare to say that that for a version 0.x.x is not too bad and that it could be easily updated as the code is pretty clear.