(function () {
  var input = document.getElementById('blog-search-input');
  var list = document.getElementById('search-results');

  if (!input || !list) {
    return;
  }

  function render(items) {
    list.innerHTML = '';
    if (!items.length) {
      list.innerHTML = '<li><p>No results found.</p></li>';
      return;
    }

    items.forEach(function (result) {
      var item = result.item || result;
      var li = document.createElement('li');
      li.innerHTML =
        '<h2><a href="' + item.permalink + '">' + item.title + '</a></h2>' +
        '<p class="meta">' + item.date + '</p>' +
        '<p>' + (item.summary || '') + '</p>';
      list.appendChild(li);
    });
  }

  fetch('/blog/index.json')
    .then(function (res) { return res.json(); })
    .then(function (docs) {
      var fuse = new Fuse(docs, {
        keys: ['title', 'summary', 'tags', 'content'],
        includeScore: true,
        threshold: 0.36,
        ignoreLocation: true,
        minMatchCharLength: 2
      });

      render(docs.slice(0, 10));

      input.addEventListener('input', function () {
        var query = input.value.trim();
        if (!query) {
          render(docs.slice(0, 10));
          return;
        }
        render(fuse.search(query).slice(0, 20));
      });
    })
    .catch(function () {
      list.innerHTML = '<li><p>Search index failed to load.</p></li>';
    });
})();
