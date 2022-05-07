# Agorize test (2H45)

## How to run the project

I use node 17.9.0. If you want to lunch the projet make sure that you have the same version of Node.

```
node main.js
```

## How i create it

I separate the code between two parts. The first one is the functions.
This folder is the main point of my algorithm. In the files you file find function than you can
use in the main file.

I create also a dateHelper who can help you to compare some dates and format it.

Then on the main file you will find the global function where i call all my helpers.

## What I change

I juste change the date object in the **main.js**.
With node 17 I haved some issues because this return an error with the double zero.

```
new Date(2016, 6, 1, 14, 00);
```

So i change to be sure that is working on every version (I juste delete a zero)

```
new Date(2016, 6, 1, 14, 0);
```
