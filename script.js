// Елементи інтерфейсу
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
const workTimeInput = document.getElementById('workTime');
const breakTimeInput = document.getElementById('breakTime');
const completedSessionsDisplay = document.getElementById('completedSessions');
const totalWorkTimeDisplay = document.getElementById('totalWorkTime');
const progressRing = document.querySelector('.progress-ring-circle');

// Константи для анімації
const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * 45; // r = 45 з SVG
progressRing.style.strokeDasharray = `${CIRCLE_CIRCUMFERENCE} ${CIRCLE_CIRCUMFERENCE}`;
progressRing.style.strokeDashoffset = 0;

// Змінні стану
let timeLeft;
let timerId = null;
let isWorkTime = true;
let completedSessions = parseInt(localStorage.getItem('completedSessions')) || 0;
let totalWorkTime = parseInt(localStorage.getItem('totalWorkTime')) || 0;