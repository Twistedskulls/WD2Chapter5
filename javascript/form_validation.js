"use strict"
function validate_form(inForm)
{
    let warnArr = document.getElementsByClassName("form_errors");
    let ndx; 
}
if (inForm.checkValidity() ==false)
{
    let elementsArr = inForm.querySelectorAll(':inValid');
    let errCount = elementsArr.length;
    for (ndx = 0; ndx < warnArr.length; ndx++)
    {
        warnArr[ndx].innerHTML = "You are missing data in " +
        errCount + " fields in this form.";
        warnArr[ndx].classList.add("required");
    }
}
else
{
    for (ndx = 0; ndx < warnArr.length; ndx++)
    {
        warnArr[ndx].innerHTML = "";
        warnArr[ndx].classList.remove("required");
    }
}