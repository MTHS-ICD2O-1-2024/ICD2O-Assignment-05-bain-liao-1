// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Bain Liao
// Created on: May 2025
// This file contains the JS functions for index.html

"use strict"

/**
* This function calculates the arithmetic sequence.
*/
function calculateArithmeticSequence() {
  // User input
  const startingValue = parseInt(document.getElementById("starting-value").value)
  const commonDifference = parseInt(document.getElementById("common-difference").value)
  const numberOfTerms = parseInt(document.getElementById("number-of-terms").value)
  
  let arithmeticSequence = ""
  
  // Process
  for (let remainingTerms = numberOfTerms; remainingTerms > 0; remainingTerms--) {
    let currentTerm = startingValue + ((numberOfTerms - remainingTerms) * commonDifference)
    arithmeticSequence += currentTerm + ", "
  }
  
  // Output
  document.getElementById("result").innerText = "The arithmetic sequence is: " + arithmeticSequence
}
