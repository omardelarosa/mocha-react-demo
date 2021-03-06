var jsdom   = require('jsdom').jsdom;
var React   = require('react');

var doc = jsdom(
  [
    '<html><body>',
      '<div id="mount-container"></div>',
    '</body></html>'
  ].join(''), {});

// Globals
global.window = doc.defaultView;
global.document = window.document;
global.navigator = window.navigator;
global.$ = require('jquery');
global.React = require('react/addons');

// Fixes issue with React not recognizing JSDOM
require('react/lib/ExecutionEnvironment').canUseDOM = true; 
