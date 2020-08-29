var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();
    //MessageView.initialize();
    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // console.log(data.results);
      // examine the response from the server request:
      //console.log(data);
      // var cb = function() {
      //   console.log('data::', data);
      // }
      // var test = function() {
      //   cb();
      console.log(data.results[2]);
      MessagesView.render(data.results[2].text);
      // test();
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
