# pair-sum

This is a repo to contain my solution for the following challenge (sorry for not being too explicit with the challenge, but I want to avoid exposing more about it):

```plain
Create a function that takes two arguments: an array and a number and it needs to find the tuples of numbers that add up to the second parameter.

Let's suppose the order of the tuples and their elements does not matter.
```

This was coded using Node 16.X, so, make sure you have the same version to run the code within this repository.

To run this function, you will need to run:

```cli
node app.js <<list of numbers separated by comma>> targetValue
```

Example:

```cli
node app.js 10,2,15,0,12 12
// Output:
// 2, 10
// 12, 0
```

## Tests

If you want to run the unit tests included in this repo, you will need to install the dependencies first using:

```cli
npm install
```

Or `npm ci` if you want to install the dependencies listed in the `package-lock.json` file.

After installing the dependencies, you need to run:

```cli
npm run test
```
