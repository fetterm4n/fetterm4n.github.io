(function () {
  var typeSelect = document.getElementById('filter-type');
  var tagSelect = document.getElementById('filter-tag');
  var items = Array.prototype.slice.call(document.querySelectorAll('#work-feed .work-item'));

  if (!typeSelect || !tagSelect || !items.length) {
    return;
  }

  function applyFilters() {
    var selectedType = typeSelect.value;
    var selectedTag = tagSelect.value;

    items.forEach(function (item) {
      var type = item.getAttribute('data-type') || '';
      var tags = (item.getAttribute('data-tags') || '').split(',').map(function (tag) {
        return tag.trim();
      });

      var typeMatch = selectedType === 'all' || type === selectedType;
      var tagMatch = selectedTag === 'all' || tags.indexOf(selectedTag) !== -1;
      item.hidden = !(typeMatch && tagMatch);
    });
  }

  typeSelect.addEventListener('change', applyFilters);
  tagSelect.addEventListener('change', applyFilters);
})();
