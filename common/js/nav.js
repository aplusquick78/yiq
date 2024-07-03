jQuery(document).ready(function($) {

	$( '.prevent' ).click(function(){
		if(!jQuery.browser.msie){
			event.preventDefault();
		}else{
			event.returnValue = false;
		}
	});

	function hideAll() {
		$( '#menu-main-nav > li > ul.sub-menu' ).hide();
	}
	if ( jQuery.browser.msie ){
		$( '#menu-main-nav > li' ).focusin( function() {
			$( this ).children( 'ul.sub-menu' ).show();
		});
		$('body').keydown( function() {
			if( event.keyCode == 9 ) {
				if( event.shiftKey ) {
					hideAll();
				}else{
					$( '#menu-main-nav > li > ul.sub-menu li:last-child' ).on( 'focusout', function() {
						$( this ).parent( 'ul.sub-menu' ).hide();
					});
				}
			}
		});
	}else{
		$( '#menu-main-nav > li' ).on( 'focusin mouseover', function() {
			$( this ).children( 'ul.sub-menu' ).show();
		});
		$( '#menu-main-nav > li' ).on( 'focusout mouseleave', function() {
			$( this ).children( 'ul.sub-menu' ).hide();
		});
	}













});