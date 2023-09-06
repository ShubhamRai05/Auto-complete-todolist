
const namesByLetter = {
    A: ["Alice", "Andrew", "Amelia"],
    B: ["Benjamin", "Bella", "Brandon"],
    C: ["Charlotte", "Christopher", "Claire"],
    D: ["Daniel", "Daisy", "David"],
    E: ["Emily", "Ethan", "Emma"],
    F: ["Fiona", "Finn", "Faith"],
    G: ["Grace", "Gavin", "Gabriella"],
    H: ["Hannah", "Henry", "Harper"],
    I: ["Isabella", "Isaac", "Ivy"],
    J: ["Jackson", "Julia", "James"],
    K: ["Katherine", "Kevin", "Kayla"],
    L: ["Liam", "Lily", "Logan"],
    M: ["Mia", "Matthew", "Madison"],
    N: ["Noah", "Natalie", "Nathan"],
    O: ["Olivia", "Owen", "Sophia"],
    P: ["Penelope", "Patrick", "Piper"],
    Q: ["Quinn", "Quincy", "Queenie"],
    R: ["Riley", "Ryan", "Ruby"],
    S: ["Sophia", "Samuel", "Sarah"],
    T: ["Thomas", "Taylor", "Zoe"],
    U: ["Ulysses", "Uma", "Uriah"],
    V: ["Victoria", "Vincent", "Vanessa"],
    W: ["William", "Willow", "Wendy"],
    X: ["Xavier", "Xander", "Xena"],
    Y: ["Yasmine", "Yael", "Yannick"],
    Z: ["Zachary", "Zoey", "Zara"]
  };

  for(names in namesByLetter)
  {
    let sortedNames = new Array()
    sortedNames.push(names)
    sortedNames.sort()
  }
