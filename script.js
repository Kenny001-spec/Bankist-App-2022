'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data

// Different DATA! Contains movements dates, Currrency and Locale
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],  // Index
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};


const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};


const accounts = [account1, account2];
console.log(accounts);

// DOM Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

const formatMovDate = function (newDate, acctlocale) {
  const calcDaysPassed = (day1, day2) => {
    return Math.trunc(Math.abs((day2 - day1) / (1000 * 60 * 60 * 24)));
  }

  const daysPassed = calcDaysPassed(newDate, new Date());
  console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    // const curDate = `${movCurDate.getDate()}`.padStart(2, 0);
    // const curMonth = `${movCurDate.getMonth() + 1}`.padStart(2, 0);
    // const curYear = movCurDate.getFullYear();
    // return `${curDate}/${curMonth}/${curYear}`

    return new Intl.DateTimeFormat(acctlocale).format(newDate);
  }
}

const formatCurrency = (value, acctlocale, currency) => {
  return new Intl.NumberFormat(acctlocale, { style: 'currency', currency }).format(value);
}

const displayMovements = (accts) => {
  containerMovements.innerHTML = '';




  accts.movements.forEach((movementEl, i) => {
    const movCurDate = new Date(accts.movementsDates[i]);

    const displayDate = formatMovDate(movCurDate, accts.locale);


    // const displayDate = `${curDate}/${curMonth}/${curYear}`;    // 18/12/2019
    // console.log(movements)
    const movementsType = movementEl > 0 ? 'deposit' : 'withdrawal';
    const movementHTML = `
    <div class="movements">
      <div class="movements__row">
        <div class="movements__type movements__type--${movementsType}">${i + 1} ${movementsType}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formatCurrency(movementEl, accts.locale, accts.currency)}</div>
      </div>
    </div>
    `

    containerMovements.insertAdjacentHTML('afterbegin', movementHTML)
  });
}
// displayMovements(account1.movements);

const calcDisplayBalance = (accts) => {
  accts.balance = accts.movements.reduce((accm, bal) => accm + bal, 0);

  labelBalance.textContent = `${formatCurrency(accts.balance, accts.locale, accts.currency)}€`;
  console.log(accts.balance);
  return accts.balance;
}

// calcDisplayBalance(account1.movements);

const calcDisplaySummary = (account) => {
  const income = account.movements.filter(inc => inc > 0)
    .reduce((accm, inc) => accm + inc, 0);
  labelSumIn.textContent = `${formatCurrency(income, account.locale, account.currency)}`;


  const expenses = account.movements.filter(exp => exp < 0)
    .reduce((accm, exp) => accm + exp, 0);
  labelSumOut.textContent = `${formatCurrency(Math.abs(expenses), account.locale, account.currency)}`;

  const interest = account.movements.filter(inc => inc > 0)
    .map(inc => (inc * 1.2) / 100)
    .reduce((accm, int) => accm + int, 0);
  labelSumInterest.textContent = `${formatCurrency(interest, account.locale, account.currency)}`;
  return interest;
}

const updateUI = (accts) => {
  //Display balance
  calcDisplayBalance(accts);

  //Display Movements
  displayMovements(accts);

  //Display Interest
  calcDisplaySummary(accts);
}


// console.log(calcDisplaySummary(account1.movements));


/////////////////////////////////////////////////
// const createUsername = (user) => {
//   const username = user.toLowerCase().split(' ').map(nameEL => nameEL[0]).join('');
//   console.log(username);
//   return username
// }
// createUsername(account4.owner)


const createUsername = (acctObj) => {
  acctObj.forEach(acct => {
    return acct.username = acct.owner.toLowerCase().split(' ').map(nameEL => nameEL[0]).join('');
  });

  // const username = acctObj.owner.toLowerCase().split(' ').map(nameEL => nameEL[0]).join('');
  // console.log(username);
  // return username
}
createUsername(accounts);
// console.log(account1);
// console.log(account2);

const logoutTimer = () => {
  let time = 20;   // let's say 100sec


  const tickTok = () => {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);  // 40
    // Display Time in the UI
    labelTimer.textContent = `${min}:${sec}`;

    if (time === 0) {
      containerApp.style.opacity = 0;
      labelWelcome.textContent = 'Log in to get started';

    }

    // Decrease the time
    time-- // time--

  }

  tickTok();
  // setInterval(tickTok, 1000);
  const timer = setInterval(tickTok, 1000);

  return timer;
}



////////////////////////////////
// EVENT HANDLERS
////////////////////////////////
let currentAcct;
let timer;
// currentAcct = account2;
// updateUI(currentAcct);
// containerApp.style.opacity = 1;

// EXPERIMENT
// const todayDate = new Date(2022, 1, 21);
// const locale = navigator.language;


btnLogin.addEventListener('click', (e) => {
  e.preventDefault();


  currentAcct = accounts.find(acct => acct.username === inputLoginUsername.value);

  if (currentAcct.pin === +inputLoginPin.value) {
    console.log('you don login')

    // DISPLAY WELCOME MESSAGE
    const user = currentAcct.owner.split(' ')[0];
    labelWelcome.textContent = `Welcome back, ${user}`;

    // Display date and Time
    const currentDate = new Date();


    // const curDate = `${currentDate.getDate()}`.padStart(2, 0);
    // const curMonth = `${currentDate.getMonth() + 1}`.padStart(2, 0);
    // // const curMonthFix = curMonth < 10 ? '0' + curMonth : curMonth;
    // const curYear = currentDate.getFullYear();
    // const curHour = `${currentDate.getHours() % 12}`.padStart(2, 0);
    // const curMinute = `${currentDate.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${curDate}/${curMonth}/${curYear} ${curHour}:${curMinute}`;

    // console.log(curDate, curMonth, curYear, curHour, curMinute);


    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'long',    // short  // long
      year: 'numeric',   //  2-digit    //short
      weekday: 'long'
    }

    labelDate.textContent = new Intl.DateTimeFormat(currentAcct.locale, options).format(currentDate);


    // console.log(user)
    // labelWelcome.textContent = `Welcome back, ${user}`;

    // DISPLAY UI
    containerApp.style.opacity = 100;

    //  CLEAR INPUT FIELD
    inputLoginUsername.value = '';
    inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update User Interface
    updateUI(currentAcct);

    // Start Timer
    if (timer) clearInterval(timer);
    timer = logoutTimer();

  }
  console.log(currentAcct);
});

btnTransfer.addEventListener('click', (e) => {
  e.preventDefault();
  // console.log('click here');

  const amount = +inputTransferAmount.value;
  const receiverAcct = accounts.find(acct => acct.username === inputTransferTo.value);
  // console.log('TRANSFER', amount, receiverAcct);
  // console.log(typeof amount, currentAcct);

  // Clear input Field
  inputTransferTo.value = '';
  inputTransferAmount.value = '';

  // if (amount > 0
  //   && receiverAcct
  //   && currentAcct.username !== receiverAcct.username
  //   && currentAcct.balance >= amount) {


  //   currentAcct.movements.push(-amount);
  //   receiverAcct.movements.push(amount);


  //   updateUI(currentAcct);

  //   // console.log('Transfer Valid')
  // }


  if (amount > 0 && receiverAcct && currentAcct.username !== receiverAcct.username) {

    if (currentAcct.balance >= amount) {

      // 1. Remove amount from sender Account
      currentAcct.movements.push(-amount);
      currentAcct.movementsDates.push(new Date().toISOString());


      // 2. Add amount to the receiver Account
      receiverAcct.movements.push(amount);
      receiverAcct.movementsDates.push(new Date().toISOString());


      // 3. Update UI Interface
      updateUI(currentAcct);

      // Start Timer
      clearInterval(timer);
      timer = logoutTimer();

      console.log('Balance is sufficient...transfer done✅');
    } else {
      alert('Insufficient balance...you are broke 😋');
    }

  } else {
    console.log('Invalid Transfer');
  }
});


btnLoan.addEventListener('click', (e) => {
  e.preventDefault();

  const loanAmount = +inputLoanAmount.value;
  const loanCondition = currentAcct.movements.some(accEl => accEl >= loanAmount * 0.1);

  if (loanAmount > 0 && loanCondition) {
    setTimeout(() => {
      currentAcct.movements.push(loanAmount);
      currentAcct.movementsDates.push(new Date().toISOString());

      // Update UI Interface
      updateUI(currentAcct);

      // Clear Input Field
      inputLoanAmount.value = '';

      // Start Timer
      clearInterval(timer);
      timer = logoutTimer();

      alert(`Congratulations... Your loan has been approved ⌚`);
      // console.log('Loan Approved', loanAmount);
    }, 3000);


  } else {
    console.log('Loan Disapproved!');
  }

})


btnClose.addEventListener('click', (e) => {
  e.preventDefault();


  if (currentAcct.username === inputCloseUsername.value
    && currentAcct.pin === +inputClosePin.value) {
    const index = accounts.findIndex(acct => acct.username === inputCloseUsername.value);
    console.log(index);

    accounts.splice(index, 1);

    // Hide Ui  
    containerApp.style.opacity = 0;

    // Start Timer
    clearInterval(timer);
    timer = logoutTimer();

    // Clear input field    
    inputCloseUsername.value = '';
    inputClosePin.value = '';

    // TO bring the welcome message for users

    labelWelcome.textContent = 'Log in to get started';
    console.log('You are logged out');
  } else {
    console.log('NOT WORKING');
  }

});


///////////////////////////////////////////
//////////////////TEST////////////////////
/////////////////////////////////////////

// const accountJD = accounts.find(el => el.owner === 'Jessica Davis');
// const accountSS = accounts.find(el => el.username === 'SS');
// console.log(accountJD, accountSS);

// for (const person of accounts) {
  // if (person.pin === 3333) console.log(person);
// };
