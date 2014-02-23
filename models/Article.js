var Article = {
    createNew: function () {
		var base = require("./Base");
        var article = base.createNew();
		
		article.title = null;
		article.digest = null;
		article.content = null;
		
		article.hot = 0;		
		
        return article;
    }
};

module.exports = Article;