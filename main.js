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
  var k=475;
    firebase.initializeApp(firebaseConfig);
    var messagesRef = firebase.database().ref('petrol');
      document.forms['contactForm'].addEventListener('submit', function (event) {
        // Do something with the form's data here
        var amount = getInputVal('amount');
        var kms=0;
        var firebaseRef = firebase.database().ref("petrol");
            firebaseRef.once("value", function (snapshot) {
                var kms;
              var data = snapshot.val();
              let lis=Object.keys(data);
              let lis2=Object.values(data);
              var kms=lis2[0];
              k=(Number(amount)/100*35);
              kms=kms+k;
              saveMessage(amount,k,kms);
            });      
        // Save message
        
        this.style['display'] = 'none';
        document.querySelector(".testt").innerHTML += `
        <div class="cards">
  <div class="card">
       <h1><p style="color:orange"> Thank You for ur valuable info</h1>
      `;

        event.preventDefault();
    });
      
      // Function to get get form values
      function getInputVal(id){
        return document.getElementById(id).value;
      }
      
      // Save message to firebase
      function saveMessage(amount,k,kms){
        
        firebase.database().ref('petrol').set({
            last_amount: Number(amount),
            kms_count:kms,
            last_added_kms:k
          });
          
      }
