function displayMe(inVal)
{
    document.getElementById('display').value = document.getElementById('display').value + inVal;
}
function calculate()
{
    document.getElementById('display').value = eval(document.getElementById('display').value);
}
function clearMe()
{
    document.getElementById('display').value = '';
}
function switchSigns()
{
    document.getElementById('display').value = document.getElementById('display').value * -1;
}