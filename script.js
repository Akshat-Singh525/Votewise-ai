const quizButtons = document.querySelectorAll(".quiz-box button");

quizButtons.forEach((button) => {

  button.addEventListener("click", () => {

    if(button.innerText === "Voter ID"){

      button.classList.add("correct");

    }

    else{

      button.classList.add("wrong");

    }

  });

});





const sendBtn = document.querySelector(".input-area button");

const input = document.querySelector(".input-area input");

const chatBox = document.querySelector(".chat-box");





sendBtn.addEventListener("click", () => {

  const userText = input.value.toLowerCase();

  if(userText === "") return;





  const userMessage = document.createElement("p");

  userMessage.innerHTML = "🧑 " + userText;

  chatBox.appendChild(userMessage);





  const botMessage = document.createElement("p");





  let reply = "❓ Please ask election related questions.";





  if(userText.includes("vote")){

    reply = "🗳 Voting helps citizens choose their leaders in a democracy.";

  }

  else if(userText.includes("voter id")){

    reply = "📄 Voter ID is an official identity document used during elections.";

  }

  else if(userText.includes("evm")){

    reply = "🖥 EVM means Electronic Voting Machine used for secure voting.";

  }

  else if(userText.includes("bjp")){

    reply = "🏛 BJP is one of the major political parties in India.";

  }

  else if(userText.includes("prime minister")){

    reply = "👤 The Prime Minister is the head of the Government of India.";

  }

  else if(userText.includes("election")){

    reply = "📢 Elections allow citizens to choose government representatives.";

  }

  else if(userText.includes("india")){

    reply = "🇮🇳 India is the world's largest democracy.";

  }





  botMessage.innerHTML = reply;





  setTimeout(() => {

    chatBox.appendChild(botMessage);

    chatBox.scrollTop = chatBox.scrollHeight;

  }, 500);





  input.value = "";

});