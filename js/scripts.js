

function wordCounter(text){
  let wordCount = 0;
  text.forEach(function(word){
    if(word && !Number(word) && word != " "){
      wordCount++;
    }
  });
  
  return wordCount; 

  }   
  
  function numberOfOccurences(text, word){
    let wordCount = 0;
    text.forEach(function(textWord){
      if(textWord.toLowerCase().includes(word.toLowerCase())){
        wordCount++;
      }
    });
    return wordCount;
  }


  function censorForTheKids(paragraph) {
    const badWords =['zoinks',  'muppeteer', 'biffaroni', 'loopdaloop'];

    badWords.forEach(function(word){
    while (paragraph.includes(word)){
      paragraph = paragraph.toString().replace(badWords, "*****");
      paragraph = paragraph.split(' ');
    }
    });
  
    return paragraph;
  }
