'use strict'
import './components/sass/stylesheets/main.scss';
import React from 'react'
import { render } from 'react-dom'

import Quiz from './components/Quiz'

const data = {
    "question": "What is this a picture of?", 
    "answer1": "Coffee and cookies", 
    "answer2": "Pizza", 
    "correctAnswer": "Yum! Cookies are great!", 
    "wrongAnswer": "Pizza is yummy too. But that's not the right answer.", 
    "imgsrc": "https://cdn.articulate.com/rise/courses/FtHG0DN2jjp0KHxN/d229V-nstxA6tZdi.gif" 
} 

render(
    <Quiz data={data}/>,
    document.getElementById("app")
)