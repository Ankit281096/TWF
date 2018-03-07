function myfunction(){
    var ifsc=document.getElementById('ifsc').value;
    //console.log(ifsc);
    //var url= ''
    console.log(ifsc);
    console.log('hello');
    // // var url='https://ifsc.razorpay.com/KARB0000001';
    
}
fetch('https://ifsc.razorpay.com/KARB0000001', {
	method: 'get'
}).then(function(response) {
	console.log(response);
}).catch(function(err) {
	console.log(error);
});