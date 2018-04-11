var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS7RAPk7PTnc1JEZjhVCE27DUylDyqIkzqEXyhicWPpvn3EM5EEoXn2rrH0lNIKurRpFA9habzm-2DZ/pubhtml';

function init() {
   Tabletop.init({
      key: public_spreadsheet_url,
      callback: showInfo,
      simpleSheet: true,
      orderby: 'name',
      reverse: false,
   })
}
init();

function showInfo(data, tabletop) {
   console.log(data);
   for (i = 0; i < data.length; i++) {
      var url = data[i].Link;
      var star = data[i].Starred;
      var name = '<td><a href="' + url + '" target="_blank">' + data[i].Link + '</a></td>';
      var color = '<td>' + data[i].Color + '</td>';
      var type_class = data[i].Color.toLowerCase().split(' ').join('_');
      var fsk = '<td>' + data[i].FSK + '</td>';
      var template = '<td>' + data[i].Template + '</td>';
      var niche = '<td>' + data[i].Niche + '</td>';
      $('.resource-grid').prepend('<tr class="item ' + type_class + '">' + name + color + fsk + url + template + niche + '</tr>');
   }
}

$(".resource-grid").sieve({
   itemSelector: "tr"
});
$('#resources > div').addClass('search-box');