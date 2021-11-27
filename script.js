document.getElementById('SubmitForm').addEventListener('submit', SubmitForm);
function SubmitForm(e){
    e.preventDefault();
    const id = Date.now();
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const Sname = name.value;
    const Semail = email.value;
    name.value = "";
    email.value = "";
    db.ref('Submissions/' + id).set({
        Name : Sname,
        Email : Semail,
    })
    console.log("Form submitted")
}