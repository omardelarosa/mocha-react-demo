var Widget = require('./components/widget');

$(function () {
  
  React.render(
    <Widget />, 
    document.getElementById('mount-container')
  );

});
