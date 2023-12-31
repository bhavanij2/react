# Setting up a React project in VS Code

To complete the exercises in this course you have been provided with a dedicated lab environment set up specifically for you to apply the skills that you have learned. You can find out more about Working with Labs in this course by accessing the link below:

To follow along in this reading, you need to have Node.js and VS Code already installed on your computer.

- Setting up VS Code
- Installing Node and NPM (Refer Installing instructions in separate documentation)

In VS Code, you're ready to start a brand new React project.

You can do it using npm.

## What is npm?

When Node.js is installed on a computer, npm comes bundled with it.

With npm, you can:

Author your own Node.js modules ("packages"), and publish them on the npm website so that other people can download and use them

Use other people's authored modules ("packages")

So, ultimately, npm is all about code sharing and reuse. You can use other people's code in your own projects, and you can also publish your own Node.js modules so that other people can use them.

An example npm module that can be useful for a new React developer is
[create-react-app](https://create-react-app.dev/)
. While this npm module comes with its own website, you can also find some info on the
[create-react-app project on GitHub](https://github.com/facebook/create-react-app)
.

Whenever you run the npm command to add other people's code, that code, and all other Node modules that depend on it, get downloaded to your machine.

However, although it's possible do to so, this is not really necessary, at least in the case of the `create-react-app` Node module.

In other words, you can avoid installing the `create-react-app package`` but still use it.

You can do that by running the following command: `npm init react-app example`, where “example” is the actual name of your app. You can use any name you’d like, but it’s always good to have a name that is descriptive and short.

In the next section, you'll learn how to build a brand new app that you can name: `firstapp`.

## Opening the built-in VS Code terminal and running `npm init react-app` command

Now run the command to add a brand new React app to the machine:

```
npm init react-app firstapp
```

The installation and setup might take a few minutes.

Here's the output of executing the above command:

If `create-react-app` package is not installed on your machine, then you will first see this output:

```
Need to install the following packages:
create-react-app@5.0.1
Ok to proceed? (y)
npm WARN deprecated tar@2.2.2: This version of tar is no longer supported, and will not receive security updates. Please upgrade asap.
```

Followed by the below output:

```
Creating a new React app in /home/pc/Desktop/firstapp.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template...

added 1383 packages in 56s

190 packages are looking for funding
                       run `npm fund` for details

Initialized a git repository.

Installing template dependencies using npm...
npm WARN deprecated source-map-resolve@0.6.0:
See https://github.com/lydell/source-map-resolve#deprecated

added 39 packages in 6s

190 packages are looking for funding
                       run `npm fund` for details
Removing template package using npm...

removed 1 package, and audited 1422 packages in 3s

190 packages are looking for funding
                       run `npm fund` for details

6 high severity vulnerabilities

To address all issues (including breaking changes), run:
npm audit fix --force

Run `npm audit` for details.

Created git commit.

Success! Created firstapp at /home/pc/Desktop/firstapp

Inside that directory, you can run several commands:

    npm start
    Starts the development server.

    npm run build
    Bundles the app into static files for production.

    npm test
    Starts the test runner.

    npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

cd firstapp
npm start

```

If you follow the suggestions from the above output, you'll run: cd firstapp, and then npm start.

This will end up with the following output in the built-in terminal:

```
Compiled successfully!

You can now view firstapp in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.1.3:3000

Note that the development build is not optimized.
To create a production build, use npm run build.
```

Again, following the instructions, opening a browser with the address bar pointing to http://localhost:3000, will show the page with react logo in your browser:

This means that you've successfully:

- Set up your local development environment

- Run the create-react-app npm package (without explicitly installing it!)

- Built a starter React app on your local machine

- Served that starter React app in your browser

After you've built your starting setup, in Module 2 you'll start working with the basic building blocks of React: `components`.
