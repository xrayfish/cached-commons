(function(a){function d(e){return a("<div />").html(e).text()}function c(e){return a("<div />").text(e).html()}function b(f){var e=f.substring(0,4).toLowerCase().match(/<br\/?>/);if(e){f=f.substring(e[0].length,f.length-1);return b(f)}else{return f}}a.fn.disqus=function(e){if(a(this).get(0)==null){return}var e=a.extend({domain:"",title:"",message:"",url:window.location.href,developer:0,no_style:false,iframe_css:null,ready:null,added:null,markdown:false,prettify:false,show_count:false,interval:100},e);window.disqus_no_style=e.no_style;window.disqus_iframe_css=disqus_iframe_css=e.iframe_css;disqus_developer=e.developer;disqus_container_id=this.attr("id");disqus_url=e.url;disqus_title=e.title;disqus_message=e.message;this.empty();var g=a(this);if(e.markdown==true){if(!("AttackLab" in window)){}}if(e.prettify==true){if(!("prettyPrint" in window)){}}a.ajax({type:"GET",url:"http://"+e.domain+".disqus.com/embed.js",dataType:"script",cache:true});if(e.show_count==true){var f=a("<a id='dsq-comment-count-for-this' class='dsq-comment-count' style='display:none;' href='"+window.location.href+"'>");f.appendTo(a("body")).disqusLink(e.domain)}a.disqus.ready(function(){if(e.ready){e.ready.apply(g)}setInterval(function(){a.disqus.added(function(h){if(e.markdown==true){a.disqus.toMarkdown(h)}if(e.added){e.added.apply(h,[h])}});a.disqus.edit(function(h){if(e.edit){e.edit.apply(h,[h])}});if(e.prettify==true){a.disqus.prettify()}})},e.interval)};a.disqus={links:function(e,f){var e=a(e);window.disqus_shortname=f;if(e.get(0)==null){return}e.each(function(i,j){var j=a(j);var g=j.attr("href").toLowerCase();var k=g.match(/^http(?:s)?:\/\//);if(!k){g=window.location.protocol+"//"+window.location.host+g}var h=g.match(/#disqus_thread/);if(!h){g+="#disqus_thread"}j.attr("href",g).addClass("dsq-comment-count")});a.ajax({type:"GET",url:"http://disqus.com/forums/"+f+"/count.js",dataType:"script",cache:true})},reactionCount:function(){var e=a("a#dsq-comment-count-for-this").html();var f=0;if(e){f=parseInt(e.match(/\d+\s+Comments\s+and\s+(\d+)\s+Reactions/i)[1])}return f},commentCount:function(){var e=a("a#dsq-comment-count-for-this").html();var f=0;if(e){f=parseInt(e.match(/(\d+)\s+Comments\s+and\s+\d+\s+Reactions/i)[1])}return f},ready:function(g){var f=100;var e=setInterval(function(){var h=a("#dsq-comments-title").get(0)!=null;if(h){clearInterval(e);g()}},f)},added:function(f){var e=a(".dsq-comment-message:not(.processed)");if(e.get(0)){f(e)}},edit:function(f){var e=a(".dsq-edit-textarea:not(.processed)");if(e.get(0)){e.val(e.val().replace(/<br>/g,"\n"));e.addClass("processed");f(e)}},toMarkdown:function(e){e.each(function(h,j){j=a(j);var l=j.html();var k=new Attacklab.showdown.converter();var f;try{f=l.match(/([\s\n]+)/)[1];l=l.substring(Math.max(0,f.length-1),l.length-1)}catch(g){}l=l.replace(/<br>(<br>+)?(\s+)?/g,"\n$1$2").replace(/\n<br>/g,"\n\n");l=k.makeHtml(l);l=a("<div>"+l+"</div>");var i=false;a("code",l).replaceWith(function(){var m=a(this).html();if(m){return"<code>"+c(m).replace(/&amp;/g,"&").replace(/&amp;/g,"&")+"</code>"}else{return""}});j.html(l.children());j.addClass("processed")})},prettify:function(){if(a("pre:not(.prettyprint)").get(0)){var e=a("pre");e.each(function(){var f=a(this);if(f.hasClass("prettyprint")){f.removeClass("prettyprint")}else{f.addClass("prettyprint");var h=b(a("code",this).html());try{}catch(g){}f.html("<code>"+h+"</code>");changed=true}});prettyPrint();e.addClass("prettyprint")}}};a.fn.disqusLink=function(e){return a.disqus.links(this,e)}})(jQuery);