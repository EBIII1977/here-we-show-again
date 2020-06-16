// KATA 01 

const mainElement = document.querySelector('main')
const kata1heading = document.createElement('h1')

for (let counter=1; counter <=20; counter +=1){
  kata1heading.append(counter + " ")
}

mainElement.append('Kata 1')
mainElement.append(kata1heading)

// KATA 02 

  const kata2heading = document.createElement('h1')

  for (let counter2 = 0; counter2 <= 20; counter2 +=2) {
    kata2heading.append(counter2 + " ")
  }
      
mainElement.append('Kata 2')
mainElement.append(kata2heading)

// KATA 03 

  const kata3heading = document.createElement('h1')
  let counter3 =1

  while(counter3 <=19){
    kata3heading.append(counter3 + " ")
    counter3 += 2
    }

mainElement.append('Kata 3')
mainElement.append(kata3heading)

// KATA 04

const kata4heading = document.createElement('h1')

for (let counter4 = 5; counter4 <= 100; counter4 +=5) {
  kata4heading.append(counter4 + " ")
    
  }

mainElement.append('Kata 4')
mainElement.append(kata4heading)

// KATA 05 

const kata5heading = document.createElement('h1')
let counter5 = 1
let square = 1
 
while(square < 100){    
  square = Math.pow(counter5,2)
  kata5heading.append(square + " ")
  counter5 +=1
  }

mainElement.append('Kata 5')
mainElement.append(kata5heading)


// KATA 06

const kata6heading = document.createElement('h1')

for (let counter6 =20; counter6 >=1; counter6 -= 1){
  kata6heading.append(counter6 + " ")
  }

mainElement.append('Kata 6')
mainElement.append(kata6heading)


// KATA 07 

const kata7heading = document.createElement('h1')
let counter7 = 20

while (counter7 >=2){
  kata7heading.append(counter7 + " ")
  counter7 -= 2
  }                                                               

mainElement.append('Kata 7')
mainElement.append(kata7heading)


// KATA 08

const kata8heading = document.createElement('h1')
let counter8 = 19

while (counter8 >=1){
  kata8heading.append(counter8 + " ")
 counter8 -= 2
 }
 
 mainElement.append('Kata 8')
 mainElement.append(kata8heading)


// KATA 09 

const kata9heading = document.createElement('h1')
let counter9 = 100

while(counter9 >=5){
  kata9heading.append(counter9 + " ")
  counter9 -= 5
  }

mainElement.append('Kata 9')
mainElement.append(kata9heading)


// KATA 10

const kata10heading = document.createElement('h1')
let counter10 = 10
let square10 = 100

while(square10 >1){
  square10 = Math.pow(counter10,2)
  kata10heading.append(square10 + " ")
  counter10 -= 1
  }

mainElement.append('Kata 10')
mainElement.append(kata10heading)

// Kata 11

const kata11heading = document.createElement('h1')
const sampleArray = [
  469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 
  456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
  ]

for (let index11 =0; index11 < sampleArray.length; index11 +=1){
  kata11heading.append(sampleArray[index11] + " ")
}

mainElement.append('Kata 11')
mainElement.append(kata11heading)

// Kata 12

const kata12heading = document.createElement('h1')

for (let index12 =0; index12 < sampleArray.length; index12 ++) {
  if (sampleArray[index12] % 2 ===0) {
    kata12heading.append(sampleArray[index12] + ' ')
    }
  } 
    
mainElement.append('Kata 12')
mainElement.append(kata12heading)

// Kata 13

const kata13heading = document.createElement('h1')

for (let index13 =0; index13 < sampleArray.length; index13 ++) {
  if (sampleArray[index13] % 2 !==0) {
      kata13heading.append(sampleArray[index13] + ' ')
    }
  }
    
mainElement.append('Kata 13')
mainElement.append(kata13heading)

// Kata 14

const kata14heading = document.createElement('h1')

for (let index14 = 0; index14 < sampleArray.length; index14 +=1) {
  kata14heading.append(sampleArray[index14] * sampleArray[index14] +" " )
  }

  mainElement.append('Kata 14')
  mainElement.append(kata14heading)

// Kata 15

const kata15heading = document.createElement('h1')
let sum = 0

for (index15 = 0; index15 <=20; index15 +=1){
  sum += index15
  }

mainElement.append('Kata 15')
mainElement.append(kata15heading)
kata15heading.append(sum)

// Kata 16

const kata16heading = document.createElement('h1')
let total = 0

for (let index16 = 0; index16 < sampleArray.length; index16 ++) {
  total += sampleArray[index16] 
}
    
kata16heading.append(total)
mainElement.append('Kata 16')
mainElement.append(kata16heading)
    
// Kata 17

const kata17heading = document.createElement('h1')
let index17 = 0
let smallestIndex = sampleArray[index17]

for (let index17 = 0; index17 <= sampleArray.length; index17 +=1){
  if (sampleArray[index17] < smallestIndex){
    smallestIndex = sampleArray[index17]
    }
}

kata17heading.append(smallestIndex)
mainElement.append('Kata 17')
mainElement.append(kata17heading)

// Kata 18

const kata18heading = document.createElement('h1')
let largestIndex = 0

for (let index18 = 0; index18 <= sampleArray.length; index18 +=1){
  if (sampleArray[index18] > largestIndex){
    largestIndex = sampleArray[index18]
    }
  }

kata18heading.append(largestIndex)
mainElement.append('Kata 18')
mainElement.append (kata18heading)