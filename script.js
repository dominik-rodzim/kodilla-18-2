var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    image: 'images/img-1.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    image: 'images/img-2.jpeg'
  },
  {
    id: 3,
    title: 'Chłopaki nie płaczą',
    desc: 'Klasyk',
    image: 'images/img-3.jpeg'
  },
  {
    id: 4,
    title: 'Kiler',
    desc: 'Klasyk numer 2',
    image: 'images/img-4.jpg'
  }
];

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('img', {src: movie.image})
    );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

ReactDOM.render(element, document.getElementById('app'));