
gh = require("gh-pages")

gh.publish("public", {
    branch: "master",
    repo : "https://github.com/xotonic/xotonic.gihub.com.git"
}, function(err) { console.log(err)}) 
