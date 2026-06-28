function action() {
const x=document.getElementById('user').value;
const y=document.getElementById('pass').value;
    if (x==="" && y==="")
        {    alert("Please enter username and password")
        }
    else if (x==="")
        {    alert("Please enter username")
        }
    else if (y==="")
        {    alert("Please enter password")
        }
    else
    {
        alert("Submit sucessfully")
        window.location.href = "submit.html";
    }
}

