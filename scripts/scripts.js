function myFunction() {

  let input, filter, table, tr, td, i, txtValue, searchVia;

  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  searchVia = getRadioButtonVal();

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[searchVia];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function getRadioButtonVal() {
  let searchVia = document.getElementsByName('search-via');

  for (i = 0; i < searchVia.length; i++) {

    if (searchVia[i].checked) {
      let checkedVal;

      switch (searchVia[i].value) {
        case 'id':
          checkedVal = 0
          break;
        case 'station_name':
          checkedVal = 1
          break;
        case 'iata':
          checkedVal = 2
          break;
        case 'icao':
          checkedVal = 3
          break;
      }
      
      return checkedVal;
    }
  }
}