<?php

/**
 * Plugin Name: needandgive
 * Description: Test plugin to provide support for needandgive calendar etc.
 * Author: Thomas Madden & Josh Hallinan
 * Author URL:
 * Version: 0.1
 *
 * @package needandgive
 */
add_action('init', 'needandgive_add_custom_shortcode');
function needandgive_add_custom_shortcode()
{
  add_shortcode('needandgive', 'needandgive_needandgive');
}


function needandgive_needandgive($atts, $content = "")
{
  return '<div id="root"></div>';
}


add_action('wp_enqueue_scripts', 'needandgive_enq_react');
function needandgive_enq_react()
{
  global $post, $wpdb;

  // Check if post has shortcode to determine wether to load the SPA
  // https://wordpress.stackexchange.com/a/207749
  if (has_shortcode($post->post_content, 'needandgive')) {
    wp_enqueue_script(
      'needandgive-plugin-react-script',
      plugin_dir_url(__FILE__) . '/js/build/index.js',
      ['wp-element'],
      rand(), // Change this to null for production
      true
    );

    wp_enqueue_style(
      'needandgive-plugin-react-style',
      plugin_dir_url(__FILE__) . '/js/build/index.css',
      array(),
      false,
    );
  }
}
