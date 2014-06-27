$( document ).ready( function () {

	$( '.dropdown-toggle' ).click(function () {

		if ( $( window ).width() <= 768 ) {

		} else {
			$( '.nav-overlay' ).css( 'display', 'block' );

			if( !$( this ).parent().hasClass( 'open' ) ) {
				$( this ).parent().siblings('.dropdown').each( function () {
					$( this ).children( 'a' ).next().css( 'display', 'none' );
				} );
			}
			$( this ).next( '.dropdown-menu' ).slideToggle( 300 );
		}
	});

	$( '.nav-overlay' ).click( function () {
		$( '.nav-overlay' ).css( 'display', 'none' );
		$( 'ul.dropdown-menu' ).css( 'display', 'none' );
	} );

	$( window ).resize( function () {
		//alert( 'window has resized' )
	} );

	$( '.info' ).click( function ( e ) {
		e.preventDefault();
		console.log( 'info clicked' )
	} );

} );