<?php

/**
* Plugin Name: First Block
* Plugin URI: linkedin.com/colby-jax
* Description: First Block
* Author: Colby Jax
* Author URI: linkedin.com/colby-jax
*/

function blocks_firstblock_init() {
  register_block_type_from_metadata( __DIR__ );
}

add_action( "init" , "blocks_firstblock_init" );