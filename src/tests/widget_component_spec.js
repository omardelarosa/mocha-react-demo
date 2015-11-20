var Widget = require('../components/widget.js');
var expect = require('chai').expect;

describe('WidgetComponent', function () {

  var widgetComponent;

  describe('initial rendering', function () {
  
    before(function () {
    
       widgetComponent = React.render(
        <Widget />, 
        document.getElementById('mount-container')
      );
    
    });

    it('should create an H1 with the text "My Widget"', function () {
      var el = React.findDOMNode(widgetComponent.refs.mainHeading);
      var text = el.innerHTML;
      expect(text).to.eq('My Widget');
    });

  });

});
