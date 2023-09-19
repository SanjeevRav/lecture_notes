const notes = [
  {
    id: 1,
    title: "what is React?",
    info: {
      summery: `React is a Javascript library for building user interfaces.
 React runs on the client as SPA (Single Page Appication), 
 but can be used to build full stack apps by communicating with a Server/API (eg. MERN).
 React is often referred as frontend framework because it is capable and directly comparable with Angular or Vue.
 SPA (Single Page Application) --- This has only a single index.
 html and other routing or other stuffs are done using reacts which then bundles into javascript which is loaded by browser.
 React does not have entire ecosystem installed. 
 It instead has ecosystems build seperately and can be installed like router and we can make it works like a framework.`,
      detail: {
        detailHeading: "Advantages of React",
        detailInfo: `Reuasable components
 JSX - (Javascript syntax extension) Dynamic markup (We don't need to seperate js from html) It is actually javascript but is formatted like html.
 We can embed javascript expression, variables etc.Virtual DOMs - This helps in creating the interactive UIs  with Virtual DOM.
 It allows to update part of a page that needs to be updated with reloading it.
 Performace - React has a very good performance in browser and it values are not mutable directly. It provides one way data biding.`,
      },
      important: {
        importantHeading: "React has two types of component.",
        importantInfo: `Class and Functional
          Class syntax 
              class Welcome extends React.Component {
                render() {
                  return <h1>Hello, My first react</h1>;
                }
              }
      
          Functional Syntax
              function welcome() {
                return (
                    <h1>Hello, My first react</h1>;
                )
              }`,
      },
    },
  },
  {
    id: 2,
    title: `States, Hooks and Props`,
    info: [
      {heading: "States", para: `
      React componets have states which is an objects that decides how components renders and behaves.
        Before React 16.8 version React used mainly class components because they were capable of holding states and functional component were known as dummy components because they were not able of holding states. 
        However, from version 16.8 functional components started using hooks which allows us to use states and other lifecycle components within function components.`},
      {heading: "Hooks", para: `
      React Hooks are functions that let us hook into the React state and lifecycle features from functional components.
        Most important hooks are
		    useState: Returns a stateful value and a function to update it.
		    useeffect: Performs side effects and allows to achieve using lifecycle functionality.`},
      {heading: `Props`, para: `
        Props in react are just properties/values passed to the components. 
        Props data is immutable i.e read-only, which means that data coming from the parent should not be changed by child components`}
    ],
  },
];

export default notes;
