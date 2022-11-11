
  const firebaseConfig = {
    apiKey: "AIzaSyDQZZMi44lsqeC3dVEF_xdnwvn97h-KVtA",
    authDomain: "complaints-a7938.firebaseapp.com",
    databaseURL: "https://complaints-a7938-default-rtdb.firebaseio.com",
    projectId: "complaints-a7938",
    storageBucket: "complaints-a7938.appspot.com",
    messagingSenderId: "702699299414",
    appId: "1:702699299414:web:a006ca2f68cb08b187d1f7"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };