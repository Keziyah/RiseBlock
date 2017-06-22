'use strict'
require("!style-loader!css-loader!sass-loader!./components/sass/stylesheets/main.scss");

import React from 'react'
import { render } from 'react-dom'

import Quiz from './components/Quiz'

render(
    <Quiz />,
    document.getElementById("app")
)