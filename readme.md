# MIT App Store


First install your the node modules using either yarn or npm (i suggest yarn)

> yarn
> npm install

then run the server (which puts the website up at localhost:4001)

> yarn start 


## Documentation

[React Docs (UI)](https://reactjs.org/docs/hello-world.html)

[More React Resources, Modules, and open source projects...](https://github.com/jondot/awesome-react-native)

[Apple](https://developer.apple.com/documentation/)

[Andriod](https://developer.android.com/guide/index.html)

[Inspiration](https://www.youtube.com/watch?v=gd_Vd43Vxa0)



Useful Links
- [Google Doc](https://docs.google.com/document/d/1kJfeBeUI7Y72LbAvIeLP_qGH9i5XkfwrC7KkWiDlR18/edit?usp=sharing) - Longterm Plan

##Building the Project

clone the repository
    "dev": "kyt dev",
    "build": "kyt build",
    "start": "node build/server/main.js",
    "proto": "kyt proto",
    "test": "kyt test",
    "test-watch": "kyt test -- --watch",
    "test-coverage": "kyt test -- --coverage",
    "lint": "npm run lint-script && npm run lint-style",
    "lint-script": "kyt lint-script",
    "lint-style": "kyt lint-style",
    "kyt:help": "kyt --help"






## Initial setup
Install Homebrew

> /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

Install Cocoapods, Watchman & Node (if necessary)

> brew install node

> brew install cocoapods

> brew install watchman

Install the React Native Command Line Interface

> npm install -g react-native-cli



clone the repo then cd to the root of the repo, and run 

> npm install --save react react-native

Note: to clone the repo you'll have to set up SSH keys, see links...

[Configure Git User](https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration)

[Set up SSH Key](https://help.github.com/articles/connecting-to-github-with-ssh/)


### Setting up Pods
once you have Cocoapods installed cd to the ios folder and run...

> pod repo update

> pod install
Note: If you don't have a podfile.lock, run *pod update* instead

> open MixxrReact.xcworkspace

and make sure that the GoogleService-Info.plist is in ur xcode project in the MixxrReact folder


### Setting up Redux and Extentions

> npm install --save redux react-redux redux-devtools redux-persist@next


### Parse Dashboard 

install with 

> npm install -g parse-dashboard

and run this in your command line 

> parse-dashboard --appId 9378c8477cb58ad993bc370471ab8573ee9eef5ed --masterKey 1611ac06ab3205a9894f67942ae697155eeb1ddf --serverURL "http://ec2-34-223-211-184.us-west-2.compute.amazonaws.com:80/parse" --appName MixxrReact --port 3500

*Or*, avoid using such a long string with parse-dashboard-config.json(/parse-dashboard-config.json)

Copy paste it into your NPM directry (path to mine below, you will need to enable seeing hidden folders or cmd + shift + G to the folder on mac. Google where node_modules are installed on windows)
final path:
/usr/local/lib/node_modules/parse-dashboard/Parse-Dashboard/parse-dashboard-config.json

go to http://localhost:3500 to view dashboard

## TODO List

### Build synchronous and async action creators

### Configure Persist
####Discussion: 
    Async Storage vs Custom Config.
        Querying from db and pushing up specific changes
        rehydrating via persist 
        updating Parse data on occasion (when actions are made they cn send up these changes to the server before updating state)

    We should probably use V5 but its not stable yet

## Post Bugs here (and solutions if possible):


# Universal React starter-kyt

This starter-kyt should serve as the base for an advanced, server and client-rendered React app.


## Installation

1. run `kyt-cli setup`
2. select `universal` from the list of starter-kyts

## Tools

The following are some of the tools included in this starter-kyt:

- [Express](https://expressjs.com/) - Server-side rendering
- [React](https://facebook.github.io/react/) - Component library
- [React Router](https://github.com/reactjs/react-router) - Server and client routing
- [Sass Modules](https://github.com/css-modules/css-modules) - CSS Modules with a Sass pre-processor for styles
- [Enzyme](https://github.com/airbnb/enzyme) - React component testing

## Notes on implementation

- As a performance optimization, React Router routes are loaded dynamically and chunked separately using the ES2015 `import()` directive. See more about  [Webpack 2 support](https://gist.github.com/sokra/27b24881210b56bbaff7#code-splitting-with-es6) and [dynamic routing](https://github.com/reactjs/react-router/blob/master/docs/guides/DynamicRouting.md).

## How To Contribute
Want to build your own starter-kyt?
See directions [here](https://github.com/NYTimes/kyt/blob/master/docs/Starterkyts.md).

## Changelog

0.6.0 - 10/19/17

- Upgrades `kyt-core` to 0.9.0 and `babel-preset-kyt-react` to 0.3.0.