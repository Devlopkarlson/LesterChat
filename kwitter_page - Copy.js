const firebaseConfig = {
      apiKey: "AIzaSyDSk-eERJYZJSW4-0OeLpKqfkk9K3sRerQ",
      authDomain: "whym-afe9e.firebaseapp.com",
      databaseURL: "https://whym-afe9e-default-rtdb.firebaseio.com",
      projectId: "whym-afe9e",
      storageBucket: "whym-afe9e.appspot.com",
      messagingSenderId: "572957561656",
      appId: "1:572957561656:web:9cc4b0017ed1b33d7667cd",
      measurementId: "G-YJT3BF2WXY"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log("Room Name - " + Room_names);
row="<div class:'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names + "</div><hr>";
document.getElementById("output").innerHTML+= row;
//End code
      } });  }); }
getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localstorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function send()
{
      msg= document.getElementById("msg").value;
      firebase.database.ref(room_name).push({
            name:user_name,
            message: msg,
            like:0,
      });
      document.getElementById("msg").value = "";
}
