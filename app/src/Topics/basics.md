<!---
{"next":"Topics/shopping_list.md","title":"Basic Terminology"}
-->

# Basic Terminology

Here are some of the basic vocabulary words we will leverage to get started:

## Data

An entity that represents what we *want* to display on the screen. **DATA** is the heart of any react application as it is the *source of truth* that drives all other interactions and views.

## Component

 A bit of code - either a class or a function - that knows how to interpret a piece of data and render interactable elements on screen. A component encompasses the logic that defines HOW to **display** and **mutate** the data of your application

## Props

A prop, short for "property", defines how we can pass data along into our components. This is the primary / preferred way to tell the component *what* the data is that we are attempting to display.

## State

A state is similar to a prop, except that **it is component specific**. This means that each component has the ability to maintain internal state.

**EXAMPLE**: If we have a react component that represents a user profile, the **prop** would be the API call that returns user data from the server. However, as the user is updating fields - we represent these changes in the **state** (as they can be abandoned at any time) - and once user performs an action such as **SUBMIT**, etc we post this data back to the DB so that the prop when user revisits profile is up to date.

## [Lifecycle](https://blog.bitsrc.io/react-16-lifecycle-methods-how-and-when-to-use-them-f4ad31fb2282)
[![chart](https://cdn-images-1.medium.com/max/1600/1*u8hTumGAPQMYZIvfgQMfPA.jpeg)](https://levelup.gitconnected.com/componentdidmakesense-react-lifecycle-explanation-393dcb19e459)

All react components encompass a concept of the component "lifecycle". Every time a prop or state is updated, the component lifecycle is triggered.


