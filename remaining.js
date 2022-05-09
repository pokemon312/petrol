var firebaseConfig = {
    apiKey: "AIzaSyCQR7_B-8i6eRSJzdjq3cYsZ4o1xtLSc08",
    authDomain: "hackathon-9a101.firebaseapp.com",
    databaseURL: "https://hackathon-9a101-default-rtdb.firebaseio.com",
    projectId: "hackathon-9a101",
    storageBucket: "hackathon-9a101.appspot.com",
    messagingSenderId: "1053508331058",
    appId: "1:1053508331058:web:64170e91fc6778e97fbe2b",
    measurementId: "G-Q41JB5Z8HW",
  };
  firebase.initializeApp(firebaseConfig);
  var firebaseRef = firebase.database().ref("petrol");
  
  document.forms['form1'].addEventListener('submit', function (event) {
    // Do something with the form's data here
    var ckms = getInputVal('ckms');
 
    this.style['display'] = 'none';
    firebaseRef.once("value", function (snapshot) {
        var data = snapshot.val();
        let lis2=Object.values(data);
        var k=lis2[1]-Number(ckms);
        console.log(k);        
        document.querySelector(".testing2").innerHTML += `
        <div class="cards">
  <div class="card">
    <h2 class="card-title">Remaining KMs</h2>
       <h1><p style="color:orange"> ${k}</p> is the available distance u can travel</h1>
      `;
      });
    event.preventDefault();
});     
    function getInputVal(id){
        return document.getElementById(id).value;
      }

  
  