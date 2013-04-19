/*app = {};
app.data = {};

app.data.facets = {

    getTermFacets: function () {
        var termfacet = {
            "facets": {
                "Likes": {
                    "terms": {
                        "field": "likes"
                    }
                }
            },
            "query": {
                "match_all": {}
            },
            "size" : 0
        };

        $.ajax({
            type: 'GET',
            url: 'localhost:9200/enonic',
            data: termfacet,
            dataType: 'json',
            async: false,
            success: function (data) {
                app.data.model.result = data;
            }
        });
    }
}


$(document).ready(function () {
  //  app.data.facets.getTermFacets();
});
    */