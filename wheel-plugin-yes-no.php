<?php
/*
Plugin Name: Wheel Plugin Yes No
Plugin URI: https://web.facebook.com/zubair.akhtar.9237
Description: Picker Wheel is a specialized yes or no decision wheel. It helps to decide yes or no answer randomly by spinning. It can switch to yes, no or maybe.You Can Embed Using Shotcode [picker_wheel_names] (names shortcode UI in Spanish with custom names).
Version: 2.9.4
Author: Muhammad Zubair
Author URI: https://web.facebook.com/zubair.akhtar.9237
License: GPL2
*/

if ( ! defined( 'ABSPATH' ) ) {
exit; // Exit if accessed directly.
}

if ( ! defined( 'WHEEL_PLUGIN_YES_NO_VERSION' ) ) {
	define( 'WHEEL_PLUGIN_YES_NO_VERSION', '2.9.4' );
}

/**
 * Asset URL with cache-busting version (file modification time when available).
 *
 * @param string $relative_path Path relative to this plugin file, e.g. 'assets2/main_customized-.js'.
 */
function wheel_plugin_yes_no_asset_url( $relative_path ) {
	$file = plugin_dir_path( __FILE__ ) . $relative_path;
	$ver  = WHEEL_PLUGIN_YES_NO_VERSION;
	if ( is_readable( $file ) ) {
		$m = filemtime( $file );
		if ( false !== $m ) {
			$ver = (string) $m;
		}
	}
	return esc_url( add_query_arg( 'ver', $ver, plugins_url( $relative_path, __FILE__ ) ) );
}


// Shortcode for the picker wheel
function custom_picker_wheel_shortcode() {
ob_start(); ?>

<link rel="stylesheet" id="wheel-style-css" href="<?php echo wheel_plugin_yes_no_asset_url( 'assets/wheel-----styles.css' ); ?>" media="all" />
<link rel="stylesheet" id="sweetalert2-css" href="<?php echo wheel_plugin_yes_no_asset_url( 'assets/sweet-alerts.css' ); ?>" media="all" />
<script type="text/javascript" src="<?php echo wheel_plugin_yes_no_asset_url( 'assets/jquery.min.js' ); ?>" id="jquery-core-js"></script>
<style>
.right {
max-width: 500px;
margin: auto;
}
</style>
<div>
<div class="wheel_wrapper_main">
    <div class="wheel-horizontal" style="font-size: 16px; width: 500px; height: 500px;">
    </div>
    <div class="right" style="    margin: auto;">
        <div class="tries">
            <span class="yes">0</span>
            <span class="no">0</span>
            <span class="maybe d-none">0</span>
        </div>
        <div class="buttons">
            <button onClick="initialize_wheel(true)" data-cf-modified-fc745e194a9f78d844fb00f2->Yes, NO and Maybe</button>
            <button onClick="initialize_wheel(false)" data-cf-modified-fc745e194a9f78d844fb00f2->Yes and NO</button>
        </div>
        <div class="no_of_items">
            <h2>Items to Show</h2>
            <div class="items">
                <button onClick="initialize_wheel_items(1)" data-cf-modified-fc745e194a9f78d844fb00f2->ONE</button>
                <button onClick="initialize_wheel_items(2)" data-cf-modified-fc745e194a9f78d844fb00f2->TWO</button>
                <button onClick="initialize_wheel_items(3)" data-cf-modified-fc745e194a9f78d844fb00f2->THREE</button>
                <button   onClick="initialize_wheel_items(4)" data-cf-modified-fc745e194a9f78d844fb00f2->FOUR</button>
                <button   onClick="initialize_wheel_items(5)" data-cf-modified-fc745e194a9f78d844fb00f2->FIVE</button>
            </div>
        </div>
    </div>
</div>
</div>

<script type="text/javascript" src="<?php echo wheel_plugin_yes_no_asset_url( 'assets/jquery-2.1.1.js' ); ?>" id="jquery-core-js"></script>
<script type="text/javascript" src="<?php echo wheel_plugin_yes_no_asset_url( 'assets/jquery.superwheel.js' ); ?>" id="superwheel-js"></script>
<script type="text/javascript" src="<?php echo wheel_plugin_yes_no_asset_url( 'assets/sweetalert2.min.js' ); ?>" id="sweetalert2-js"></script>
<script>
var pickerwheelObject = { folderPath: "<?php echo esc_url( plugins_url( 'assets', __FILE__ ) ); ?>" };
</script>
<script type="text/javascript" src="<?php echo wheel_plugin_yes_no_asset_url( 'assets/main.js' ); ?>" id="main-js"></script>
<script src="<?php echo wheel_plugin_yes_no_asset_url( 'assets/rocket-loader.min.js' ); ?>" data-cf-settings="fc745e194a9f78d844fb00f2-|49" defer></script>

<?php
return ob_get_clean();
}


// Shortcode for the picker wheel
function custom_picker_wheel_shortcode_picker_wheel_names() {
ob_start(); ?>


<link rel="stylesheet" id="sweetalert2-css" href="<?php echo wheel_plugin_yes_no_asset_url( 'assets2/sweet-alerts.css' ); ?>" media="all" />
<link rel="stylesheet" id="superwheel-css" href="<?php echo wheel_plugin_yes_no_asset_url( 'assets2/superwheel.css' ); ?>" media="all" />
<link rel="stylesheet" id="pickerwheel_customized-css" href="<?php echo wheel_plugin_yes_no_asset_url( 'assets2/pickerwheel_customized1.css' ); ?>" media="all" />
<script type="text/javascript" src="<?php echo wheel_plugin_yes_no_asset_url( 'assets2/jquery.min.js' ); ?>" id="jquery-core-js"></script>


<style>
.right {
max-width: 500px;
margin: auto;
}
:root{
    --global-palette1: #023047;
    --global-palette2: #51e3c2;
    --global-palette3: #125869;
    --global-palette4: #2d3748;
    --global-palette5: #c8003a;
    --global-palette6: #21a19d;
    --global-palette7: rgba(142, 202, 230, .1);
    --global-palette8: #f7fafc;
    --global-palette9: #fff;
    --global-palette9rgb: 255, 255, 255;
    --global-palette-highlight: var(--global-palette5);
    --global-palette-highlight-alt: var(--global-palette1);
    --global-palette-highlight-alt2: var(--global-palette9);
    --global-palette-btn-bg: #21a19d;
    --global-palette-btn-bg-hover: var(--global-palette5);
    --global-palette-btn: var(--global-palette9);
    --global-palette-btn-hover: var(--global-palette9);
    --global-body-font-family: Quicksand, sans-serif;
    --global-heading-font-family: inherit;
    --global-primary-nav-font-family: inherit;
    --global-fallback-font: sans-serif;
    --global-display-fallback-font: sans-serif;
    --global-content-width: 1290px;
    --global-content-narrow-width: 842px;
    --global-content-edge-padding: 1.5rem;
    --global-content-boxed-padding: 2rem;
    --global-calc-content-width: calc(1290px - var(--global-content-edge-padding) - var(--global-content-edge-padding));
    --wp--style--global--content-size: var(--global-calc-content-width);
}
.wheel_wrapper_main .no_of_items .items, .wheel_wrapper_main .custom_text .items {
    display: block; 
}
@media only screen and (max-width: 768px) {
.custz_wheel {
    margin-bottom: 20px;
    padding: 30px 7px 20px;
    border: 1px solid var(--global-palette1);
}
.wheel_wrapper_main .no_of_items .items, .wheel_wrapper_main .custom_text .items {
    display: block;
    justify-content: space-between;
    gap: 10px;
    flex-wrap: wrap;
    text-align: center;
}
div.no_of_items > div > button:nth-child(5){
    width: 100%;
    margin-top: 3px;
}
}
 
</style>
<div>
<div class="wheel_wrapper_main">
<div class="wheel-horizontal" style="font-size: 16px; width: 500px; height: 500px;"></div>
<div class="right">
<div class="tries">
<span class="yes">0</span>
<span class="no">0</span>
</div>
<div class="custz_wheel ">
<div class="row picker-name-row">
<p>
<input type="text" value="Carlos" placeholder="Añadir nombre">
</p>
<p><input type="color" class="colorInput" value="#023047" /></p>
<p class="picker-slice-image-wrap">
<label class="interaction picker-slice-image-trigger" title="Añadir imagen">
<input type="file" class="picker-slice-image-file" accept="image/*" tabindex="-1" />
<span class="picker-slice-image-icon"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M18 20H4V6h9V4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9h-2v9zm-7.79-3.17l-1.96-2.36L5.5 18h11l-3.54-4.71zM20 4V1h-2v3h-3c.01.01 0 2 0 2h3v2.99c.01.01 2 0 2 0V6h3V4h-3z"/></svg></span>
</label>
<input type="hidden" class="picker-slice-image-data" value="" />
</p>
<span class="interaction dragable_btn">
<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line></svg>
</span>
<span class="interaction clone">
<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
</span>
<span class="interaction delete">
<svg viewBox="0 0 24 24" width="24" height="24" stroke="#FF2800" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
</span>
</div>
<div class="row picker-name-row">
<p>
<input type="text" value="María" placeholder="Añadir nombre">
</p>
<p><input type="color" class="colorInput" value="#51e3c2" /></p>
<p class="picker-slice-image-wrap">
<label class="interaction picker-slice-image-trigger" title="Añadir imagen">
<input type="file" class="picker-slice-image-file" accept="image/*" tabindex="-1" />
<span class="picker-slice-image-icon"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M18 20H4V6h9V4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9h-2v9zm-7.79-3.17l-1.96-2.36L5.5 18h11l-3.54-4.71zM20 4V1h-2v3h-3c.01.01 0 2 0 2h3v2.99c.01.01 2 0 2 0V6h3V4h-3z"/></svg></span>
</label>
<input type="hidden" class="picker-slice-image-data" value="" />
</p>
<span class="interaction dragable_btn">
<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line></svg>
</span>
<span class="interaction clone">
<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
</span>
<span class="interaction delete">
<svg viewBox="0 0 24 24" width="24" height="24" stroke="#FF2800" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
</span>
</div>
<div class="row picker-name-row">
<p>
<input type="text" value="José" placeholder="Añadir nombre">
</p>
<p><input type="color" class="colorInput" value="#125869" /></p>
<p class="picker-slice-image-wrap">
<label class="interaction picker-slice-image-trigger" title="Añadir imagen">
<input type="file" class="picker-slice-image-file" accept="image/*" tabindex="-1" />
<span class="picker-slice-image-icon"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M18 20H4V6h9V4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9h-2v9zm-7.79-3.17l-1.96-2.36L5.5 18h11l-3.54-4.71zM20 4V1h-2v3h-3c.01.01 0 2 0 2h3v2.99c.01.01 2 0 2 0V6h3V4h-3z"/></svg></span>
</label>
<input type="hidden" class="picker-slice-image-data" value="" />
</p>
<span class="interaction dragable_btn">
<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line></svg>
</span>
<span class="interaction clone">
<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
</span>
<span class="interaction delete">
<svg viewBox="0 0 24 24" width="24" height="24" stroke="#FF2800" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
</span>
</div>
<div class="row picker-name-row">
<p>
<input type="text" value="Ana" placeholder="Añadir nombre">
</p>
<p><input type="color" class="colorInput" value="#c8003a" /></p>
<p class="picker-slice-image-wrap">
<label class="interaction picker-slice-image-trigger" title="Añadir imagen">
<input type="file" class="picker-slice-image-file" accept="image/*" tabindex="-1" />
<span class="picker-slice-image-icon"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M18 20H4V6h9V4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9h-2v9zm-7.79-3.17l-1.96-2.36L5.5 18h11l-3.54-4.71zM20 4V1h-2v3h-3c.01.01 0 2 0 2h3v2.99c.01.01 2 0 2 0V6h3V4h-3z"/></svg></span>
</label>
<input type="hidden" class="picker-slice-image-data" value="" />
</p>
<span class="interaction dragable_btn">
<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line></svg>
</span>
<span class="interaction clone">
<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
</span>
<span class="interaction delete">
<svg viewBox="0 0 24 24" width="24" height="24" stroke="#FF2800" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
</span>
</div>
<div class="picker-add-row-wrap">
<button type="button" class="picker-add-name" title="Añadir nombre" aria-label="Añadir nombre">
<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
</button>
</div>
</div>
<div class="no_of_items">
<h2>
Elementos a mostrar
</h2>
<div class="items">
<button type="button" data-wheel-items="1" class="active">UNO</button>
<button type="button" data-wheel-items="2">DOS</button>
<button type="button" data-wheel-items="3">TRES</button>
<button type="button" data-wheel-items="4">CUATRO</button>
<button type="button" data-wheel-items="5">CINCO</button>
</div>
</div>
</div>
</div>
</div>





<script type="text/javascript" src="<?php echo wheel_plugin_yes_no_asset_url( 'assets2/jquery-2.1.1.js' ); ?>" id="jquery-core-js"></script>
<script type="text/javascript" src="<?php echo wheel_plugin_yes_no_asset_url( 'assets2/jquery.superwheel.js' ); ?>" id="superwheel-js"></script>
<script type="text/javascript" src="<?php echo wheel_plugin_yes_no_asset_url( 'assets2/sweetalert2.min.js' ); ?>" id="sweetalert2-js"></script>
<script>
var pickerwheelObject = { folderPath: "<?php echo esc_url( plugins_url( 'assets2', __FILE__ ) ); ?>" };
</script> 

<script type="text/javascript" src="<?php echo wheel_plugin_yes_no_asset_url( 'assets2/main_customized-.js' ); ?>"  id="pickerwheel_customized-js"></script>

<script src="<?php echo wheel_plugin_yes_no_asset_url( 'assets2/rocket-loader.min.js' ); ?>" data-cf-settings="b68aeeba29bf3269b2a608c8-|49" defer></script>


<?php
return ob_get_clean();
}
add_shortcode('picker_wheel', 'custom_picker_wheel_shortcode');
add_shortcode('picker_wheel_names', 'custom_picker_wheel_shortcode_picker_wheel_names');