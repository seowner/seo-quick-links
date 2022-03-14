chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function 
(tabs) {
    var url = tabs[0].url;

const getHostname = (url) => {
  // use URL constructor and return hostname
  return new URL(url).hostname;
}

    document.getElementById("google_cache_link").innerHTML = '<a href="https://webcache.googleusercontent.com/search?q=cache:'+url+'" target="_blank">Google Cache</a>';
    url = url.replace("www.", ""); 
    document.getElementById("maj_link").innerHTML = '<a href="https://majestic.com/reports/site-explorer?q='+getHostname(url)+'&oq='+getHostname(url)+'&IndexDataSource=F" target="_blank">View Majestic SEO Report</a>';
    document.getElementById("google_link").innerHTML = '<a href="https://www.google.com/search?q=site:'+getHostname(url)+'" target="_blank">Check Indexed Pages</a>';
    document.getElementById("whois_link").innerHTML = '<a href="https://whois.domaintools.com/'+getHostname(url)+'" target="_blank">Check WHOIS</a>';
    document.getElementById("semrush_link").innerHTML = '<a href="https://www.semrush.com/analytics/overview/?q='+getHostname(url)+'&searchType=domain" target="_blank">SEMRush</a>';

});
