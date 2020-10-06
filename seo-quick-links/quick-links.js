chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function 
(tabs) {
    var url = tabs[0].url;

const getHostname = (url) => {
  // use URL constructor and return hostname
  return new URL(url).hostname;
}

url = url.replace("www.", ""); 

    document.getElementById("maj_link").innerHTML = '<a href="https://majestic.com/reports/site-explorer?q='+getHostname(url)+'&oq='+getHostname(url)+'&IndexDataSource=F" target="_blank">Majestic SEO</a>';
    document.getElementById("google_link").innerHTML = '<a href="https://www.google.com/search?q=site:'+getHostname(url)+'" target="_blank">Check Indexed Pages</a>';
    document.getElementById("semrush_link").innerHTML = '<a href="https://www.semrush.com/analytics/overview/?q='+getHostname(url)+'&searchType=domain" target="_blank">SEMRush</a>';
    document.getElementById("ahrefs_link").innerHTML = '<a href="https://ahrefs.com/site-explorer/overview/v2/subdomains/live?target='+getHostname(url)+'" target="_blank">Ahrefs</a>';

});