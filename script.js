function showData()
{
    event.preventDefault();
    var country=document.getElementById("cname").value;
    var sDate=document.getElementById("sdate").value;
    var eDate=document.getElementById("edate").value;

    console.log(sDate);

    if(country=='' || sDate=='' || eDate=='')
    alert("enter the required field");

    else
    {
        var url="https://api.covid19api.com/country/"+country+"?from="+sDate+"T00:00:00Z&to="+eDate+"T00:00:00Z";

        fetch(url)
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            var length=res.length;
            var index=length-1;
            var c=res[index].Confirmed;
            var a=res[index].Active;
            var d=res[index].Deaths;
            createData(c,a,d);
        })
    }
}

function createData(c,a,d)
{
    let div = document.createElement("div");
    div.id="res";
    let conf = document.createElement("h4");
    var text = document.createTextNode("Confirmed cases : "+c);
    conf.appendChild(text);
    let act = document.createElement("h4");
    var text = document.createTextNode("Active cases : "+a);
    act.appendChild(text);
    let death = document.createElement("h4");
    var text = document.createTextNode("Death cases : "+d);
    death.appendChild(text);
    div.appendChild(conf);
    div.appendChild(act);
    div.appendChild(death);
    document.body.appendChild(div);
}