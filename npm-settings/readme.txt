// Create a package.json
npm init

// create package.json with default settings
npm init --yes

// In package.json, there are two particularly important things:

1)
// Where we describe the version numbers of components
"engines": {
  "node": "4.2.1",
  "passport": "<2.2.1"
}

2)
// dependencies, use --save for this while installing.
// the caret doesn't give us an exact version, but it is good practice to ask for exact version
"dependencies": {
  "express": "^4.13.4"
}

// Normally we'd do this to add a dependency
npm install express --save

// An improvement is defaulting to --save and to an exact version
npm config set save=true
npm config set save-exact=true

// Now when we do "npm install express", we get:
"dependencies": {
  "express": "4.13.4"
}
