

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
    reg
    badWords.forEach(function(word) {
      paragraph = paragraph.split(word).join('*****');
      paragraph = paragraph.split(word.charAt(0).toUpperCase() + word.slice(1)).join('*****');
    });

    return paragraph;
  }
