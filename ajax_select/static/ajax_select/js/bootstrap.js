(function(w) {
  /**
   * load jquery and jquery-ui if needed
   */

  function not(thing) {
    return typeof thing === 'undefined';
  }

  function loadJS(src) {
    document.write('<script type="text/javascript"  src="' + src + '"><\/script>');
  }

  function loadCSS(href) {
    var script = document.createElement('link');
    script.href = href;
    script.type = 'text/css';
    script.rel = 'stylesheet';
    document.head.appendChild(script);
  }

  if (not(w.jQuery)) {
    loadJS('//cdn.jsdelivr.net/npm/jquery@1.9.1/jquery.min.js');
  }

  if (not(w.jQuery) || not(w.jQuery.ui) || not(w.jQuery.ui.autocomplete)) {
    loadJS('//cdnjs.cloudflare.com/ajax/libs/jqueryui/1.10.3/jquery-ui.js');
    loadCSS('//cdnjs.cloudflare.com/ajax/libs/jqueryui/1.10.3/themes/smoothness/jquery-ui.min.css');
  }
})(window);
