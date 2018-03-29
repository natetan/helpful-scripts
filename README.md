# Helpful Scripts
This repo is dedicated to helpful scripts that can help with day to day things that 
should be automated, such as sorting terms and definitions

## Installation
```
git clone https://github.com/yulongtan/helpful-scripts.git
cd helpful-scripts
npm install
```

### Definitions
This function sorts definitions alphabetically from a `definitions.txt` file that is in
the format of:
```
term: definition
term: definition
...
term: definition
```
  
Run `node index.js` to get a `definitions-sorted.txt`