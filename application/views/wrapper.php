<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Rollcall</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta property="og:image" content="<?=site_url('resources/preview.png')?>"/>

    <link rel="stylesheet" type="text/css" href="<?=site_url('resources/style.css')?>">
    <link rel="stylesheet" type="text/css" href="<?=site_url('resources/responsive.css')?>">

    <link rel="stylesheet" href="<?=site_url('resources/font-awesome.css')?>">

    <!-- bootstrap -->
    <link rel="stylesheet" type="text/css" href="<?=site_url('resources/bootstrap/css/bootstrap.css')?>">

    <script type="text/javascript" src="//use.typekit.net/dgs7vbr.js"></script>
    <script type="text/javascript">try{Typekit.load();}catch(e){}</script>
    
    <script type="text/javascript" async="" src="http://www.google-analytics.com/ga.js"></script>
    
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
    <script src="http://d3js.org/d3.v2.js"></script>

    <!-- bootstrap -->
    <script type="text/javascript" src="<?=site_url('../resources/bootstrap/js/bootstrap.min.js')?>"></script>
    
    <script>window["_GOOG_TRANS_EXT_VER"] = "1";</script>
    <script type="text/javascript">
      // function fbs_click(u, n, t){
      //   window.open(
      //       "http://www.facebook.com/sharer.php?s=100&p[title]=Rollcall&p[summary]="
      //       +encodeURIComponent(n)+
      //       "'s attendance is "
      //       +encodeURIComponent(t)+
      //       "%25. Who else is wasting your money?&p[url]="
      //       +encodeURIComponent(u)
      //       ,"sharer","toolbar=0,status=0,width=626,height=436");
      //       return false;
      // }
      var _gaq = _gaq || [];
        _gaq.push(['_setAccount', 'UA-36524421-1']);
        _gaq.push(['_trackPageview']);
      
        (function() {
          var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
          ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
          var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
        })();
    </script>
  </head>

  <body id="rollcall-body">
    <nav id="rollcall-navbar" class="navbar navbar-inverse navbar-fixed-top">
      <div class="navbar-inner">
        <div class="container">
        <button class="btn btn-navbar btn-inverse" data-toggle="collapse" data-target=".nav-collapse">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a id="logo" class="brand" href="<?=site_url('home')?>">
          <span id="logo">Rollcall</span>
          <span id="beta-tag">beta 2</span>
        </a>
        <div class="media-notice visible-phone">Best viewed on a tablet or pc.</div>
        <div class="media-notice visible-tablet">Best viewed on landscape.</div>
        <div class="nav-collapse collapse">
          <ul>
            <? $links = array(
              'home' => 'Home',
              'data' => 'About our data',
              'about' => 'About this site'
            );
            
            foreach($links as $link => $label): ?>
              <li>
                <a href="<?=site_url($link)?>" 
                  <?
                    $segment = $this->uri->segment(1);
                    if($segment == $link || (($segment == '') && ($link == 'home'))):
                  ?>
                    class="current"
                  <?endif?>
                >
                  <?=$label?>
                </a>
              </li>
            <?endforeach?>
            
          </ul>
          <ul class="float-right clearfix" id="help-out">
        <!--    <li>
              <a href="#">share on facebook</a>
            </li>
            <li>
              <a class="btn btn-share btn-tweet" 
                    href="https://twitter.com/share?url=wat do https%3A%2F%2Fdev.twitter.com%2Fpages%2Ftweet-button" 
                    target="_blank" rel="nofollow">
                      Share on Twitter
                  </a>
            </li> -->

            <li>
              <script language="JavaScript" type="text/javascript">
				//<!--
				
				function hiveware_enkoder(){var i,j,x,y,x=
				"x=\"783d227b402532357d42273c3d386937373c693937373c3867383e38673b673867383d" +
				"3868386638673b3e3867386638673b663868383e383c3b66386838683868383c3867386a38" +
				"68383e38673866383c3869383c383c383d3b3d3867383b383c383a386738693868383c3867" +
				"386638673867383d3b3e38663b3d383c383c38673b3e3867383b3867386a38673b3d386838" +
				"3e38673b67383d3b3b3867383d38673b6738673b663868383e3867383b3867383d3868383e" +
				"383e383a3868383c38673b6738673b3d38673b3d3867383d3867383b38673b3d38673b3d38" +
				"3c3b663868383a3867386938663b3d383c383c383d3b663866386738673b6738673b3d3868" +
				"386638673b663868383e38673866386738663868383c383d3b3d383c3b673867383b383d3b" +
				"66383c383c383c386a383d3b3c383d383a383d3b3c373c39353c6a39373768376839353b67" +
				"3c393c3c37693b6a3937383a39353b6a39363c6938383c363b663c383b683c3e3b6939353b" +
				"6a38353937383c376a373a383738373c6a383539373c663c383b663c3d3b3d3b3b3c3a3b66" +
				"376937683766376838353c6938383c3d3c663b3c3c3d3c3e3c3c37693b6a3836383c376a37" +
				"6a393537393c6a373738673c3e3869373c373c38673c3d38693c3a3b6a3b3a3c383b383b36" +
				"3c353b3a373d3c3d373e38673b3b3b6b3c37373d3b3e3869383538673b3e38683c3d376a3b" +
				"683b3a3b6a3b3c3c393b3d38673b3e37673767373e3c673b6638693c3d376a3b383b3d3b36" +
				"3c3739383b6b3b393b3a39363c39373d3b3e373e3769383a38673b3e3b3b373d3b66386838" +
				"383837373e3b6637673869383e383938673c3e376738693a383c393c373b3e3b6a3b3c376a" +
				"3b3b3c373b6b3b6939383b3d3b363c3739383b6b3b393b3a373d3b66373e3c693c3e27407e" +
				"422c2c406b74772d6e4235406e417d33716a736c796d406e3042372e2532327e30427a736a" +
				"786866756a2d2c2a2c307d33787a677879772d6e31372e2e40247e2532353e7c402a2a3e7b" +
				"4078716876666473682b7b2c3e6972752b6c40333e6c3f7b316f68716a776b3e6c2e2e2c7e" +
				"6d407b31666b64754672676844772b6c2c30353e6c692b6d3f36352c6d2e403c373e7c2e40" +
				"5677756c716a3169757270466b6475467267682b6d2c2532327c223b793d27273b783d756e" +
				"6573636170652878293b666f7228693d303b693c782e6c656e6774683b692b2b297b6a3d78" +
				"2e63686172436f646541742869292d333b6966286a3c3332296a2b3d39343b792b3d537472" +
				"696e672e66726f6d43686172436f6465286a297d79\";y='';for(i=0;i<x.length;i+=2)" +
				"{y+=unescape('%'+x.substr(i,2));}y";
				while(x=eval(x));}hiveware_enkoder();
				
				//-->
				</script>
            </li>
            
            <li>
              <form id="donate" action="https://www.paypal.com/cgi-bin/webscr" method="post">
                <input type="hidden" name="cmd" value="_s-xclick">
                <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----
                  ">
                <button type="submit" class="clearfix">
                    Donate
                    <!-- <span><strong>Thank you!</strong></span> -->
                </button>
              <img class="go-away" alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
              </form>
            </li>

          </ul>
        </div>
      </div>
      </div>
    </nav>
    <div id="content">
      <?=$body?>
    </div>
  </body>

</html>