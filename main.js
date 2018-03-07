function myfunction(){
    var ifsc=document.getElementById('ifsc').value;
    //console.log(ifsc);
    //var url= ''
    console.log(ifsc);
    console.log('hello');
    // var url='https://ifsc.razorpay.com/KARB0000001';
    callAPI();  
}
function callAPI(){
    var getJSON = function(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'json';
        xhr.onload = function() {
          var status = xhr.status;
          if (status === 200) {
            callback(null, xhr.response);
          } else {
            callback(status, xhr.response);
          }
        };
        xhr.send();
    };
getJSON('https://ifsc.razorpay.com/KARB0000001',
function(err, data) {
  if (err !== null) {
    alert('Something went wrong: ' + err);
  } else {
      console.log(data);
  }
});
}