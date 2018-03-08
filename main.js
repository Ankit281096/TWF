
var data;
window.onload = function() {
        function getParameterByName(name, url) {
            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        }
        var ifsc=getParameterByName('ifsc_bank');
    fetch(`https://ifsc.razorpay.com/${ifsc}`, {
    method: 'get'
    }).then(resp=>resp.json())
    .then(function(response) {
         if (response === 'Not Found')
         {
             window.alert('Wrong IFSC Code');
        }
        // console.log(response);
        data=response;
         console.log(data);
        // var table=document.getElementById('detail');
        // row=table.insertRow(-1);
        // var cell=row.insertCell(-1);
        // cell.innerHTML=data.ADDRESS;
        // var table=document.getElementById('detail');
        // row=table.insertRow(-1);
        // var cell=row.insertCell(-1);
        // cell.innerHTML=data.RTGS;
        // console.log('Address is',response.ADDRESS);
        // document.getElementById("detail").innerHTML='<tr><td>'+data.ADDRESS +'</td></tr>'
        document.getElementById("detail").innerHTML=showObject(data);
        function showObject(obj) {
            var result = "";
            for (var p in obj) {
              if( obj.hasOwnProperty(p) ) {
                result +='<tr><td><strong>'+ p + '</strong></td>' +'<td>' + obj[p] + '</td></tr>';
              } 
            }              
            return result;
          }
    }).catch(function(err) {
        window.alert('Unable to fetch .. NETWORK ERROR');
    }); 
    

}





// $(document).ready(function () {
//     $.getJSON('data.json', function(data) {
//         var tblRow = "<tr>" + "<td>" + data.ADDRESS + "</td>" + "</tr>"
//          $(tblRow).appendTo("#detail tbody");
 
//  });
//   });
  