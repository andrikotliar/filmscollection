const checkboxes = [
  {
    title: "Type",
    property: "type",
    model: [],
    options: ["Film", "Animation", "Series"]
  },
  {
    title: "Genres",
    property: "genres",
    model: [],
    options: ["Sci-Fi", "Adventures", "Action", "Fantasy", "Drama", "Comedy", "Crime", "Romance", "Thriller"]
  }
]

const selects = [
  {
    title: "Country",
    property: "countries",
    options: ['USA', 'UK', 'Canada', 'France', 'Germany', 'Japan']
  },
  {
    title: "Studio",
    property: "production",
    options: ['Walt Disney Pictures', 'Disney+', 'Pixar Animation', 'Netflix', '20th Century FOX', 'Lionsgate', 'Warner Bros. Pictures', 'HBO Max', 'DreamWorks Pictures', 'Lucasfilm', 'Legendary', 'Columbia Pictures', 'Amblin Entertainment', 'DreamWorks Animation', 'EuropaCorp', 'Metro-Goldwyn-Mayer', 'Summit Entertainment']
  }
];

export {
  checkboxes,
  selects
}
