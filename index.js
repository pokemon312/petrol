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
    firebaseRef.once("value", function (snapshot) {
        var data = snapshot.val();
        let lis=Object.keys(data);
        let lis2=Object.values(data);
        for (let i = 0; i < 3; i++) {
          document.querySelector(".testing1").innerHTML += `
          <div class="cards">
  <div class="card">
    <div class="card-title"><h1 style="margin:30px">${String(lis[i]).toUpperCase()}</h1></div>
       <h1 style="color:orange">${lis2[i]}</h1>
      `;     
        }
      });