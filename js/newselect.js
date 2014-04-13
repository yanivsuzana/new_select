//created by yaniv soussana

$(document).ready(function() {$(".newselect").wrapAll("<div class='boxselect'></div>");$(".boxselect").append("<div class='valofselect'>please select from list..</div>");$(".newselect" ).change(function() {$(this).next().html($(".newselect option:selected").text());});});
