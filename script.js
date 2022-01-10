window.addEventListener('click', () => {
  const divContainer = document.querySelector('#canvas');
  const allInnerDivs = document.querySelectorAll('#canvas div');
  console.log(divContainer.dataset)
  if (allInnerDivs[0].innerText !== '') {
    allInnerDivs.forEach(div => {
      div.innerText = '';
    })
    divContainer.dataset.mobileView = "column";
  } else {
    allInnerDivs.forEach((div, i) => {
      div.innerText = i + 1;
    })
    divContainer.dataset.mobileView = "grid";
  }
})
