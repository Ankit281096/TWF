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
    if(ifsc === '')
    {
        window.alert("Enter the IFSC Code");
        window.location.replace("./test.html");
    }
    fetch(`https://ifsc.razorpay.com/${ifsc}`, {
    method: 'get'
    }).then(resp=>resp.json())
    .then(function(response) {
         if (response === 'Not Found')
        {
             window.alert("Wrong IFSC Code.Enter Correct IFSC Code.");
             window.location.href='./test.html';
        }
        // console.log(response);
        data=response;
        //console.log(data);
    
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
        window.location.href='./test.html';
    }); 
}

  