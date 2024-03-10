function showCurrentDate() {
  
  var form = FormApp.getActiveForm();
  items = form.getItems();

  // Show array of all items in the form
  // Logger.log(items);

  // Get the targeted item id
  // Logger.log(items[0].getId().toString());

  var item = form.getItemById(items[0].getId().toString());

  // Format date into Thai locale
  var date = new Date();
      var options = {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric"
      };
  // Logger.log(date.toLocaleDateString("th", options));

  item.setTitle(date.toLocaleDateString("th", options));

}
