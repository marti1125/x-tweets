(function(){  

  // Create your component here
  // http://x-tags.org/docs
  
  xtag.register('x-tweets', {
    extends: 'div',
    lifecycle: {
      created: function() {
        // superinputs begin life knowing they're super.
        this.value = 'super';
      },
      inserted: function() {
        // superinputs announce their arrival in the DOM like a boss!
        //alert("Yeah, that's right, superinput comin' thro'!");
      },
      removed: function() {

      },
      attributeChanged: function() {

      }
    }, 
    events: { 
    
    },
    accessors: {
      
    }, 
    methods: {
      showUrlInTweet :function(tweet){
        var url_regexp = /\b((?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/gi;
        return tweet.replace(url_regexp,"<a href='$1' class='tweetURL' target='_blank'>$1</a>");  
      }
    }
  });

})();
