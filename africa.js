$(document).ready(function(){
codice JS ...
});





</head>

<body>
<script type="text/javascript">
var flag = true;
function zoom() {
if(flag) {
document.getElementById("africa1").className += " zoom";
} else {
document.getElementById("africa1").className = " normal";
}
(flag)?flag=false:flag=true;
}
</script>

<img id="africa1" class="normal" src="africa1.jpeg"
onclick="zoom()" alt="" />
