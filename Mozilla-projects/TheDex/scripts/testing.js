var cinnapic = document.querySelector('.cimage');
var btn = document.querySelector('button');
var bx = document.querySelector('.box');

cinnapic.onclick = function() {
  var picSrc = cinnapic.getAttribute('src');
  if (picSrc === 'images/cinnaroll.jpg') {
    cinnapic.setAttribute('src', 'images/cinnabun.jpg');
  }
  else{
    cinnapic.setAttribute('src', 'images/cinnaroll.jpg');
  }
}

btn.onclick = function() {
  bx.textContent = '1.) Heat the milk in a small saucepan until it bubbles, then remove from heat. Mix in margarine; stir until melted. Let cool until lukewarm. 2.) In a large mixing bowl, combine 2 1/4 cup flour, yeast, sugar and salt; mix well. Add water, egg and the milk mixture; beat well. Add the remaining flour, 1/2 cup at a time, stirring well after each addition. When the dough has just pulled together, turn it out onto a lightly floured surface and knead until smooth, about 5 minutes. 3.) Cover the dough with a damp cloth and let rest for 10 minutes. Meanwhile, in a small bowl, mix together brown sugar, cinnamon, softened margarine. 4.) Roll out dough into a 12x9 inch rectangle. Spread dough with margarine/sugar mixture. Sprinkle with raisins if desired. Roll up dough and pinch seam to seal. Cut into 12 equal size rolls and place cut side up in 12 lightly greased muffin cups. Cover and let rise until doubled, about 30 minutes. Preheat oven to 375 degrees F  5.)Bake 20 min'
}
