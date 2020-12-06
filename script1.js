
  let plone = Math.random();
  plone = Math.floor((plone*6)+1);

  let pltwo = Math.random();
  pltwo = Math.floor((pltwo*6)+1);

  if (plone > pltwo)
  {
    document.querySelectorAll("h1")[0].textContent = "Player 1 wins!";
  }

  else if (plone < pltwo)
  {
    document.querySelectorAll("h1")[0].textContent = "Player 2 wins!";
  }
  else
  {
    document.querySelectorAll("h1")[0].textContent = "Draw";
  }


if (plone === 1)
{
document.querySelectorAll(".one")[4].classList.remove("one");
}
else if (plone === 2)
{
document.querySelectorAll(".one")[0].classList.remove("one");
document.querySelectorAll(".one")[7].classList.remove("one");
}
else if (plone === 3)
{
document.querySelectorAll(".one")[0].classList.remove("one");
document.querySelectorAll(".one")[3].classList.remove("one");
document.querySelectorAll(".one")[6].classList.remove("one");
}
else if (plone === 4)
{
document.querySelectorAll(".one")[0].classList.remove("one");
document.querySelectorAll(".one")[1].classList.remove("one");
document.querySelectorAll(".one")[6].classList.remove("one");
document.querySelectorAll(".one")[4].classList.remove("one");
}
else if (plone === 5)
{
  document.querySelectorAll(".one")[0].classList.remove("one");
  document.querySelectorAll(".one")[1].classList.remove("one");
  document.querySelectorAll(".one")[2].classList.remove("one");
  document.querySelectorAll(".one")[3].classList.remove("one");
  document.querySelectorAll(".one")[4].classList.remove("one");
}
else if (plone === 6)
{
  document.querySelectorAll(".one")[0].classList.remove("one");
  document.querySelectorAll(".one")[1].classList.remove("one");
  document.querySelectorAll(".one")[3].classList.remove("one");
  document.querySelectorAll(".one")[5].classList.remove("one");
  document.querySelectorAll(".one")[3].classList.remove("one");
  document.querySelectorAll(".one")[1].classList.remove("one");

}

if (pltwo === 1)
{
document.querySelectorAll(".two")[4].classList.remove("two");
}
else if (pltwo === 2)
{
document.querySelectorAll(".two")[0].classList.remove("two");
document.querySelectorAll(".two")[7].classList.remove("two");
}
else if (pltwo === 3)
{
document.querySelectorAll(".two")[0].classList.remove("two");
document.querySelectorAll(".two")[3].classList.remove("two");
document.querySelectorAll(".two")[6].classList.remove("two");
}
else if (pltwo === 4)
{
document.querySelectorAll(".two")[0].classList.remove("two");
document.querySelectorAll(".two")[1].classList.remove("two");
document.querySelectorAll(".two")[6].classList.remove("two");
document.querySelectorAll(".two")[4].classList.remove("two");
}
else if (pltwo === 5)
{
  document.querySelectorAll(".two")[0].classList.remove("two");
  document.querySelectorAll(".two")[1].classList.remove("two");
  document.querySelectorAll(".two")[2].classList.remove("two");
  document.querySelectorAll(".two")[3].classList.remove("two");
  document.querySelectorAll(".two")[4].classList.remove("two");
}
else if (pltwo === 6)
{
  document.querySelectorAll(".two")[0].classList.remove("two");
  document.querySelectorAll(".two")[4].classList.remove("two");
  document.querySelectorAll(".two")[1].classList.remove("two");
  document.querySelectorAll(".two")[5].classList.remove("two");
  document.querySelectorAll(".two")[3].classList.remove("two");
  document.querySelectorAll(".two")[1].classList.remove("two");

}
