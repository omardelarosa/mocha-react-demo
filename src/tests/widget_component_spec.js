var Widget = require('../components/widget.js');

describe('WidgetComponent', function () {

  var widgetComponent;

  describe('initial rendering', function () {
  
    before(function () {
    
       widgetComponent = React.render(
        <Widget />, 
        document.getElementById('mount-container')
      );
    
    });

    it('should create a span element with some text', function () {
      console.log("widgetComponent", widgetComponent);
    });

  });

});
