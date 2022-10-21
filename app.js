let http=required("http");
http.createserver(function(req,res){
    res.writehead(200,{
        "content-type":"text/html"
    });
    res.end("hellow world!");
}).listen(8080);
