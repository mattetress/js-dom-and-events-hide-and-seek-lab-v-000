function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  let rankedListLi = document.querySelectorAll(".ranked-list li");

  for (let i = 0; i < rankedListLi.length; i++) {
    rankedListLi[i].innerHTML = parseInt(rankedListLi[i].innerHTML) + n;
  }
}

function deepestChild() {
  let node = document.getElementById( 'grand-node' );
  let child = node.children[0];

  while (child) {
    node = child;
    child = node.children[0];
  }

  return node;
}
