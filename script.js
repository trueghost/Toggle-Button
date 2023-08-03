const toggle = document.getElementById('hide-checkbox');

toggle.addEventListener('change', () => {
  document.documentElement.style.background = toggle.checked ? '#fff' : '#2B3035ff';

  if (!toggle.checked) {
    $('.clouds').fadeIn();
    setTimeout(function() {
      $('.star').toggleClass('hidden', false);
      $('.clouds').addClass('disappear');
    }, 6000);
  } else {
    $('.star').toggleClass('hidden', true);
    $('.clouds').removeClass('disappear');
  }
});

// Trigger the change event initially
toggle.dispatchEvent(new Event('change'));

for (var i = 0; i < 100; i++) {
  var star = '<div class="star" style="animation: twinkle ' + ((Math.random() * 5) + 5) + 's linear ' + ((Math.random() * 5) + 5) + 's infinite; top: ' + Math.random() * $('.toggle').height() + 'px; left: ' + Math.random() * $('.toggle').width() + 'px;"></div>';
  $('.toggle').append(star);
}

$(document).ready(function() {
  $('#hide-checkbox').change(function() {
    $('.star').toggleClass('hidden', this.checked);
  });
});

var clouds = [
  ['https://s.cdpn.io/15514/clouds_2.png', '1000px', '40s'],
  ['https://s.cdpn.io/15514/clouds_1.png', '1000px', '30s'],
  ['https://s.cdpn.io/15514/clouds_3.png', '1579px', '34s']
];

// Animation & keyframes
for (var i = 0; i < clouds.length; i++) {
  var item = clouds[i];
  var path = item[0];
  var width = item[1];
  var duration = item[2];

  var keyframes = '@keyframes clouds-loop-' + (i + 1) + ' { to { background-position: -' + width + ' 0; } }';
  var css = '.clouds-' + (i + 1) + ' { background-image: url(' + path + '); animation: clouds-loop-' + (i + 1) + ' ' + duration + ' infinite linear; }';

  var style = document.createElement('style');
  style.innerHTML = keyframes;
  document.head.appendChild(style);

  style = document.createElement('style');
  style.innerHTML = css;
  document.head.appendChild(style);
}