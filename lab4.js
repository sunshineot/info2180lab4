/*Question #1

window.onload = function() 
{
    $("boundary1").onmouseover = Highlight;
};

function Highlight() 
{
     $("boundary1").style.backgroundColor = 'red';
    $("boundary1").addClassName("youlose");
}*/


//Question #2

/* window.onload = function() 
{
    var AllBoundaries = $$("div#maze div.boundary");
    for(a = 0; a < AllBoundaries.length; a++) 
	{
        AllBoundaries[a].onmouseover = HighlightAll;
    }
};

function HighlightAll() {
    var AllBoundaries = $$("div#maze div.boundary");
    for(b = 0; b < AllBoundaries.length; b++) 
	{
        AllBoundaries[b].style.backgroundColor = 'red';
    }
} */


//Question #3

/* window.onload = function() 
{
    $("start").onclick = start;
    $("end").onmouseover = end;
    var AllBoundaries = $$("div#maze div.boundary");
    for(a = 0; a < AllBoundaries.length; a++) {
        AllBoundaries[a].onmouseover = HighlightAll;
    }
};

var loser = false;

function HighlightAll() 
{
    loser = true;
    var AllBoundaries = $$("div#maze div.boundary");
    for(b = 0; b < AllBoundaries.length; b++)
	{
        AllBoundaries[b].addClassName("youlose");
		AllBoundaries[b].style.backgroundColor = 'red';
    }
}

function start()
 {
    loser = false;
	var AllBoundaries = $$("div#maze div.boundary");
    for(c = 0; c < AllBoundaries.length; c++) 
	{
        AllBoundaries[c].removeClassName("youlose");
    }
}

function end() 
{
    if(loser) 
	{
        alert('You lost the game!');
    } else {
        alert('Congratulations, You won!');
    }
} */


//Question #4




//Question #6
 window.onload = function() 
{
    $("start").onclick = start;
    $("end").onmouseover = end;
    var AllBoundaries = $$("div#maze div.boundary");
    for(a = 0; a < AllBoundaries.length; a++) {
        AllBoundaries[a].onmouseover = HighlightAll;
    }
};

var loser = false;

function HighlightAll() 
{
    loser = true;
	$("status").textContent = 'You lost the game!';
    var AllBoundaries = $$("div#maze div.boundary");
    for(b = 0; b < AllBoundaries.length; b++)
	{
        AllBoundaries[b].addClassName("youlose");
		//AllBoundaries[b].style.backgroundColor = 'red';
    }
}

function start()
 {
    loser = false;
	$("status").textContent = 'Make it to the end to win the game';
	var AllBoundaries = $$("div#maze div.boundary");
	if(!AllBoundaries)
		HighligtAll;
    for(c = 0; c < AllBoundaries.length; c++) 
	{
        AllBoundaries[c].removeClassName("youlose");
    }
}

function end() 
{
     if (!loser)
        $("status").textContent = 'Congratulations, you won!';
}


//Question 7