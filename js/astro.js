var lead = 'data/astro-act-lead.json';
var leadm = 'data/astro-act-lead-m.json';
var leadf = 'data/astro-act-lead-f.json';

var supp = 'data/astro-act-supp.json';
var suppm = 'data/astro-act-supp-m.json';
var suppf = 'data/astro-act-supp-f.json';

var dir = 'data/astro-direct.json';
var dirm = 'data/astro-dir-m.json';
var dirf = 'data/astro-dir-f.json';

var highlighted;

$(document).ready(function() {
  reload(lead);
  setListeners();
});

function reload(dataPath) {
  highlight(dataPath);

  d3.json(dataPath, function(err, data) {
    var chart = radialBarChart()
      .barHeight(140)
      .reverseLayerOrder(true)
      .capitalizeLabels(true)
      .barColors(['#d47a7a', '#d4af7a', '#7a8dd4', '#7ad4cd'])
      .domain([0, 20])
      .tickValues([0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20])
      .tickCircleValues([0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);

    d3.select('#chart')
      .datum(data)
      .call(chart);
  });
}

function unhighlight(category) {
  switch(category) {
    case 'lead':
      $('#lead').css('font-weight', 'normal');
      break;
    case 'leadm':
      $('#leadm').css('font-weight', 'normal');
      break;
    case 'leadf':
      $('#leadf').css('font-weight', 'normal');
      break;
    case 'supp':
      $('#supp').css('font-weight', 'normal');
      break;
    case 'suppm':
      $('#suppm').css('font-weight', 'normal');
      break;
    case 'suppf':
      $('#suppf').css('font-weight', 'normal');
      break;
    case 'dir':
      $('#dir').css('font-weight', 'normal');
      break;
    case 'dirm':
      $('#dirm').css('font-weight', 'normal');
      break;
    case 'dirf':
      $('#dirf').css('font-weight', 'normal');
      break;
  }
}

function highlight(d) {
  switch(d) {
    case 'data/astro-act-lead.json':
      $('#lead').css('font-weight', 'bold');
      highlighted = 'lead';
      break;
    case 'data/astro-act-lead-m.json':
      $('#leadm').css('font-weight', 'bold');
      highlighted = 'leadm';
      break;
    case 'data/astro-act-lead-f.json':
      $('#leadf').css('font-weight', 'bold');
      highlighted = 'leadf';
      break;
    case 'data/astro-act-supp.json':
      $('#supp').css('font-weight', 'bold');
      highlighted = 'supp';
      break;
    case 'data/astro-act-supp-m.json':
      $('#suppm').css('font-weight', 'bold');
      highlighted = 'suppm';
      break;
    case 'data/astro-act-supp-f.json':
      $('#suppf').css('font-weight', 'bold');
      highlighted = 'suppf';
      break;
    case 'data/astro-direct.json':
      $('#dir').css('font-weight', 'bold');
      highlighted = 'dir';
      break;
    case 'data/astro-dir-m.json':
      $('#dirm').css('font-weight', 'bold');
      highlighted = 'dirm';
      break;
    case 'data/astro-dir-f.json':
      $('#dirf').css('font-weight', 'bold');
      highlighted = 'dirf';
      break;
  }
}

function showTraits(s) {
  switch(s) {
    case 'Aries':
      $('#info').css('color', '#d47a7a');      
      $('#info').html('Aries: adventurous, courageous, confident, quick-witted');
      break;
    case 'Taurus':
      $('#info').css('color', '#d4af7a');      
      $('#info').html('Taurus: patient, reliable, warmhearted, determined');
      break;
    case 'Gemini':
      $('#info').css('color', '#7a8dd4');      
      $('#info').html('Gemini: adaptive, witty, eloquent, lively');
      break;
    case 'Cancer':
      $('#info').css('color', '#7ad4cd');      
      $('#info').html('Cancer: emotional, imaginative, cautious, sympathetic');
      break;
    case 'Leo':
      $('#info').css('color', '#d47a7a');      
      $('#info').html('Leo: generous, creative, broad-minded, faithful');
      break;
    case 'Virgo':
      $('#info').css('color', '#d4af7a');      
      $('#info').html('Virgo: modest, meticulous, practical, analytical');
      break;
    case 'Libra':
      $('#info').css('color', '#7a8dd4');      
      $('#info').html('Libra: diplomatic, charming, sociable, peaceable');
      break;
    case 'Scorpio':
      $('#info').css('color', '#7ad4cd');      
      $('#info').html('Scorpio: determined, intuitive, passionate, magnetic');
      break;
    case 'Sagittarius':
      $('#info').css('color', '#d47a7a');      
      $('#info').html('Sagittarius: affable, values freedom, honest, intellectual');
      break;
    case 'Capricorn':
      $('#info').css('color', '#d4af7a');      
      $('#info').html('Capricorn: practical, disciplined, careful, reserved');
      break;
    case 'Aquarius':
      $('#info').css('color', '#7a8dd4');      
      $('#info').html('Aquarius: friendly, loyal, inventive, independent');
      break;
    case 'Pisces':
      $('#info').css('color', '#7ad4cd');      
      $('#info').html('Pisces: sensitive, compassionate, selfless, sympathetic');
      break;
  }
}

function setListeners() {
  $('#lead').click(function() {
    $('#dirf-note').css('display', 'none');
    unhighlight(highlighted);
    reload(lead);
  });

  $('#leadm').click(function() {
    $('#dirf-note').css('display', 'none');
    unhighlight(highlighted);
    reload(leadm);
  });

  $('#leadf').click(function() {
    $('#dirf-note').css('display', 'none');
    unhighlight(highlighted);
    reload(leadf);
  });

  $('#supp').click(function() {
    $('#dirf-note').css('display', 'none');
    unhighlight(highlighted);
    reload(supp);
  });

  $('#suppm').click(function() {
    $('#dirf-note').css('display', 'none');
    unhighlight(highlighted);
    reload(suppm);
  });

  $('#suppf').click(function() {
    $('#dirf-note').css('display', 'none');
    unhighlight(highlighted);
    reload(suppf);
  });

  $('#dir').click(function() {
    $('#dirf-note').css('display', 'none');
    unhighlight(highlighted);
    reload(dir);
  });

  $('#dirm').click(function() {
    $('#dirf-note').css('display', 'none');
    unhighlight(highlighted);
    reload(dirm);
  });

  $('#dirf').click(function() {
    $('#dirf-note').css('display', 'inline');
    unhighlight(highlighted);
    reload(dirf);
  });
}


