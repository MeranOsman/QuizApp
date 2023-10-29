let questions = [
    {
        question: 'Welche Hauptstadt hat Japan?',
        answer_1: 'Tokio',
        answer_2: 'Peking',
        answer_3: 'Seoul',
        answer_4: 'Bangkok',
        right_answer: 1
    },
    {
        question: 'Was ist die Hauptkomponente der Erdatmosphäre?',
        answer_1: 'Stickstoff',
        answer_2: 'Sauerstoff',
        answer_3: 'Kohlendioxid',
        answer_4: 'Wasserstoff',
        right_answer: 2
    },
    {
        question: 'In welchem Jahr wurde die Unabhängigkeit der Vereinigten Staaten von Amerika erklärt?',
        answer_1: '1776',
        answer_2: '1789',
        answer_3: '1812',
        answer_4: '1492',
        right_answer: 1
    },
    {
        question: 'Welches ist das größte Säugetier der Welt?',
        answer_1: 'Elefant',
        answer_2: 'Giraffe',
        answer_3: 'Blauwal',
        answer_4: 'Nashorn',
        right_answer: 3
    },
    {
        question: 'Was ist die chemische Formel für Wasser?',
        answer_1: 'H2O2',
        answer_2: 'CO2',
        answer_3: 'CH4',
        answer_4: 'H2O',
        right_answer: 4
    },
    {
        question: 'Wer malte die "Mona Lisa"?',
        answer_1: 'Vincent van Gogh',
        answer_2: 'Leonardo da Vinci',
        answer_3: 'Pablo Picasso',
        answer_4: 'Michelangelo',
        right_answer: 2
    },
    {
        question: 'Welcher Planet ist auch als der "Rote Planet" bekannt?',
        answer_1: 'Jupiter',
        answer_2: 'Mars',
        answer_3: 'Venus',
        answer_4: 'Saturn',
        right_answer: 2
    }
];


function init() {
    document.getElementById('amountQuestion').innerHTML = questions.length;

    showQuestion();
}


function showQuestion() {
    document.getElementById('questionText').innerHTML = questions[0]['question'];
    document.getElementById('answer_1').innerHTML = questions[0]['answer_1'];
    document.getElementById('answer_2').innerHTML = questions[0]['answer_2'];
    document.getElementById('answer_3').innerHTML = questions[0]['answer_3'];
    document.getElementById('answer_4').innerHTML = questions[0]['answer_4'];
}


function answer(selection) {
    let selectionQuestNumber = selection.slice(-1);

    if (selectionQuestNumber == questions[0]['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(`answer_${questions[0]['right_answer']}`).parentNode.classList.add('bg-success');
    }
    document.getElementById('nextButton').disabled = false;
}