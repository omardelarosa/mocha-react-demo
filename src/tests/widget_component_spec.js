var Widget = require('../components/widget.js');
var expect = require('chai').expect;
var TestUtils = React.addons.TestUtils;

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

    it('should update the text of the displayArea after click', function () {
      var validName = 'Omar';
      widgetComponent.setState({ name: validName });
      var buttonEl = React.findDOMNode(widgetComponent.refs.addButton);
      TestUtils.Simulate.click(buttonEl);
      var displayAreaEl = React.findDOMNode(widgetComponent.refs.displayArea);
      // Check the state of widget
      expect(widgetComponent.state.displayedAreaText).to.eq(validName);
      // Check the DOM
      expect(displayAreaEl.innerHTML).to.eq(validName);
    });

  });

});
