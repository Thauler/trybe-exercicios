function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
let divButton = document.querySelector('.buttons-container');
let buttonDiv = document.createElement('button');
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function calendarDays() {
  for (let index = 0; index < dezDaysList.length; index += 1) {
    let ulDays = document.getElementById('days');
    let liDays = document.createElement('li');
    liDays.className = 'day';
    liDays.innerText = dezDaysList[index];
    ulDays.appendChild(liDays);
    if ((dezDaysList[index] === 24) || (dezDaysList[index] === 31)) {
      liDays.className = 'day holiday';
    }
    if ((dezDaysList[index] === 4) || (dezDaysList[index] === 11) || (dezDaysList[index] === 18)) {
      liDays.className = 'day friday';
    }
    if ((dezDaysList[index] === 25)) {
      liDays.className = 'day holiday friday';
    }
  }
}
calendarDays();


function holidayButton(holidays) {
  buttonDiv.id = 'btn-holiday';
  buttonDiv.innerHTML = holidays;
  divButton.appendChild(buttonDiv);
}
holidayButton("Feriados");
// 3
let button = document.querySelector('#btn-holiday');
let getHolidays = document.querySelectorAll('.holiday');
button.addEventListener('click', function () {
  for (let index = 0; index < getHolidays.length; index += 1) {
    if (getHolidays[index].style.background === 'rgb(238, 238, 238)') {
      getHolidays[index].style.background = '#Afa'
    } else {
      getHolidays[index].style.background = 'rgb(238, 238, 238)';
    }
  }
});

// 4
function buttonFriday(friday) {
  let button = document.createElement('button');

  button.id = 'btn-friday';
  button.innerText = friday;
  divButton.appendChild(button);
}
buttonFriday('Sexta-feira');

// 5 discutido em grupo no zoom
let classFriday = document.querySelectorAll('.friday');
let friday = document.getElementById('btn-friday');
let mufasaDays = fridays();
friday.addEventListener('click', function () {
  for (let index = 0; index < classFriday.length; index += 1) {
    if (classFriday[index].innerText === 'Sexta-feira') {
      classFriday[index].innerText = mufasaDays[index];
    } else {
      classFriday[index].innerText = 'Sexta-feira';
    }
  }
})

function fridays() {
  let reverse = [];
  for (let index = 0; index < classFriday.length; index += 1) {
    reverse.push(classFriday[index].innerText);
  }
  return reverse;
}

// 6
let zoomDays = document.querySelectorAll('.day');
for (let index = 0; index < zoomDays.length; index += 1) {
  zoomDays[index].addEventListener('mouseover', zoomDay);
  zoomDays[index].addEventListener('mouseout', normalSizeDays);

}


function zoomDay(event) {
  event.target.style.fontSize = '30px';
  event.target.style.border = 'solid 3px #1D6684';
}

function normalSizeDays(event) {
  event.target.style.fontSize = '20px';
  event.target.style.border = '';
}

// 7
let taskDiv = document.querySelector('.my-tasks')
function taskGenerator(task) {
  let spanTask = document.createElement('span');
  spanTask.innerText = task;
  taskDiv.appendChild(spanTask);
}
taskGenerator('Cozinhar');

// 8