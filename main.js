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
    }).then(function(response) {
        console.log(response);
    }).catch(function(err) {
        console.log(error);
    }); 
}

        