# javascript.beginner
Repo for learning JavaScript from different ressources.

## HowTo: Unit-Test JavaScript ##

To test JavaScript-Sources without starting a Server, or call the functions within a HTML-File, I'm using Karma as a _test runner_,
Jasmine as the _testing framework_.<br/>
Before you proceed you have to make sure, you have Node.js an NPM installed. NPM is a package manager for JavaScript.<br/>

1. Install Karma ```mpm install karma --save-dev```. The ```--save-dev```-Option means, that this package will only appear in your devDependencies.
since we only need it to test our JavaScript-Function during the development. In addition, if you'd like to use Karma from your command-line/bash
```npm install -g karma-cli```. The __-g__ makes the command globally available. After you configured your test-case you could start it with ```karma start```.
2. Install Jasmine ```npm install -g jasmine```. Jasmine is used to simple describe an run test-cases.
3. Install PhantomJS ```npm install karma-phantomjs-launcher --save-dev```. PhantomJS is a headless, window-less test environment.
Instead of PhantomJS you also can configure karma to use a browser, like Firefox or Chrome. So every time you run your test-cases,
a browser will be started.

After these steps, have to create a __config-file__. You can generate it with ```karma init``` and answering the prompted questions.
You can modify the file, if it don't fully meet your requirements.<br/>
In addition you also have to create a jasmine-config file with ``````.<br/>
To run a test you have to navigate to where your __karma.conf.js__ is located and start the test within your command-line with ```karma start```.<br/>
Of course you can replace the test-framework __Jasmine__ with __Mocha__.


##Additional information##
Karma and Jasmine config file not included.<br/>
Following some excerpt from the config-file.

1. ```frameworks: ['jasmine']```
2. ```reporters: ['progress', 'junit', 'dots']```
3. ```browsers: ['Firefox', 'PhantomJS']```