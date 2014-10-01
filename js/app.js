App = Ember.Application.create();

App.Router.map(function() {
});

var files = [{
  id: 'rails-is-omakase',
  title: "Rails is Omakase",
  author: 'D2H',
  contents: "There are lots of à la carte software environments in this world. Places where in order to eat, you must first carefully look over the menu of options to order exactly what you want. I want this for my ORM, I want that for my template language, and let's finish it off with this routing library. Of course, you're going to have to know what you want, and you'll rarely have your horizon expanded if you always order the same thing, but there it is. It's a very popular way of consuming software."
}, {
  id: 'why-ruby',
  title: "Why Ruby?",
  author: 'CodingHorror',
  contents: "I've been a Microsoft developer for decades now. I weaned myself on various flavors of home computer Microsoft Basic, and I got my first paid programming gigs in Microsoft FoxPro, Microsoft Access, and Microsoft Visual Basic. I have seen the future of programming, my friends, and it is terrible CRUD apps running on Wintel boxes!"
}];

files.forEach(function(file) {
  files[file.id] = file;
});

// CONTROLLERS

App.ApplicationController = Ember.Controller.extend({
  saveName: function(value){
    localStorage.appName = value;
  }
});