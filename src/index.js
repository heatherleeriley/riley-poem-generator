function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "263ctda5b6f104dbbf7ofc6f7838219f";
  let prompt = `Used instructions: Generate a poem about ${instructionsInput.value}`;
  let context =
    "You are a poet and love to write short poems.  Your mission is to generate a 4 line poem and seperate each line with a <br />.  Do not include a title to the poem.  Make sure to follow the user instructions.  Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳Generating a poem about ${instructionsInput.value}</div>`;

  console.log("Generating Poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
