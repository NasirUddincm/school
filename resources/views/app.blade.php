<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>School</title>
    <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900" rel="stylesheet">
		
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"/>
    <!-- <link rel="stylesheet" href="{{asset('assets/css/style.css')}}"/> -->
    <!-- frontend css -->
    <!-- <link rel="stylesheet" href="{{asset('frontend/style.css')}}"/> -->
   
    @vite('resources/css/app.css')
</head>
<body> 
    <div id="app"></div>
    @vite('resources/js/app.js')
    <script src="{{asset('assets/js/jquery.min.js')}}"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.13.1/xlsx.full.min.js"></script> 
   
</body>
</html>