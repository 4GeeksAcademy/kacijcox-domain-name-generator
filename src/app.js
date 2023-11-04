const generateDomain = () => {
  let pronoun = ["my", "our"];
  let adj = ["awful", "polite"];
  let noun = ["dolphin", "cheeto"];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let adjIndex = Math.floor(Math.random() * adj.length);
  let nounIndex = Math.floor(Math.random() * noun.length);
  for (let i = 0; i < pronoun.length; i++)
    for (let y = 0; y < adj.length; y++)
      for (let x = 0; x < noun.length; x++)
        console.log(pronoun[i] + adj[y] + noun[x] + ".com");
};
generateDomain();
